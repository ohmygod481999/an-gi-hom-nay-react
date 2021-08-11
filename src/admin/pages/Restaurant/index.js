import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import RestaurantForm from "./RestaurantForm";
import RestaurantList from "./RestaurantList";

function Restaurant() {
    return (
        <>
            <AdminHeader title="Quản lý nhà hàng" />
            <Switch>
                <Route path="/admin/restaurant/list">
                    <RestaurantList />
                </Route>
                <Route path="/admin/restaurant/create">
                    <RestaurantForm />
                </Route>
            </Switch>
        </>
    );
}

export default Restaurant;
