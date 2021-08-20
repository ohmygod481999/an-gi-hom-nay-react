import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header1 from "../../layout/Header1";
import MainLayout from "../../layout/MainLayout";
import { utils } from "../../utils";
import { GET_AUTH } from "../../utils/apollo/entities/auth/operations/auth.queries";
import { DELETE_USER_DISH } from "../../utils/apollo/entities/userdish/userdish.mutations";
import { GET_USER_DISHES } from "../../utils/apollo/entities/userdish/userdish.queries";
import MySwal from "../../utils/components/MySwal";

function Favorites() {
    const authState = useQuery(GET_AUTH);
    const [loading, setLoading] = useState(false);
    const userId = authState.data.auth.id;
    const { data } = useQuery(GET_USER_DISHES, {
        variables: {
            user_id: userId,
        },
    });
    const [deleteUserDish] = useMutation(DELETE_USER_DISH, {
        refetchQueries: [GET_USER_DISHES],
    });
    const userdishes = (data && data.userdish) || [];

    return (
        <MainLayout>
            <Header1 title={"Món của tôi"} />
            <div className="most_popular p-3">
                {userdishes.length === 0 && (
                    <p className="text-center">
                        Bạn chưa có món nào, khám phá{" "}
                        <Link to="/most-popular">tại đây</Link>
                    </p>
                )}
                <div className="row">
                    {userdishes.map((userdish) => (
                        <div className="col-6 pl-2 pr-2 pb-3">
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
                                <div className="list-card-image">
                                    <div className="star position-absolute">
                                        {/* <span className="badge badge-success">
                                            <i className="feather-star" /> 3.1
                                            (300+)
                                        </span> */}
                                    </div>
                                    <div className="favourite-heart text-danger position-absolute">
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                MySwal.fire({
                                                    title: "Bạn có chắc chắn muốn xóa",
                                                    icon: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonText: "Đồng ý",
                                                }).then(({ isConfirmed }) => {
                                                    if (isConfirmed) {
                                                        setLoading(true);
                                                        deleteUserDish({
                                                            variables: {
                                                                dish_id:
                                                                    userdish.dish_id,
                                                                user_id: userId,
                                                            },
                                                        })
                                                            .then((res) => {
                                                                toast[
                                                                    "success"
                                                                ]("Thành công");
                                                            })
                                                            .catch((e) => {
                                                                console.log(e);
                                                                toast["error"](
                                                                    "Thất bại"
                                                                );
                                                            })
                                                            .finally(() => {
                                                                setLoading(
                                                                    false
                                                                );
                                                            });
                                                    }
                                                });
                                            }}
                                        >
                                            <i className="feather-trash" />
                                        </a>
                                    </div>
                                    <div className="member-plan position-absolute">
                                        <span className="badge badge-dark">
                                            {utils.formatMoney(
                                                userdish.dish.price
                                            )}
                                        </span>
                                    </div>
                                    <a>
                                        <img
                                            src={userdish.dish.img}
                                            className="img-fluid item-img w-100"
                                        />
                                    </a>
                                </div>
                                <div className="p-3 position-relative">
                                    <div className="list-card-body">
                                        <h6 className="mb-1">
                                            <a className="text-black">
                                                {userdish.dish.name}
                                            </a>
                                        </h6>
                                        <p className="text-gray mb-3">
                                            {userdish.dish.restaurant.name}
                                        </p>
                                        <p className="text-gray mb-3 time">
                                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                                <i className="feather-map-pin" />{" "}
                                                {
                                                    userdish.dish.restaurant
                                                        .address
                                                }
                                            </span>{" "}
                                            <span className="float-right text-black-50">
                                                {" "}
                                                $500 FOR TWO
                                            </span>
                                        </p>
                                    </div>
                                    <div className="list-card-badge">
                                        {/* <span className="badge badge-danger">
                                            OFFER
                                        </span>{" "} */}
                                        <small>
                                            {userdish.dish.description}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}

export default Favorites;
