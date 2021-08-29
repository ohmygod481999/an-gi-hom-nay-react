import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import Header1 from "../../../layout/Header1";
import MainLayout from "../../../layout/MainLayout";
import { utils } from "../../../utils";
import { GET_AUTH } from "../../../utils/apollo/entities/auth/operations/auth.queries";
import { GET_USER_HISTORIES } from "../../../utils/apollo/entities/userhistory/userhistory.queries";
import moment from "moment";
import { GET_USER_DISHES } from "../../../utils/apollo/entities/userdish/userdish.queries";
import { toast } from "react-toastify";
import { INSERT_USER_DISH } from "../../../utils/apollo/entities/userdish/userdish.mutations";

function UserHistory() {
    const authState = useQuery(GET_AUTH);
    const userId = authState.data.auth.id;

    const { data } = useQuery(GET_USER_HISTORIES, {
        variables: {
            user_id: userId,
        },
    });
    const userHistories = (data && data.userhistory) || [];

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
    const handleLikeDish = async (dishId) => {
        insertUserDish({
            variables: {
                dish_id: dishId,
                user_id: userId,
            },
        })
            .then((res) => toast["success"]("Đã thêm vào mục yêu thích"))
            .catch((e) => toast["error"]("Thất bại " + e));
    };

    return (
        <MainLayout>
            <Header1 title={"Lịch sử món ăn"} />
            <div className="most_sale px-3 pb-3 mt-3">
                <div className="row">
                    {userHistories.map((userHistory) => (
                        <div key={userHistory.id} className="col-12 mb-3">
                            <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                <div className="list-card-image">
                                    {/* <div className="star position-absolute">
                                        <span className="badge badge-success">
                                            <i className="feather-star" /> 3.1
                                            (300+)
                                        </span>
                                    </div> */}
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
                                                        .includes(
                                                            userHistory.dish.id
                                                        )
                                                ) {
                                                    return toast["info"](
                                                        "Món này đã có trong mục yêu thích của bạn"
                                                    );
                                                }
                                                handleLikeDish(
                                                    userHistory.dish.id
                                                );
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
                                                            userHistory.dish.id
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
                                                userHistory.dish.price
                                            )}
                                        </span>
                                    </div>
                                    <a>
                                        <img
                                            src={userHistory.dish.img}
                                            className="img-fluid item-img w-100"
                                        />
                                    </a>
                                </div>
                                <div className="p-3 position-relative">
                                    <div className="list-card-body">
                                        <h6 className="mb-1">
                                            <a className="text-black">
                                                {userHistory.dish.name}
                                            </a>
                                        </h6>
                                        <p className="text-gray mb-3">
                                            {userHistory.dish.restaurant.name}
                                        </p>
                                        {/* <p className="text-gray mb-3 time">
                                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                                <i className="feather-clock" />{" "}
                                                15–25 min
                                            </span>{" "}
                                        </p> */}
                                    </div>
                                    <div className="list-card-badge">
                                        <small>
                                            Chọn lúc:{" "}
                                            {moment(
                                                userHistory.created_at
                                            ).format("HH:mm DD-MM-YYYY")}
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

export default UserHistory;
