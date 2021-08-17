import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import DishForm from "./DishForm";
import DishList from "./DishList";

function Dish() {
    return (
        <>
            <Switch>
                <Route path="/admin/dish/list">
                    <DishList />
                </Route>
                <Route path="/admin/dish/create">
                    <DishForm />
                </Route>
                <Route path="/admin/dish/edit/:id">
                    <DishForm />
                </Route>
            </Switch>
        </>
    );
}

export default Dish;
