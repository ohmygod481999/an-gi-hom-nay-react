import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";

function Food() {
    return (
        <>
            {/* <AdminHeader title="Quản lý món ăn" /> */}
            <Switch>
                <Route path="/admin/food/list">
                    <FoodList />
                </Route>
                <Route path="/admin/food/create">
                    <FoodForm />
                </Route>
            </Switch>
        </>
    );
}

export default Food;
