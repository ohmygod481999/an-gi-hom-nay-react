import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import { utils } from "../../../utils";
import {
    DELETE_MEALFOODS_BY_FOODID,
    INSERT_FOOD,
    INSERT_MEALFOOD,
    INSERT_MEALFOODS,
    UPDATE_FOOD,
    UPDATE_MEALFOOD,
} from "../../../utils/apollo/entities/food/operations/food.mutaions";
import { GET_DETAIL_FOOD } from "../../../utils/apollo/entities/food/operations/food.queries";
import { GET_MEALS } from "../../../utils/apollo/entities/meal/operations/meal.quereis";
import {
    INSERT_RESTAURANT,
    UPDATE_RESTAURANT,
} from "../../../utils/apollo/entities/restaurant/restaurant.mutations";
import { GET_DETAIL_RESTAURANT } from "../../../utils/apollo/entities/restaurant/restaurant.queries";
import { uploadCloudStorage } from "../../../utils/firebase";
import AdminHeader2 from "../../components/AdminHeader2";

function RestaurantForm() {
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

    const { data } = useQuery(GET_MEALS);
    const [submitting, setSubmitting] = useState(false);

    const [getDetailRestaurant, detailRestaurantState] = useLazyQuery(
        GET_DETAIL_RESTAURANT
    );
    const meals = (data && data.meal) || [];

    const [insertRestaurant] = useMutation(INSERT_RESTAURANT);
    const [updateRestaurant] = useMutation(UPDATE_RESTAURANT);

    const [previewImg, setPreviewImg] = useState(null);

    const submitHandler = async (values) => {
        const { name, address, openHour, closeHour, image } = values;

        setSubmitting(true);
        // update
        if (id) {
            let imgUrl = previewImg;
            if (image.length > 0) {
                const file = image[0];
                imgUrl = await uploadCloudStorage(file);
            }
            await updateRestaurant({
                variables: {
                    id,
                    name,
                    address,
                    open: utils.formatToISOTime(openHour),
                    close: utils.formatToISOTime(closeHour),
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
            await insertRestaurant({
                variables: {
                    name,
                    address,
                    open: utils.formatToISOTime(openHour),
                    close: utils.formatToISOTime(closeHour),
                    img: imgUrl,
                },
            })
                .then((res) => toast["success"]("Thành công"))
                .then((res) => {
                    setValue("name", "");
                    setValue("description", "");
                })
                .then((res) => history.push("/admin/restaurant/list"))
                .catch((e) => {
                    console.log(e);
                    toast["error"]("Thất bại");
                });
        }
        setSubmitting(false);
    };

    useEffect(() => {
        if (id) {
            getDetailRestaurant({
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
        if (id && detailRestaurantState.data) {
            const { name, address, latlng, open, close, img } =
                detailRestaurantState.data.restaurant_by_pk;

            setPreviewImg(img);
            setValue("name", name);
            setValue("address", address);
            if (open) setValue("openHour", utils.timetzToTimeString(open));
            if (close) setValue("closeHour", utils.timetzToTimeString(close));
        }
    }, [detailRestaurantState]);

    return (
        <div className="">
            <AdminHeader2
                title={
                    id
                        ? _.get(
                              detailRestaurantState,
                              "data.restaurant_by_pk.name"
                          ) || "Loading..."
                        : "Tạo nhà hàng"
                }
            />
            <div className="bg-light mb-4 p-3 osahan-cart-item">
                <div className="osahan-cart-item-profile bg-white rounded shadow p-3 mt-n5">
                    <div className="flex-column">
                        <div>
                            <div className="form-group">
                                <label
                                    htmlFor="name"
                                    className="small font-weight-bold"
                                >
                                    Tên nhà hàng
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="VD: Nhà hàng bún riêu cô Hương Béo"
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
                            {/* <div className="form-group">
                                <label
                                    htmlFor="meals"
                                    className="small font-weight-bold"
                                >
                                    Món ăn vào bữa nào?
                                </label>
                                <Controller
                                    control={control}
                                    name="meals"
                                    render={({
                                        field: {
                                            onChange,
                                            onBlur,
                                            value,
                                            name,
                                            ref,
                                        },
                                    }) => (
                                        <Select
                                            isMulti={true}
                                            options={meals.map((meal) => ({
                                                value: meal.id,
                                                label: meal.name,
                                            }))}
                                            onChange={onChange}
                                            value={value}
                                        />
                                    )}
                                />

                                {errors.meals && (
                                    <div className="invalid-feedback d-block">
                                        Không được để trống
                                    </div>
                                )}
                            </div> */}
                            <div className="form-group">
                                <label
                                    htmlFor="address"
                                    className="small font-weight-bold"
                                >
                                    Địa chỉ quán
                                </label>
                                <textarea
                                    className="form-control"
                                    id="address"
                                    placeholder="VD: 17 ngõ 622 Minh Khai"
                                    {...register("address")}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="openHour"
                                    className="small font-weight-bold"
                                >
                                    Giờ mở quán
                                </label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="openHour"
                                    {...register("openHour")}
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="closeHour"
                                    className="small font-weight-bold"
                                >
                                    Giờ đóng cửa
                                </label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="closeHour"
                                    {...register("closeHour")}
                                />
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

export default RestaurantForm;
