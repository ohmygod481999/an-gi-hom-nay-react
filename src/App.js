import { Switch, Route, Redirect } from "react-router-dom";

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
import { useLocation } from "./utils/hooks/useLocation";
import { useQuery } from "@apollo/client";
import { GET_AUTH } from "./utils/apollo/entities/auth/operations/auth.queries";
import { useEffect, useState } from "react";
import AdminRoute from "./utils/components/AdminRoute";
import AdminPage from "./admin";
import Unauthorize from "./pages/unauthorize";
import Favorites from "./pages/favorites";
import Location from "./pages/location";

function App() {
    const [enableLoadScript, setEnableLoadScript] = useState(false);
    useThirdPartyScript(thirdPartyScripts, enableLoadScript);
    useAuth();
    
    const { data } = useQuery(GET_AUTH);
    const { auth } = data;

    useEffect(() => {
        if (auth) {
            console.log(auth);
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
                    <Route path="/location">
                        <Location />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/home">
                        {auth.isLoggedIn ? <Home /> : <GetStarted />}
                    </Route>

                    <Route path="/401" exact={true}>
                        <Unauthorize />
                    </Route>
                    {auth.isLoggedIn ? (
                        <Switch>
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
                            <Route path={"/favorites"}>
                                <Favorites />
                            </Route>
                            <Route path={"/map"}>
                                <Map />
                            </Route>
                            <AdminRoute path="/admin" isAdmin={auth.isAdmin}>
                                <AdminPage />
                            </AdminRoute>
                            <Route path="*" component={NotFound} />
                        </Switch>
                    ) : null}

                    <Route path="*" exact={true} component={NotFound} />
                </Switch>
            ) : (
                <PageLoader />
            )}
        </div>
    );
}

export default App;
