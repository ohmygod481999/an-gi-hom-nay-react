import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
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
import { uploadCloudStorage } from "../../../utils/firebase";
import AdminHeader2 from "../../components/AdminHeader2";

function FoodForm() {
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

    const [getDetailFood, detailFoodState] = useLazyQuery(GET_DETAIL_FOOD);
    const meals = (data && data.meal) || [];
    const [insertFood] = useMutation(INSERT_FOOD);
    const [insertMealFoods] = useMutation(INSERT_MEALFOODS);
    const [deleteMealFoodsByFoodId] = useMutation(DELETE_MEALFOODS_BY_FOODID);
    const [updateFood] = useMutation(UPDATE_FOOD);

    const [previewImg, setPreviewImg] = useState(null);

    const submitHandler = async (values) => {
        const { name, meals, description, image } = values;

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
                    return deleteMealFoodsByFoodId({
                        variables: {
                            food_id: id,
                        },
                    });
                })
                .then((res) => {
                    return insertMealFoods({
                        variables: {
                            objects: meals.map((meal) => ({
                                food_id: id,
                                meal_id: parseInt(meal.value),
                            })),
                        },
                    });
                })
                .then((res) => toast["success"]("Th??nh c??ng"))
                .catch((e) => {
                    console.log(e);
                    toast["error"]("Th???t b???i");
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
                    return insertMealFoods({
                        variables: {
                            objects: meals.map((meal) => ({
                                food_id: idFood,
                                meal_id: parseInt(meal.value),
                            })),
                        },
                    });
                })
                .then((res) => toast["success"]("Th??nh c??ng"))
                .then((res) => {
                    setValue("name", "");
                    setValue("description", "");
                })
                .then((res) => history.push("/admin/food/list"))
                .catch((e) => {
                    console.log(e);
                    toast["error"]("Th???t b???i");
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
                console.log(meals)
                setValue("meals", meals.map(meal => ({
                    value: meal.meal.id,
                    label: meal.meal.name,
                })));
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
                        : "T???o lo???i m??n"
                }
            />
            <div className="bg-light mb-4 p-3 osahan-cart-item">
                <div className="osahan-cart-item-profile bg-white rounded shadow p-3 mt-n5">
                    <div className="flex-column">
                        <h6 className="font-weight-bold">
                            {id
                                ? "Ch???nh s???a th??ng tin m??n ??n"
                                : "Nh???p th??ng tin v??? m??n ??n c???a b???n"}
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
                                    T??n lo???i m??n
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="B??n ri??u cua"
                                    id="name"
                                    {...register("name", {
                                        required: true,
                                    })}
                                />
                                {errors.name && (
                                    <div className="invalid-feedback d-block">
                                        Kh??ng ???????c ????? tr???ng
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="meals"
                                    className="small font-weight-bold"
                                >
                                    M??n ??n v??o b???a n??o?
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

                                {/* <select
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
                                </select> */}
                                {errors.meals && (
                                    <div className="invalid-feedback d-block">
                                        Kh??ng ???????c ????? tr???ng
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="exampleFormControlInput2"
                                    className="small font-weight-bold"
                                >
                                    Gi???i thi???u v??? m??n ??n
                                </label>
                                <textarea
                                    type="email"
                                    className="form-control"
                                    id="description"
                                    placeholder="Gi???i thi???u qua v??? m??n ??n: v?? d??? B??n ri??u cua l?? ?????c s???n b???c b???, c?? h????ng v??? tuy???t v???i"
                                    {...register("description")}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="image"
                                    className="small font-weight-bold"
                                >
                                    ???nh
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
