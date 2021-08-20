import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Loader } from "@googlemaps/js-api-loader";
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
import { GET_LOCATION } from "../../../utils/apollo/entities/location/operations/location.queries";
import { GET_MEALS } from "../../../utils/apollo/entities/meal/operations/meal.quereis";
import {
    INSERT_RESTAURANT,
    UPDATE_RESTAURANT,
} from "../../../utils/apollo/entities/restaurant/restaurant.mutations";
import { GET_DETAIL_RESTAURANT } from "../../../utils/apollo/entities/restaurant/restaurant.queries";
import { uploadCloudStorage } from "../../../utils/firebase";
import { useLocation } from "../../../utils/hooks/useLocation";
import AdminHeader2 from "../../components/AdminHeader2";

function RestaurantForm() {
    const { id } = useParams();
    useLocation();
    const history = useHistory();
    const {
        control,
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm();
    const [restaurantLatLng, setRestaurantLatLng] = useState(null);

    const formImg = watch("image");

    const { data } = useQuery(GET_MEALS);
    const [submitting, setSubmitting] = useState(false);

    const [getDetailRestaurant, detailRestaurantState] = useLazyQuery(
        GET_DETAIL_RESTAURANT
    );
    const meals = (data && data.meal) || [];

    const [insertRestaurant] = useMutation(INSERT_RESTAURANT);
    const [updateRestaurant] = useMutation(UPDATE_RESTAURANT);

    const locationData = useQuery(GET_LOCATION);

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
                    latlng: restaurantLatLng
                        ? `(${restaurantLatLng.lat},${restaurantLatLng.lng})`
                        : null,
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
                    latlng: restaurantLatLng
                        ? `(${restaurantLatLng.lat},${restaurantLatLng.lng})`
                        : null,
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
            if (latlng) {
                const { lat, lng } = utils.getLatLngFromString(latlng);
                setRestaurantLatLng({ lat, lng });
            }
        }
    }, [detailRestaurantState]);

    useEffect(() => {
        if (_.get(locationData, "data.location.scriptLoaded")) {
            const input = document.getElementById("address");
            const options = {
                componentRestrictions: { country: "vn" },
                fields: ["address_components", "geometry", "icon", "name"],
                strictBounds: false,
                types: ["establishment"],
            };
            if (locationData.data && locationData.data.location) {
                const { lat, lng } = locationData.data.location;
                const center = { lat, lng };
                // Create a bounding box with sides ~10km away from the center point
                const defaultBounds = {
                    north: center.lat + 0.1,
                    south: center.lat - 0.1,
                    east: center.lng + 0.1,
                    west: center.lng - 0.1,
                };
                options["bounds"] = defaultBounds;
            }
            const autocomplete = new window.google.maps.places.Autocomplete(
                input,
                options
            );

            autocomplete.addListener("place_changed", () => {
                const place = autocomplete.getPlace();
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();

                setRestaurantLatLng({ lat, lng });
            });
        }
    }, [locationData]);

    useEffect(() => {
        if (
            _.get(locationData, "data.location.scriptLoaded") &&
            restaurantLatLng
        ) {
            const { lat, lng } = restaurantLatLng;
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
            });

            const geocoder = new window.google.maps.Geocoder();
            geocoder
                .geocode({
                    location: { lat, lng },
                })
                .then((response) => {
                    console.log(response);
                    if (response.results[0]) {
                        console.log(response.results[0]);
                    }
                });
        }
    }, [locationData, restaurantLatLng]);

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
                                <input
                                    className="form-control"
                                    id="address"
                                    placeholder="VD: 17 ngõ 622 Minh Khai"
                                    {...register("address")}
                                />
                            </div>
                            <div className="mapouter mb-3">
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
