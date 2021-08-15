import { useMutation } from "@apollo/client";
import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { DELETE_FOOD } from "../../../utils/apollo/entities/food/operations/food.mutaions";
import { GET_FOODS_PAGE } from "../../../utils/apollo/entities/food/operations/food.queries";
import MySwal from "../../../utils/components/MySwal";
import AdminHeader2 from "../../components/AdminHeader2";
import MyTable from "../../components/MyTable";

function FoodList() {
    const tableRef = useRef();

    const [deleteFood] = useMutation(DELETE_FOOD);

    const columns = useMemo(
        () => [
            {
                Header: "Id",
                accessor: "id",
            },
            {
                Header: "Tên món",
                accessor: "name",
            },
            {
                Header: "Mô tả",
                accessor: "description",
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
                                className="btn btn-danger btn-sm mr-2"
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
                                            deleteFood({
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
                            <Link to={`/admin/food/edit/${value.id}`}>
                                <button
                                    type="button"
                                    className="btn btn-info btn-sm"
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
                title="Danh sách món"
                extraLink={{
                    path: "/admin/food/create",
                    title: "Tạo mới",
                }}
            />
            <div className="bg-light mb-4 p-3 osahan-cart-item">
                <div className="osahan-cart-item-profile bg-white rounded shadow p-3 mt-n5">
                    <div className="p-3">
                        <MyTable
                            ref={tableRef}
                            columns={columns}
                            gqlQuery={GET_FOODS_PAGE}
                            dataParser={(value) => value.food}
                            totalCountParser={(value) =>
                                value.food_aggregate.aggregate.count
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodList;
