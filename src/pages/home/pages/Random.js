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
import { GET_MEAL } from "../../../utils/apollo/entities/meal/operations/meal.quereis";
import { INSERT_USER_DISH } from "../../../utils/apollo/entities/userdish/userdish.mutations";
import { GET_USER_DISHES } from "../../../utils/apollo/entities/userdish/userdish.queries";
import { INSERT_USER_HISTORY } from "../../../utils/apollo/entities/userhistory/userhistory.mutations";
import { GET_USER_HISTORIES } from "../../../utils/apollo/entities/userhistory/userhistory.queries";
import { useLocation } from "../../../utils/hooks/useLocation";

function Random() {
    const { id } = useParams();
    useLocation();
    const history = useHistory();
    // const [randomDish, setRandomDish] = useState(null);
    const [loading, setLoading] = useState(false);
    const [picking, setPicking] = useState(false);

    const locationData = useQuery(GET_LOCATION);
    const authState = useQuery(GET_AUTH);
    const userId = authState.data.auth.id;

    const { data } = useQuery(GET_MEAL, {
        variables: {
            id,
        },
    });
    const [randomDish, setRandomDish] = useState(null);
    const [queryRandomDish, randomDishState] = useLazyQuery(GET_RANDOM_DISH, {
        fetchPolicy: "network-only",
    });

    const queryUserDishes = useQuery(GET_USER_DISHES, {
        variables: {
            user_id: userId,
        },
    });
    const userdishes =
        (queryUserDishes.data && queryUserDishes.data.userdish) || [];

    const [insertUserDish] = useMutation(INSERT_USER_DISH, {
        refetchQueries: [GET_USER_DISHES],
    });
    const [insertUserHistory] = useMutation(INSERT_USER_HISTORY, {
        refetchQueries: [GET_USER_HISTORIES],
    });

    const meal = (data && data.meal_by_pk) || {};

    const getRandomDish = async () => {
        queryRandomDish({
            variables: {
                mealId: meal.id,
            },
        });
    };

    useEffect(() => {
        const setRandomDishAsync = async () => {
            if (randomDishState.data && randomDishState.data.randomDish) {
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
                    const res = await utils.getDistanceAndDurationMap(
                        curLatLng.lat,
                        curLatLng.lng,
                        restaurantLatLng.lat,
                        restaurantLatLng.lng
                    );
                    distance = res.distance;
                    duration = res.duration;
                }
                dish["duration"] = duration ? duration.text : "N/A";
                dish["distance"] = distance ? distance.text : "N/A";
                setRandomDish(dish);
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
            <div className="px-3 pt-3 title d-flex align-items-center">
                <h5 className="m-0">Để mình gợi ý cho bạn {meal.name} nhé</h5>
                <a className="font-weight-bold ml-auto" href="trending.html">
                    {/* View all <i className="feather-chevrons-right" /> */}
                </a>
            </div>
            <div
                className="text-primary font-weight-bold px-3 pt-2 d-inline-block"
                onClick={() => history.goBack()}
            >
                <i className="feather-chevron-left" /> Back
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
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <div className="star position-absolute">
                                    <span className="badge badge-success">
                                        <i className="feather-star" /> 3.1
                                        (300+)
                                    </span>
                                </div>
                                <div className="favourite-heart text-danger position-absolute">
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
                                                    .includes(randomDish.id)
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
                                                    .includes(randomDish.id)
                                                    ? {
                                                          backgroundColor:
                                                              "#d92662",
                                                          color: "white",
                                                      }
                                                    : null
                                            }
                                        />
                                    </a>
                                </div>
                                <div className="member-plan position-absolute">
                                    <span className="badge badge-dark">
                                        {utils.formatMoney(randomDish.price)}
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
                                            {randomDish.restaurant.address}
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
                                                pickDishHandler(randomDish.id)
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
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <div className="favourite-heart text-danger position-absolute"></div>
                                <div className="member-plan position-absolute">
                                    <span className="badge badge-dark">
                                        {/* {utils.formatMoney(randomDish.price)} */}
                                    </span>
                                </div>
                                <a>
                                    <img
                                        // src={randomDish.img}
                                        src="img/trending1.png"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHnqr6vzNdx729B7ueeUSSJzntp4s5ocxKw&usqp=CAU"
                                        className="img-fluid item-img w-100"
                                    />
                                </a>
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
        </div>
    );
}

export default Random;
