import GetStarted from "./pages/GetStarted";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/landing";
import { useThirdPartyScript } from "./utils/hooks/useThirdPartyScript";
import { thirdPartyScripts } from "./configs";
import { useAuth } from "./utils/hooks/useAuth";

function App() {
    useThirdPartyScript(thirdPartyScripts);
    useAuth();

    return (
        <Switch>
            <Route exact path="/">
                <GetStarted />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/landing">
                <Landing />
            </Route>
        </Switch>
    );
}

export default App;
