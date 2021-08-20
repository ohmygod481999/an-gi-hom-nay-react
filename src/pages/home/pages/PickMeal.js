import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { GET_MEALS } from "../../../utils/apollo/entities/meal/operations/meal.quereis";

function PickMeal() {
    const { data, loading } = useQuery(GET_MEALS);
    const meals = (data && data.meal) || [];

    return (
        <div
            style={{
                height: "90vh",
            }}
        >
            <div className="px-3 pt-3 title d-flex align-items-center">
                <h5 className="m-0">Bạn không biết hôm nay ăn gì? Để mình gợi ý nhé!</h5>
                <a className="font-weight-bold ml-auto" href="trending.html">
                    {/* View all <i className="feather-chevrons-right" /> */}
                </a>
            </div>
            <div className="px-3 pt-3">
                <p className="text-muted">Bạn đang muốn dúng bữa nào</p>
                <div className="list-group">
                    {meals.map((meal) => (
                        <Link to={"/home/random/" + meal.id}>
                            <button
                                key={meal.id}
                                type="button"
                                className="list-group-item list-group-item-action"
                            >
                                {meal.name}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PickMeal;
