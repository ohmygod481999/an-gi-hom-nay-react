import { Switch, Route } from "react-router-dom";

import GetStarted from "./pages/get-started";
import Login from "./pages/login";
import Maintence from "./pages/maintence/index";
import Map from "./pages/map/index";
import MostPopular from "./pages/most-popular/index";
import Payment from "./pages/payment";
import Privacy from "./pages/privacy";
import Recipe from "./pages/recipe";
import Restaurant from "./pages/restaurant";
import SelectCountry from "./pages/select-country";
import Signup from "./pages/signup";
import Term from "./pages/term";
import Landing from "./pages/landing";
import Home from "./pages/home";
import Profile from "./pages/profile";
import PageLoader from "./layout/PageLoader";
import NotFound from "./pages/not-found";

import { useThirdPartyScript } from "./utils/hooks/useThirdPartyScript";
import { thirdPartyScripts } from "./configs";
import { useAuth } from "./utils/hooks/useAuth";
import { useQuery } from "@apollo/client";
import { GET_AUTH } from "./utils/apollo/entities/auth/operations/auth.queries";
import { useEffect, useState } from "react";

function App() {
    const [enableLoadScript, setEnableLoadScript] = useState(false);
    useThirdPartyScript(thirdPartyScripts, enableLoadScript);
    useAuth();

    const { data } = useQuery(GET_AUTH);
    const { auth } = data;

    useEffect(() => {
        if (auth) {
            setEnableLoadScript(true);
        }
    }, [auth]);

    return (
        <div>
            {auth ? (
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/landing">
                        <Landing />
                    </Route>
                    <Route exact path="/">
                        {auth.isLoggedIn ? <Home /> : <GetStarted />}
                    </Route>
                    {auth.isLoggedIn ? (
                        <>
                            <Route path="/profile">
                                <Profile />
                            </Route>
                            <Route path={"/maintence"}>
                                <Maintence />
                            </Route>
                            <Route path={"/privacy"}>
                                <Privacy />
                            </Route>
                            <Route path={"/restaurant"}>
                                <Restaurant />
                            </Route>
                            <Route path={"/select-country"}>
                                <SelectCountry />
                            </Route>
                            <Route path={"/signup"}>
                                <Signup />
                            </Route>
                            <Route path={"/term"}>
                                <Term />
                            </Route>
                            <Route path={"/recipe"}>
                                <Recipe />
                            </Route>
                            <Route path={"/payment"}>
                                <Payment />
                            </Route>
                            <Route path={"/most-popular"}>
                                <MostPopular />
                            </Route>
                            <Route path={"/map"}>
                                <Map />
                            </Route>
                        </>
                    ) : null}
                    <Route path='*' exact={true} component={NotFound} />
                </Switch>
            ) : (
                <PageLoader />
            )}
        </div>
    );
}

export default App;
