import React from "react";
import { Route, Switch } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AdminHeader from "./components/AdminHeader";
import Dish from "./pages/Dish";
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
            </Switch>
        </MainLayout>
    );
}

export default AdminPage;
