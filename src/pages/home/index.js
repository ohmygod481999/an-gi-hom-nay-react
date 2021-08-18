import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { thirdPartyScripts } from "../../configs";
import ActionFooter from "../../layout/ActionFooter";
import MainLayout from "../../layout/MainLayout";
import MainNav from "../../layout/MainNav";
import ModalFilter from "../../layout/ModalFilter";
import { GET_MEALS } from "../../utils/apollo/entities/meal/operations/meal.quereis";
import { useThirdPartyScript } from "../../utils/hooks/useThirdPartyScript";
import { useTitle } from "../../utils/hooks/useTitle";
import DishDetail from "./pages/DishDetail";
import PickMeal from "./pages/PickMeal";
import Random from "./pages/Random";

function Home() {
    useTitle("Ăn gì hôm nay");

    return (
        <MainLayout>
            {/* Filters */}
            <div className="bg-light">
                {/* slider */}
                <Switch>
                    <Route path="/home/random/:id">
                        <Random />
                    </Route>
                    <Route path="/home/dish/:dishId">
                        <DishDetail />
                    </Route>
                    <Route path="/home">
                        <PickMeal />
                    </Route>
                </Switch>
            </div>
        </MainLayout>
    );
}

export default Home;
