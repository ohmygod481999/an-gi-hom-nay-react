import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { INSERT_FOOD } from "../../../services/food";
import { GET_MEALS } from "../../../services/meal";
import useHandleMutationResponse from "../../../utils/hooks/useHandleMutationResponse";
import AdminHeader2 from "../../components/AdminHeader2";

function FoodForm() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors },
    } = useForm();

    const { data, loading } = useQuery(GET_MEALS);
    const meals = (data && data.meal) || [];

    const [insertFood, insertValues] = useMutation(INSERT_FOOD);
    useHandleMutationResponse(insertValues, () => {
        alert("...");
        setValue("name", "");
        setValue("description", "");
    });

    const submitHandler = (values) => {
        const { name, meal, description } = values;
        insertFood({
            variables: {
                name,
                description,
            },
        });
    };

    return (
        <div className="">
            <AdminHeader2 title="Tạo món" />
            <div className="bg-light mb-4 p-3 osahan-cart-item">
                <div className="osahan-cart-item-profile bg-white rounded shadow p-3 mt-n5">
                    <div className="flex-column">
                        <h6 className="font-weight-bold">
                            Nhập thông tin về món ăn của bạn
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
                                        <option key={meal.id}>
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
                            </div>
                            <button
                                className={`btn btn-primary btn-block`}
                                onClick={handleSubmit(submitHandler)}
                                disabled={insertValues.loading}
                            >
                                {insertValues.loading && (
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
