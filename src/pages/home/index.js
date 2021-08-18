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
import PickMeal from "./pages/PickMeal";
import Random from "./pages/Random";

function Home() {
    useTitle("Ăn gì hôm nay");

    return (
        <MainLayout>
            <ModalFilter />
            <div className="bg-primary p-3">
                <div className="text-white">
                    <div className="title d-flex align-items-center">
                        <a className="toggle" href="#">
                            <span />
                        </a>
                        <h4 className="font-weight-bold m-0 pl-5">Browse</h4>
                        <a
                            className="text-white font-weight-bold ml-auto"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            href="#"
                        >
                            Filter
                        </a>
                    </div>
                </div>
            </div>
            {/* Filters */}
            <div className="bg-light">
                {/* slider */}
                <Switch>
                    <Route path="/home/random/:id">
                        <Random />
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
