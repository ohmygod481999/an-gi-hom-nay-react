import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import RestaurantForm from "./RestaurantForm";
import RestaurantList from "./RestaurantList";

function Restaurant() {
    return (
        <>
            <Switch>
                <Route path="/admin/restaurant/list">
                    <RestaurantList />
                </Route>
                <Route path="/admin/restaurant/create">
                    <RestaurantForm />
                </Route>
                <Route path="/admin/restaurant/edit/:id">
                    <RestaurantForm />
                </Route>
            </Switch>
        </>
    );
}

export default Restaurant;
