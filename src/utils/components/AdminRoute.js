import React from "react";
import { Redirect, Route } from "react-router-dom";

function AdminRoute({ path, isAdmin, children }) {
    return (
        <Route path={path}>{isAdmin ? children : <Redirect to="/401" />}</Route>
    );
}

export default AdminRoute;
