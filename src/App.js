import GetStarted from "./pages/GetStarted";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import { useEffect } from "react";
import { auth } from "./utils/firebase";
import { authMutations } from "./utils/apollo/entities/auth/operations/auth.mutations";
import Landing from "./pages/landing";

function App() {
    useEffect(() => {
        // auth.signOut()
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userInfo = {
                    displayName: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    uid: user.uid,
                };
                const idToken = await user.getIdToken();
                authMutations.setAuth(userInfo, idToken);
            }
        });
    }, []);
    return (
        <Router>
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
        </Router>
    );
}

export default App;
