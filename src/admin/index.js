import React from "react";
import { Route, Switch } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AdminHeader from "./components/AdminHeader";
import Dish from "./pages/Dish";
import Food from "./pages/Food";
import Restaurant from "./pages/Restaurant";

function AdminPage() {
    return (
        <MainLayout isAdmin={true}>
            <Switch>
                <Route path="/admin/restaurant">
                    <Restaurant />
                </Route>
                <Route path="/admin/dish">
                    <Dish />
                </Route>
                <Route path="/admin/food">
                    <Food />
                </Route>
            </Switch>
        </MainLayout>
    );
}

export default AdminPage;
