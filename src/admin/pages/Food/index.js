import React from "react";
import { Route, Switch } from "react-router-dom";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";

function Food() {
    return (
        <>
            <Switch>
                <Route path="/admin/food/list">
                    <FoodList />
                </Route>
                <Route path="/admin/food/create">
                    <FoodForm />
                </Route>
                <Route path="/admin/food/edit/:id">
                    <FoodForm />
                </Route>
            </Switch>
        </>
    );
}

export default Food;
