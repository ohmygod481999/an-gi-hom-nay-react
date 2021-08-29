import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import _ from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ModalFilter from "../../../layout/ModalFilter";
import { utils } from "../../../utils";
import { GET_AUTH } from "../../../utils/apollo/entities/auth/operations/auth.queries";
import { GET_RANDOM_DISH } from "../../../utils/apollo/entities/dish/operations/dish.queries";
import { GET_LOCATION } from "../../../utils/apollo/entities/location/operations/location.queries";
import {
    GET_MEAL,
    GET_MEALS,
} from "../../../utils/apollo/entities/meal/operations/meal.quereis";
import { INSERT_USER_DISH } from "../../../utils/apollo/entities/userdish/userdish.mutations";
import { GET_USER_DISHES } from "../../../utils/apollo/entities/userdish/userdish.queries";
import { INSERT_USER_HISTORY } from "../../../utils/apollo/entities/userhistory/userhistory.mutations";
import { GET_USER_HISTORIES } from "../../../utils/apollo/entities/userhistory/userhistory.queries";
import { useLocation } from "../../../utils/hooks/useLocation";

function Random() {
    useLocation();
    const history = useHistory();
    // const [randomDish, setRandomDish] = useState(null);
    const [loading, setLoading] = useState(false);
    const [picking, setPicking] = useState(false);
    const [pickedMeal, setPickedMeal] = useState(null);

    const locationData = useQuery(GET_LOCATION);
    const authState = useQuery(GET_AUTH);
    const userId = authState.data.auth.id;

    const [randomDish, setRandomDish] = useState();
    const [queryRandomDish, randomDishState] = useLazyQuery(GET_RANDOM_DISH, {
        fetchPolicy: "network-only",
    });

    // query user dishes
    const queryUserDishes = useQuery(GET_USER_DISHES, {
        variables: {
            user_id: userId,
        },
    });
    const userdishes =
        (queryUserDishes.data && queryUserDishes.data.userdish) || [];
    // end query user dishes

    // query meals
    const queryMeals = useQuery(GET_MEALS);
    const meals = (queryMeals.data && queryMeals.data.meal) || [];
    // end query meals

    const [insertUserDish] = useMutation(INSERT_USER_DISH, {
        refetchQueries: [GET_USER_DISHES],
    });
    const [insertUserHistory] = useMutation(INSERT_USER_HISTORY, {
        refetchQueries: [GET_USER_HISTORIES],
    });

    const getRandomDish = async () => {
        queryRandomDish({
            variables: {
                mealId: pickedMeal.id,
            },
        });
    };

    useEffect(() => {
        const setRandomDishAsync = async () => {
            if (randomDishState.data) {
                if (randomDishState.data.randomDish) {
                    let dish = {
                        ...randomDishState.data.randomDish,
                    };
                    let duration, distance;
                    if (
                        _.get(locationData, "data.location.scriptLoaded") &&
                        _.get(locationData, "data.location.latlng") &&
                        dish.restaurant.latlng
                    ) {
                        const curLatLng = _.get(
                            locationData,
                            "data.location.latlng"
                        );
                        const restaurantLatLng = utils.getLatLngFromString(
                            dish.restaurant.latlng
                        );
                        let res;
                        try {
                            res = await utils.getDistanceAndDurationMap(
                                curLatLng.lat,
                                curLatLng.lng,
                                restaurantLatLng.lat,
                                restaurantLatLng.lng
                            );
                            distance = res.distance;
                            duration = res.duration;
                        } catch (e) {
                            distance = null;
                            duration = null;
                        }
                    }
                    dish["duration"] = duration ? duration.text : "N/A";
                    dish["distance"] = distance ? distance.text : "N/A";
                    setRandomDish(dish);
                } else {
                    setRandomDish(null);
                }
            }
        };
        setRandomDishAsync();
    }, [randomDishState]);

    const handleLikeDish = async () => {
        insertUserDish({
            variables: {
                dish_id: randomDish.id,
                user_id: userId,
            },
        })
            .then((res) => toast["success"]("Đã thêm vào mục yêu thích"))
            .catch((e) => toast["error"]("Thất bại " + e));
    };

    useEffect(() => {
        setRandomDish(undefined);
    }, [pickedMeal]);

    const pickDishHandler = async (dishId) => {
        setPicking(true);
        insertUserHistory({
            variables: {
                dish_id: dishId,
                user_id: userId,
            },
        })
            .then((res) => {
                history.push("/home/dish/" + dishId);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                setPicking(false);
            });
    };

    useEffect(() => {
        if (queryMeals.data) {
            // set picked meal
            console.log("Picked meal " + JSON.stringify(meals[0]));
            setPickedMeal(meals[0]);
            // slide animation
            window
                .$(".cat-slider")
                .not(".slick-initialized")
                .slick({
                    centerMode: true,
                    centerPadding: "30px",
                    slidesToShow: 4,
                    arrows: false,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: "40px",
                                slidesToShow: 4,
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: "40px",
                                slidesToShow: 4,
                            },
                        },
                    ],
                });
        }
    }, [queryMeals]);

    return (
        <div
            style={{
                paddingBottom: 90,
            }}
        >
            <ModalFilter />
            <div className="bg-primary p-3">
                <div className="text-white">
                    <div className="title d-flex align-items-center">
                        <a className="toggle" href="#">
                            <span />
                        </a>
                        <h4 className="font-weight-bold m-0 pl-5">Browse</h4>
                        <a
                            className="text-white font-weight-bold ml-auto"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            href="#"
                        >
                            Filter
                        </a>
                    </div>
                </div>
            </div>
            <div className="cat-slider border-bottom">
                {meals.map((meal) => (
                    <div key={meal.id} className="cat-item px-1 py-3">
                        <a
                            className="bg-white rounded d-block p-2 text-center shadow"
                            style={
                                pickedMeal && meal.id === pickedMeal.id
                                    ? {
                                          borderBottom:
                                              "4px solid " + "#3b8beb",
                                      }
                                    : {}
                            }
                            onClick={() => {
                                setPickedMeal(meal);
                            }}
                        >
                            <img
                                src="img/icons/Fries.png"
                                className="img-fluid mb-2"
                            />
                            <p
                                className={`m-0 small ${
                                    pickedMeal && meal.id === pickedMeal.id && "text-primary"
                                }`}
                                dangerouslySetInnerHTML={{
                                    __html: meal.name
                                        .split(" ")
                                        .map((v, i) => {
                                            if (i !== 0) return v;
                                            return (
                                                v.charAt(0).toUpperCase() +
                                                v.slice(1) +
                                                "<br/>"
                                            );
                                        })
                                        .join(" "),
                                }}
                            ></p>
                        </a>
                    </div>
                ))}
            </div>

            {pickedMeal && (
                <>
                    <div className="px-3 pt-3 title d-flex align-items-center">
                        <h5 className="m-0">
                            Để mình gợi ý cho bạn {pickedMeal.name} nhé
                        </h5>
                        <a
                            className="font-weight-bold ml-auto"
                            href="trending.html"
                        >
                            {/* View all <i className="feather-chevrons-right" /> */}
                        </a>
                    </div>
                    <div className="">
                        {randomDish ? (
                            <div
                                className="mx-4 mt-3 mb-3"
                                style={{
                                    position: "relative",
                                }}
                            >
                                <div
                                    style={{
                                        display: randomDishState.loading
                                            ? "block"
                                            : "none",
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        zIndex: 1,
                                        cursor: "progress",
                                        top: 0,
                                        left: 0,
                                        backgroundColor: "black",
                                        opacity: 0.5,
                                    }}
                                ></div>
                                <div
                                    style={{
                                        position: "absolute",
                                        display: randomDishState.loading
                                            ? "block"
                                            : "none",
                                        zIndex: 2,
                                        left: "45%",
                                        top: "30%",
                                    }}
                                >
                                    <div
                                        className="spinner-grow text-primary"
                                        role="status"
                                    >
                                        <span className="sr-only">
                                            Loading...
                                        </span>
                                    </div>
                                </div>
                                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                    <div className="list-card-image">
                                        <div className="star position-absolute">
                                            <span className="badge badge-success">
                                                <i className="feather-star" />{" "}
                                                3.1 (300+)
                                            </span>
                                        </div>
                                        <div className="favourite-heart text-primary position-absolute">
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (
                                                        userdishes
                                                            .map(
                                                                (userdish) =>
                                                                    userdish.dish_id
                                                            )
                                                            .includes(
                                                                randomDish.id
                                                            )
                                                    ) {
                                                        return toast["info"](
                                                            "Món này đã có trong mục yêu thích của bạn"
                                                        );
                                                    }
                                                    handleLikeDish();
                                                }}
                                            >
                                                <i
                                                    className="feather-heart"
                                                    style={
                                                        userdishes
                                                            .map(
                                                                (userdish) =>
                                                                    userdish.dish_id
                                                            )
                                                            .includes(
                                                                randomDish.id
                                                            )
                                                            ? {
                                                                  backgroundColor:
                                                                      "#3b8beb",
                                                                  color: "white",
                                                              }
                                                            : null
                                                    }
                                                />
                                            </a>
                                        </div>
                                        <div className="member-plan position-absolute">
                                            <span className="badge badge-dark">
                                                {utils.formatMoney(
                                                    randomDish.price
                                                )}
                                            </span>
                                        </div>
                                        <a>
                                            <img
                                                src={randomDish.img}
                                                // src="img/trending1.png"
                                                className="img-fluid item-img w-100"
                                            />
                                        </a>
                                    </div>
                                    <div className="p-3 position-relative">
                                        <div className="list-card-body">
                                            <h6 className="mb-1">
                                                <a
                                                    // href="restaurant.html"
                                                    className="text-black"
                                                >
                                                    {randomDish.name}
                                                </a>
                                            </h6>
                                            <p className="text-gray mb-3">
                                                {randomDish.restaurant.name}
                                            </p>
                                            <p className="text-gray mb-3 time">
                                                <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                                    <i className="feather-clock" />{" "}
                                                    {randomDish.duration}
                                                </span>{" "}
                                                <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                                    <i className="feather-send" />{" "}
                                                    {randomDish.distance}
                                                </span>{" "}
                                                <span className="float-right text-black-100">
                                                    {" "}
                                                    {
                                                        randomDish.restaurant
                                                            .address
                                                    }
                                                </span>
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="list-card-badge">
                                                    <span className="badge badge-danger">
                                                        OFFER
                                                    </span>{" "}
                                                    <small>
                                                        {randomDish.description}
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-4 d-flex justify-content-end">
                                                <button
                                                    className="btn btn-primary"
                                                    disabled={picking}
                                                    onClick={() =>
                                                        pickDishHandler(
                                                            randomDish.id
                                                        )
                                                    }
                                                >
                                                    {picking && (
                                                        <span
                                                            className="spinner-border spinner-border-sm"
                                                            role="status"
                                                            aria-hidden="true"
                                                        ></span>
                                                    )}{" "}
                                                    CHỌN
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                className="mx-4 mt-3 mb-3"
                                style={{
                                    position: "relative",
                                }}
                            >
                                <div
                                    style={{
                                        display: randomDishState.loading
                                            ? "block"
                                            : "none",
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        zIndex: 1,
                                        cursor: "progress",
                                        top: 0,
                                        left: 0,
                                        backgroundColor: "black",
                                        opacity: 0.5,
                                    }}
                                ></div>
                                <div
                                    style={{
                                        position: "absolute",
                                        display: randomDishState.loading
                                            ? "block"
                                            : "none",
                                        zIndex: 1,
                                        left: "45%",
                                        top: "30%",
                                    }}
                                >
                                    <div
                                        className="spinner-grow text-primary"
                                        role="status"
                                    >
                                        <span className="sr-only">
                                            Loading...
                                        </span>
                                    </div>
                                </div>
                                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                    <div className="list-card-image">
                                        <div className="favourite-heart text-primary position-absolute"></div>
                                        <div className="member-plan position-absolute">
                                            <span className="badge badge-dark">
                                                {/* {utils.formatMoney(randomDish.price)} */}
                                            </span>
                                        </div>
                                        <div className="pl-5 pr-5 mb-3 text-center">
                                            <img
                                                src={
                                                    randomDish !== null
                                                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHnqr6vzNdx729B7ueeUSSJzntp4s5ocxKw&usqp=CAU"
                                                        : "https://firebasestorage.googleapis.com/v0/b/an-gi-hom-nay-48.appspot.com/o/public_media%2F3558359.png?alt=media&token=f7de3364-bd8c-4297-a598-73942a82e090"
                                                }
                                                className="img-fluid item-img"
                                            />
                                        </div>
                                        {randomDish === null && (
                                            <h5 className="text-center pl-3 pr-3">
                                                Xin lỗi, không tìm thấy món phù
                                                hợp với bạn
                                            </h5>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="text-center">
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                getRandomDish();
                            }}
                            disabled={randomDishState.loading}
                        >
                            {randomDishState.loading && (
                                <span
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                            )}{" "}
                            Gợi ý tôi
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Random;
