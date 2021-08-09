import GetStarted from "./pages/GetStarted";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Maintence from "./pages/maintence/Maintence";
import BottomNav from "./layout/bottomnav/BottomNav";

function App() {
    return (
        <Router>
            <Switch>
                <Route path={"/maintence"}>
                    <Maintence/>
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <GetStarted />
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
