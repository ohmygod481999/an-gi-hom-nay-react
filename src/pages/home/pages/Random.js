import { useQuery } from "@apollo/client";
import React, { useMemo, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { GET_MEAL } from "../../../utils/apollo/entities/meal/operations/meal.quereis";

function Random() {
    const { id } = useParams();
    const history = useHistory();
    const [randomDish, setRandomDish] = useState(null);
    const [loading, setLoading] = useState(false);

    const { data } = useQuery(GET_MEAL, {
        variables: {
            id,
        },
    });

    const meal = (data && data.meal_by_pk) || {};
    const dishes = useMemo(() => {
        const dishes = [];
        if (data) {
            meal.mealfoods.forEach((mealfood) => {
                const food = mealfood.food;
                food.dishes.forEach((dish) => {
                    dishes.push(dish);
                });
            });
        }
        return dishes;
    }, [data]);

    const getRandomDish = () => {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        if (dishes.length > 0) {
            setLoading(true);
            setTimeout(() => {
                const randomIndex = getRandomInt(0, dishes.length - 1);
                setRandomDish(dishes[randomIndex]);
                console.log(dishes[randomIndex])
                setLoading(false)
            }, 1500);
        }
    };

    return (
        <div>
            <div className="px-3 pt-3 title d-flex align-items-center">
                <h5 className="m-0">Để mình gợi ý cho bạn {meal.name} nhé</h5>
                <a className="font-weight-bold ml-auto" href="trending.html">
                    {/* View all <i className="feather-chevrons-right" /> */}
                </a>
            </div>
            <div
                className="text-primary font-weight-bold px-3 pt-2"
                onClick={() => history.goBack()}
            >
                <i className="feather-chevron-left" /> Back
            </div>
            <div className="">
                {randomDish && (
                    <div
                        className="px-4 pt-3 pb-3"
                        style={{
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                display: loading ? "block" : "none",
                                zIndex: 1,
                                left: "45%",
                                top: "30%",
                            }}
                        >
                            <div
                                class="spinner-grow text-primary"
                                role="status"
                            >
                                <span class="sr-only">Loading...</span>
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
                                    <a href="#">
                                        <i className="feather-heart" />
                                    </a>
                                </div>
                                <div className="member-plan position-absolute">
                                    <span className="badge badge-dark">
                                        Promoted
                                    </span>
                                </div>
                                <a href="restaurant.html">
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
                                            href="restaurant.html"
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
                                            15–30 min
                                        </span>{" "}
                                        <span className="float-right text-black-100">
                                            {" "}
                                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(randomDish.price)}
                                        </span>
                                    </p>
                                </div>
                                <div className="list-card-badge">
                                    <span className="badge badge-danger">
                                        OFFER
                                    </span>{" "}
                                    <small> Use Coupon OSAHAN50</small>
                                </div>
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
                    disabled={loading}
                >
                    {loading && (
                        <span
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                        ></span>
                    )}{" "}
                    Chọn ngãu nhiên
                </button>
            </div>
        </div>
    );
}

export default Random;
