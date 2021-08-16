import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
    INSERT_FOOD,
    INSERT_MEALFOOD,
    UPDATE_FOOD,
    UPDATE_MEALFOOD,
} from "../../../utils/apollo/entities/food/operations/food.mutaions";
import { GET_DETAIL_FOOD } from "../../../utils/apollo/entities/food/operations/food.queries";
import { GET_MEALS } from "../../../utils/apollo/entities/meal/operations/meal.quereis";
import { uploadCloudStorage } from "../../../utils/firebase";
import AdminHeader2 from "../../components/AdminHeader2";

function FoodForm() {
    const { id } = useParams();
    const history = useHistory();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm();
    const formImg = watch("image");

    const { data } = useQuery(GET_MEALS);
    const [submitting, setSubmitting] = useState(false);
    const [mealFood, setMealFood] = useState(null)

    const [getDetailFood, detailFoodState] = useLazyQuery(GET_DETAIL_FOOD);
    const meals = (data && data.meal) || [];
    const [insertFood] = useMutation(INSERT_FOOD);
    const [insertMealFood] = useMutation(INSERT_MEALFOOD);
    const [updateMealFood] = useMutation(UPDATE_MEALFOOD);
    const [updateFood] = useMutation(UPDATE_FOOD);

    const [previewImg, setPreviewImg] = useState(null);

    const submitHandler = async (values) => {
        const { name, meal, description, image } = values;
        setSubmitting(true);
        // update
        if (id) {
            let imgUrl = previewImg;
            if (image.length > 0) {
                const file = image[0];
                imgUrl = await uploadCloudStorage(file);
            }
            await updateFood({
                variables: {
                    id,
                    name,
                    description,
                    img: imgUrl,
                },
            })
                .then((res) => {
                    return updateMealFood({
                        variables: {
                            id: mealFood.id,
                            food_id: id,
                            meal_id: parseInt(meal),
                        },
                    });
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
            await insertFood({
                variables: {
                    name,
                    description,
                    img: imgUrl,
                },
            })
                .then((res) => {
                    const idFood = res.data.insert_food.returning[0].id;
                    return insertMealFood({
                        variables: {
                            food_id: idFood,
                            meal_id: parseInt(meal),
                        },
                    });
                })
                .then((res) => toast["success"]("Thành công"))
                .then((res) => {
                    setValue("name", "");
                    setValue("description", "");
                })
                .then((res) => history.push("/admin/food/list"))
                .catch((e) => {
                    console.log(e);
                    toast["error"]("Thất bại");
                });
        }
        setSubmitting(false);
    };

    useEffect(() => {
        if (id) {
            getDetailFood({
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
        if (id && detailFoodState.data) {
            const { name, description, img } = detailFoodState.data.food_by_pk;
            const meals = detailFoodState.data.mealfood;

            setPreviewImg(img);
            setValue("name", name);
            setValue("description", description);
            if (meals.length > 0) {
                setValue("meal", meals[0].meal.id);
                setMealFood(meals[0])
            }
        }
    }, [detailFoodState]);

    return (
        <div className="">
            <AdminHeader2
                title={
                    id
                        ? _.get(detailFoodState, "data.food_by_pk.name") ||
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
                                    htmlFor="meal"
                                    className="small font-weight-bold"
                                >
                                    Món ăn vào bữa nào?
                                </label>
                                <select
                                    className="form-control"
                                    id="meal"
                                    {...register("meal", {
                                        required: true,
                                    })}
                                >
                                    {meals.map((meal) => (
                                        <option key={meal.id} value={meal.id}>
                                            {meal.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.name && (
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

export default FoodForm;
