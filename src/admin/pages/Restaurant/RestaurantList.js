import { useMutation } from "@apollo/client";
import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { DELETE_RESTAURANT } from "../../../utils/apollo/entities/restaurant/restaurant.mutations";
import { GET_RESTAURANTS_PAGE } from "../../../utils/apollo/entities/restaurant/restaurant.queries";
import MySwal from "../../../utils/components/MySwal";
import AdminHeader2 from "../../components/AdminHeader2";
import MyTable from "../../components/MyTable";

function RestaurantList() {
    const tableRef = useRef();

    const [deleteRestaurant] = useMutation(DELETE_RESTAURANT);

    const columns = useMemo(
        () => [
            {
                Header: "Id",
                accessor: "id",
            },
            {
                Header: "Tên nhà hàng",
                accessor: "name",
            },
            {
                Header: "Địa chỉ",
                accessor: "address",
                Cell: ({ value }) => {
                    if (!value) return "N/A";
                    return value;
                },
            },
            {
                Header: "Action",
                accessor: (v) => v,
                Cell: ({ value }) => {
                    const [loading, setLoading] = useState(false);
                    return (
                        <div>
                            <button
                                type="button"
                                className="btn btn-danger btn-sm mr-2 mb-2"
                                disabled={loading}
                                data-toggle="modal"
                                data-target="deleteModal"
                                onClick={() => {
                                    MySwal.fire({
                                        title: "Bạn có muốn xóa bản ghi này",
                                        icon: "warning",
                                        showCancelButton: true,
                                        confirmButtonText: "Đồng ý",
                                    }).then(({ isConfirmed }) => {
                                        if (isConfirmed) {
                                            setLoading(true);
                                            deleteRestaurant({
                                                variables: {
                                                    id: value.id,
                                                },
                                            })
                                                .then((res) => {
                                                    tableRef.current.refetch();
                                                    toast["success"](
                                                        "Thành công"
                                                    );
                                                })
                                                .catch((e) => {
                                                    console.log(e);
                                                    toast["error"]("Thất bại");
                                                })
                                                .finally(() => {
                                                    setLoading(false);
                                                });
                                        }
                                    });
                                }}
                            >
                                Delete
                            </button>
                            <Link to={`/admin/restaurant/edit/${value.id}`}>
                                <button
                                    type="button"
                                    className="btn btn-info btn-sm  mb-2"
                                >
                                    Edit
                                </button>
                            </Link>
                        </div>
                    );
                },
            },
        ],
        []
    );

    return (
        <div className="">
            <AdminHeader2
                title="Danh sách nhà hàng"
                extraLink={{
                    path: "/admin/restaurant/create",
                    title: "Tạo mới",
                }}
            />
            <div className="bg-light mb-4 p-3 osahan-cart-item">
                <div className="osahan-cart-item-profile bg-white rounded shadow p-3 mt-n5">
                    <div className="p-3">
                        <MyTable
                            ref={tableRef}
                            columns={columns}
                            gqlQuery={GET_RESTAURANTS_PAGE}
                            dataParser={(value) => value.restaurant}
                            totalCountParser={(value) =>
                                value.restaurant_aggregate.aggregate.count
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantList;
