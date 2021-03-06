import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import Select from "react-select/creatable";
import { toast } from "react-toastify";
import {
    INSERT_DISH,
    UPDATE_DISH,
} from "../../../utils/apollo/entities/dish/operations/dish.mutations";
import {
    GET_DETAIL_DISH,
    GET_DISH_PAGE,
} from "../../../utils/apollo/entities/dish/operations/dish.queries";
import {
    INSERT_FOOD,
    INSERT_MEALFOOD,
    UPDATE_FOOD,
    UPDATE_MEALFOOD,
} from "../../../utils/apollo/entities/food/operations/food.mutaions";
import {
    GET_DETAIL_FOOD,
    GET_FOODS,
} from "../../../utils/apollo/entities/food/operations/food.queries";
import { GET_MEALS } from "../../../utils/apollo/entities/meal/operations/meal.quereis";
import { INSERT_RESTAURANT } from "../../../utils/apollo/entities/restaurant/restaurant.mutations";
import { GET_RESTAURANTS } from "../../../utils/apollo/entities/restaurant/restaurant.queries";
import { uploadCloudStorage } from "../../../utils/firebase";
import AdminHeader2 from "../../components/AdminHeader2";

function DishForm() {
    const { id } = useParams();
    const history = useHistory();
    const {
        control,
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm();
    const formImg = watch("image");

    const foodData = useQuery(GET_FOODS);
    const restaurantsData = useQuery(GET_RESTAURANTS);
    const [submitting, setSubmitting] = useState(false);

    const [getDetailDish, detailDishState] = useLazyQuery(GET_DETAIL_DISH);
    const foods = (foodData.data && foodData.data.food) || [];
    const restaurants =
        (restaurantsData.data && restaurantsData.data.restaurant) || [];

    const [insertDish] = useMutation(INSERT_DISH, {
        refetchQueries: [GET_DISH_PAGE],
    });
    const [updateDish] = useMutation(UPDATE_DISH);
    const [insertFood] = useMutation(INSERT_FOOD, {
        refetchQueries: [GET_FOODS],
    });
    const [insertRestaurant] = useMutation(INSERT_RESTAURANT, {
        refetchQueries: [GET_RESTAURANTS],
    });

    const [previewImg, setPreviewImg] = useState(null);
    const [loadingCreateFood, setLoadingCreateFood] = useState(false);
    const [loadingCreateRestaurant, setLoadingCreateRestaurant] =
        useState(false);

    const submitHandler = async (values) => {
        const { name, price, food, restaurant, description, image } = values;

        setSubmitting(true);
        // update
        if (id) {
            let imgUrl = previewImg;
            if (image.length > 0) {
                const file = image[0];
                imgUrl = await uploadCloudStorage(file);
            }
            await updateDish({
                variables: {
                    id,
                    name,
                    price,
                    food_id: parseInt(food.value),
                    restaurant_id: parseInt(restaurant.value),
                    description,
                    img: imgUrl,
                },
            })
                .then((res) => toast["success"]("Thành công"))
                .catch((e) => {
                    console.log(e);
                    toast["error"]("Thất bại");
                });
            // create
        } else {
            let imgUrl = null;
            if (image.length > 0) {
                const file = image[0];
                imgUrl = await uploadCloudStorage(file);
            }
            await insertDish({
                variables: {
                    name,
                    price,
                    food_id: parseInt(food.value),
                    restaurant_id: parseInt(restaurant.value),
                    description,
                    img: imgUrl,
                },
            })
                .then((res) => toast["success"]("Thành công"))
                .then((res) => {
                    setValue("name", "");
                    setValue("description", "");
                })
                .then((res) => history.push("/admin/dish/list"))
                .catch((e) => {
                    console.log(e);
                    toast["error"]("Thất bại");
                });
        }
        setSubmitting(false);
    };

    useEffect(() => {
        if (id) {
            getDetailDish({
                variables: {
                    id: parseInt(id),
                },
            });
        }
    }, []);

    useEffect(() => {
        if (formImg && formImg.length > 0) {
            setPreviewImg(URL.createObjectURL(formImg[0]));
        }
    }, [formImg]);

    useEffect(() => {
        if (id && detailDishState.data && detailDishState.data.dish_by_pk) {
            const { name, description, price, food, restaurant, img } =
                detailDishState.data.dish_by_pk;

            setPreviewImg(img);
            setValue("name", name);
            setValue("description", description);
            setValue("price", price);
            setValue("food", {
                value: food.id,
                label: food.name,
            });
            setValue("restaurant", {
                value: restaurant.id,
                label: restaurant.name,
            });
        }
    }, [detailDishState]);

    return (
        <div className="">
            <AdminHeader2
                title={
                    id
                        ? _.get(detailDishState, "data.dish_by_pk.name") ||
                          "Loading..."
                        : "Tạo món"
                }
            />
            <div className="bg-light mb-4 p-3 osahan-cart-item">
                <div className="osahan-cart-item-profile bg-white rounded shadow p-3 mt-n5">
                    <div className="flex-column">
                        <h6 className="font-weight-bold">
                            {id
                                ? "Chỉnh sửa thông tin món ăn"
                                : "Nhập thông tin về món ăn của bạn"}
                        </h6>
                        <p className="text-muted">
                            Proident laborum ea minim mollit eiusmod ea dolore
                            sint sint culpa ut eiusmod exercitation ex.
                        </p>
                        <div>
                            <div className="form-group">
                                <label
                                    htmlFor="name"
                                    className="small font-weight-bold"
                                >
                                    Tên món
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Bún riêu cua"
                                    id="name"
                                    {...register("name", {
                                        required: true,
                                    })}
                                />
                                {errors.name && (
                                    <div className="invalid-feedback d-block">
                                        Không được để trống
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="name"
                                    className="small font-weight-bold"
                                >
                                    Giá
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="30.000đ"
                                    id="price"
                                    {...register("price", {
                                        required: true,
                                    })}
                                />
                                {errors.price && (
                                    <div className="invalid-feedback d-block">
                                        Không được để trống
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="meal"
                                    className="small font-weight-bold"
                                >
                                    Loại món
                                </label>
                                <Controller
                                    control={control}
                                    name="food"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({
                                        field: { onChange, value },
                                    }) => {
                                        return (
                                            <Select
                                                options={foods.map((food) => ({
                                                    value: food.id,
                                                    label: food.name,
                                                }))}
                                                isLoading={loadingCreateFood}
                                                onCreateOption={(foodName) => {
                                                    setLoadingCreateFood(true);
                                                    return insertFood({
                                                        variables: {
                                                            name: foodName,
                                                            description: null,
                                                            img: null,
                                                        },
                                                    })
                                                        .then((res) => {
                                                            const idFood =
                                                                res.data
                                                                    .insert_food
                                                                    .returning[0]
                                                                    .id;
                                                            onChange({
                                                                value: idFood,
                                                                label: foodName,
                                                            });
                                                        })
                                                        .finally(() =>
                                                            setLoadingCreateFood(
                                                                false
                                                            )
                                                        );
                                                }}
                                                onChange={onChange}
                                                value={value}
                                            />
                                        );
                                    }}
                                />
                                {errors.food && (
                                    <div className="invalid-feedback d-block">
                                        Không được để trống
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="restaurant"
                                    className="small font-weight-bold"
                                >
                                    Nhà hàng
                                </label>
                                <Controller
                                    control={control}
                                    name="restaurant"
                                    rules={{
                                        required: true,
                                    }}
                                    render={({
                                        field: { onChange, value },
                                    }) => {
                                        return (
                                            <Select
                                                options={restaurants.map(
                                                    (restaurant) => ({
                                                        value: restaurant.id,
                                                        label: restaurant.name,
                                                    })
                                                )}
                                                isLoading={
                                                    loadingCreateRestaurant
                                                }
                                                onCreateOption={(
                                                    restaurantName
                                                ) => {
                                                    setLoadingCreateRestaurant(
                                                        true
                                                    );
                                                    return insertRestaurant({
                                                        variables: {
                                                            name: restaurantName,
                                                            address: null,
                                                            open: null,
                                                            close: null,
                                                            img: null,
                                                        },
                                                    })
                                                        .then((res) => {
                                                            const idRestaurant =
                                                                res.data
                                                                    .insert_restaurant
                                                                    .returning[0]
                                                                    .id;
                                                            onChange({
                                                                value: idRestaurant,
                                                                label: restaurantName,
                                                            });
                                                        })
                                                        .finally(() =>
                                                            setLoadingCreateRestaurant(
                                                                false
                                                            )
                                                        );
                                                }}
                                                onChange={onChange}
                                                value={value}
                                            />
                                        );
                                    }}
                                />
                                {errors.restaurant && (
                                    <div className="invalid-feedback d-block">
                                        Không được để trống
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="exampleFormControlInput2"
                                    className="small font-weight-bold"
                                >
                                    Giới thiệu về món ăn
                                </label>
                                <textarea
                                    type="email"
                                    className="form-control"
                                    id="description"
                                    placeholder="Giới thiệu qua về món ăn: ví dụ Bún riêu cua là đặc sản bắc bộ, có hương vị tuyệt vời"
                                    {...register("description")}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="image"
                                    className="small font-weight-bold"
                                >
                                    Ảnh
                                </label>
                                <input
                                    type="file"
                                    accept="image/png, image/gif, image/jpeg"
                                    className="form-control"
                                    id="image"
                                    {...register("image")}
                                />
                                {previewImg && (
                                    <img
                                        className="w-100 mt-1"
                                        src={previewImg}
                                        alt="preview img"
                                    />
                                )}
                            </div>
                            <button
                                className={`btn btn-primary btn-block`}
                                onClick={handleSubmit(submitHandler)}
                                disabled={submitting}
                            >
                                {submitting && (
                                    <span
                                        className="spinner-border spinner-border-sm"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>
                                )}{" "}
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DishForm;
