import GetStarted from "./pages/GetStarted";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/landing";
import { useThirdPartyScript } from "./utils/hooks/useThirdPartyScript";
import { thirdPartyScripts } from "./configs";
import { useAuth } from "./utils/hooks/useAuth";
import Home from "./pages/home";
import Profile from "./pages/profile";
import { useQuery } from "@apollo/client";
import { GET_AUTH } from "./utils/apollo/entities/auth/operations/auth.queries";
import { useEffect, useState } from "react";
import PageLoader from "./layout/PageLoader";

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
                        <Route path="/profile">
                            <Profile />
                        </Route>
                    ) : null}
                </Switch>
            ) : (
                <PageLoader />
            )}
        </div>
    );
}

export default App;
