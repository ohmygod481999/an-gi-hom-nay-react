import { useMutation, useQuery } from "@apollo/client";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { utils } from "../../../utils";
import { GET_DETAIL_DISH } from "../../../utils/apollo/entities/dish/operations/dish.queries";
import { useTitle } from "../../../utils/hooks/useTitle";
import { Loader } from "@googlemaps/js-api-loader";
import { GET_LOCATION } from "../../../utils/apollo/entities/location/operations/location.queries";
import { useLocation } from "../../../utils/hooks/useLocation";
import { GET_ADDITION_PRODUCT } from "../../../utils/apollo/entities/additionproduct/additionproduct.queries";
import { INSERT_USER_DISH } from "../../../utils/apollo/entities/userdish/userdish.mutations";
import { GET_USER_DISHES } from "../../../utils/apollo/entities/userdish/userdish.queries";
import { toast } from "react-toastify";
import { GET_AUTH } from "../../../utils/apollo/entities/auth/operations/auth.queries";

function DishDetail() {
    const { dishId } = useParams();
    const history = useHistory();

    const authState = useQuery(GET_AUTH);
    const userId = authState.data.auth.id;

    const { data } = useQuery(GET_DETAIL_DISH, {
        variables: {
            id: dishId,
        },
    });
    const queryAdditionProduct = useQuery(GET_ADDITION_PRODUCT);
    const additionProducts =
        (queryAdditionProduct.data &&
            queryAdditionProduct.data.additionproduct) ||
        [];

    const locationData = useQuery(GET_LOCATION);

    const dish = (data && data.dish_by_pk) || {};
    useTitle(dish.name || "loading..");

    const [insertUserDish] = useMutation(INSERT_USER_DISH, {
        refetchQueries: [GET_USER_DISHES],
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

    const handleLikeDish = async () => {
        insertUserDish({
            variables: {
                dish_id: dishId,
                user_id: userId,
            },
        })
            .then((res) => toast["success"]("???? th??m v??o m???c y??u th??ch"))
            .catch((e) => toast["error"]("Th???t b???i " + e));
    };

    useEffect(() => {
        if (data && queryAdditionProduct.data) {
            window
                .$(".trending-slider")
                .not(".slick-initialized")
                .slick({
                    centerMode: true,
                    centerPadding: "30px",
                    slidesToShow: 1,
                    arrows: false,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: "40px",
                                slidesToShow: 1,
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: "40px",
                                slidesToShow: 1,
                            },
                        },
                    ],
                });
        }
    }, [data, queryAdditionProduct]);

    useEffect(() => {
        if (
            _.get(locationData, "data.location.scriptLoaded") &&
            _.get(data, "dish_by_pk.restaurant.latlng")
        ) {
            const { lat, lng } = utils.getLatLngFromString(
                _.get(data, "dish_by_pk.restaurant.latlng")
            );

            const map = new window.google.maps.Map(
                document.getElementById("map"),
                {
                    center: { lat: lat, lng: lng },
                    zoom: 15,
                }
            );
            const marker = new window.google.maps.Marker({
                position: { lat: lat, lng: lng },
                map: map,
                title: _.get(data, "dish_by_pk.restaurant.name"),
            });
        }
    }, [locationData, data]);

    return (
        <div>
            <div className="osahan-restaurant-detail">
                <div className="recepie-header">
                    <div className="position-absolute px-3 py-4 d-flex align-items-center w-100">
                        <a className="toggle" href="#">
                            <span />
                        </a>
                        <div className="d-flex ml-auto">
                            <p className="m-0 ml-auto">
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
                                                .includes(parseInt(dishId))
                                        ) {
                                            return toast["info"](
                                                "M??n n??y ???? c?? trong m???c y??u th??ch c???a b???n"
                                            );
                                        }
                                        handleLikeDish();
                                    }}
                                >
                                    <i
                                        className="feather-star shadow rounded-circle p-2"
                                        style={
                                            userdishes
                                                .map(
                                                    (userdish) =>
                                                        userdish.dish_id
                                                )
                                                .includes(parseInt(dishId))
                                                ? {
                                                      backgroundColor:
                                                          "#3b8beb",
                                                      color: "white",
                                                  }
                                                : {
                                                      backgroundColor: "white",
                                                      color: "#3b8beb",
                                                  }
                                        }
                                    />
                                </a>
                            </p>
                        </div>
                    </div>
                    <img
                        src={dish.img}
                        className="img-fluid w-100"
                        alt="Responsive image"
                    />
                </div>
                <div className="pt-3 px-3">
                    <p className="font-weight-bold mb-1">
                        B???n ???? ch???n m??n, ch??c ngon mi???ng
                    </p>
                    <h2 className="font-weight-bold">
                        {dish.name || "loading..."}
                    </h2>
                    <p className="text-muted">
                        {dish.description || "loading..."}
                    </p>
                </div>
                <hr
                    style={{
                        marginBottom: 0,
                    }}
                />
                <div className="p-3">
                    <div className="pt-3">
                        <p className="font-weight-bold mb-1">V??? qu??n</p>
                        <h5 className="font-weight-bold">
                            {_.get(dish, "restaurant.name") || "loading.."}
                        </h5>
                        <p className="font-weight-light text-dark m-0">
                            {_.get(dish, "restaurant.address") || "loading.."}
                        </p>
                        {/* <div className="rating-wrap d-flex align-items-center mt-2">
                            <ul className="rating-stars list-unstyled">
                                <li>
                                    <i className="feather-star text-warning" />
                                    <i className="feather-star text-warning" />
                                    <i className="feather-star text-warning" />
                                    <i className="feather-star text-warning" />
                                    <i className="feather-star" />
                                </li>
                            </ul>
                            <p className="label-rating text-muted ml-2 small">
                                {" "}
                                (245 Reviews)
                            </p>
                        </div> */}
                    </div>
                    <div className="pt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="font-weight-bold m-0">Open</p>
                                <p className="text-muted m-0">
                                    {_.get(dish, "restaurant.open")
                                        ? utils.timetzToTimeString(
                                              _.get(dish, "restaurant.open")
                                          )
                                        : "N/A"}
                                </p>
                            </div>
                            <div className="col-6">
                                <p className="font-weight-bold m-0">
                                    Close time
                                </p>
                                <p className="text-muted m-0">
                                    {_.get(dish, "restaurant.open")
                                        ? utils.timetzToTimeString(
                                              _.get(dish, "restaurant.close")
                                          )
                                        : "N/A"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mapouter">
                    <div className="gmap_canvas">
                        <div
                            id="map"
                            style={{
                                width: "100%",
                                height: "200px",
                            }}
                        ></div>
                    </div>
                </div>
                <div className="bg-primary p-3">
                    <div className="d-flex align-items-center">
                        <div className="feather_icon">
                            <a
                                href="#ratings-and-reviews"
                                className="text-decoration-none text-dark"
                            >
                                <i className="p-2 bg-light rounded-circle font-weight-bold  feather-upload" />
                            </a>
                            <a
                                href="#ratings-and-reviews"
                                className="text-decoration-none text-dark mx-2"
                            >
                                <i className="p-2 bg-light rounded-circle font-weight-bold  feather-star" />
                            </a>
                            <a
                                href="#ratings-and-reviews"
                                className="text-decoration-none text-dark"
                            >
                                <i className="p-2 bg-light rounded-circle font-weight-bold feather-map-pin" />
                            </a>
                        </div>
                        <a
                            href="contact-us.html"
                            className="btn btn-sm btn-outline-light ml-auto"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>

            <div className="p-3 title d-flex align-items-center">
                <h5 className="m-0 pt-3">C??c m??n kh??c c???a qu??n</h5>
                {/* <a className="pt-3 font-weight-bold ml-auto" href="#">
                    26 places <i className="feather-chevrons-right" />
                </a> */}
            </div>
            {/* Most sales */}
            <div className="most_sale px-3">
                <div className="row">
                    {(_.get(dish, "restaurant.dishes") || []).map((dish) => (
                        <div key={dish.id} className="col-12">
                            <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                <div className="list-card-image">
                                    <div className="star position-absolute">
                                        <span className="badge badge-success">
                                            <i className="feather-star" /> 3.1
                                            (300+)
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
                                                        .includes(parseInt(dishId))
                                                ) {
                                                    return toast["info"](
                                                        "M??n n??y ???? c?? trong m???c y??u th??ch c???a b???n"
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
                                                        .includes(parseInt(dishId))
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
                                            {utils.formatMoney(dish.price)}
                                        </span>
                                    </div>
                                    <a href="restaurant.html">
                                        <img
                                            src={dish.img}
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
                                                {dish.name}
                                            </a>
                                        </h6>
                                        <p className="text-gray mb-3">
                                            {dish.description}
                                        </p>
                                        <p className="text-gray mb-3 time">
                                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                                <i className="feather-clock" />{" "}
                                                15???25 min
                                            </span>{" "}
                                            <span className="float-right text-black-50">
                                                {" "}
                                                $500 FOR TWO
                                            </span>
                                        </p>
                                    </div>
                                    {/* <div className="list-card-badge">
                                        <span className="badge badge-danger">
                                            OFFER
                                        </span>{" "}
                                        <small>65% OSAHAN50</small>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="bg-light mt-3"
                style={{
                    paddingBottom: 90,
                }}
            >
                <h5 className="font-weight-bold px-3 pt-3 m-0">
                    C?? th??? b???n quan t??m
                </h5>
                {/* slider */}
                <div className="trending-slider rounded overflow-hidden">
                    {additionProducts.map((additionProduct) => (
                        <div
                            key={additionProduct.id}
                            className="osahan-slider-item px-1 py-3"
                        >
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                <div className="list-card-image">
                                    <a
                                        htarget="_blank"
                                        href={additionProduct.third_party_url}
                                    >
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "150px",
                                                backgroundImage: `url(${additionProduct.img})`,
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                            }}
                                        ></div>
                                        {/* <img
                                            src={}
                                            className="img-fluid item-img w-100"
                                        /> */}
                                    </a>
                                </div>
                                <div className="p-3 position-relative">
                                    <div className="list-card-body">
                                        <h6 className="mb-1">
                                            <a
                                                target="_blank"
                                                href={
                                                    additionProduct.third_party_url
                                                }
                                                className="text-black"
                                            >
                                                {additionProduct.name}
                                            </a>
                                        </h6>
                                        <p className="text-gray mb-3">
                                            {additionProduct.sub_description}
                                        </p>
                                        <p className="text-gray m-0">
                                            {" "}
                                            <span className="text-black-50">
                                                {" "}
                                                {utils.formatMoney(
                                                    additionProduct.price
                                                )}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DishDetail;
