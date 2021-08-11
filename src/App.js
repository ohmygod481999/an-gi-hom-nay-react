import GetStarted from "./pages/GetStarted";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Maintence from './pages/maintence/index';
import Map from './pages/map/index'
import MostPopular from './pages/mostpopular/index'
import NotFound from "./pages/notfound";
import Payment from "./pages/payment";
import Privacy from "./pages/privacy";
import Recipe from "./pages/recipe";
import Restaurant from "./pages/restaurant";
import SelectCountry from "./pages/select_country";
import Signup from "./pages/signup";
import Term from "./pages/term";


function App() {
    return (
        <Router>
            <Switch>
                <Route path={"/maintence"}>
                    <Maintence/>
                </Route>
                <Route path={"/privacy"}>
                    <Privacy/>
                </Route>
                <Route path={"/restaurant"}>
                    <Restaurant/>
                </Route>
                <Route path={"/select_country"}>
                    <SelectCountry/>
                </Route>
                <Route path={"/signup"}>
                    <Signup/>
                </Route>
                <Route path={"/term"}>
                    <Term/>
                </Route>
                <Route path={"/recipe"}>
                    <Recipe/>
                </Route>
                <Route path={"/payment"}>
                    <Payment/>
                </Route>
                <Route path={"/most_popular"}>
                    <MostPopular/>
                </Route>
                <Route path={"/not_found"}>
                    <NotFound/>
                </Route>
                <Route path={"/map"}>
                    <Map/>
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
