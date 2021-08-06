import GetStarted from "./pages/GetStarted";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <GetStarted />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
