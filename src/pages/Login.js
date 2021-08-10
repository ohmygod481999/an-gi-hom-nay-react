import firebase, { authUI } from "../utils/firebase";
import React, { useEffect } from "react";
import { useTitle } from "../utils/hooks/useTitle";
import "firebaseui/dist/firebaseui.css";
import { useQuery } from "@apollo/client";
import { GET_AUTH } from "../utils/apollo/entities/auth/operations/auth.queries";
import { useHistory } from "react-router-dom";

function Login() {
    useTitle("Login");
    const history = useHistory();

    const { data, loading, error } = useQuery(GET_AUTH);

    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        authUI.start("#firebaseui-auth-container", {
            signInOptions: [
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: false,
                },
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            ],
            // signInFlow: "popup",
            callbacks: {
                signInSuccessWithAuthResult: (authResult) => {
                    const { additionalUserInfo, credential } = authResult;
                    const { isNewUser, profile, providerId } =
                        additionalUserInfo;
                    const { accessToken, idToken, signInMethod } = credential;
                    console.log(accessToken);
                    history.push("/landing");
                },
                signInFailure: (error) => {
                    alert(JSON.stringify(error));
                },
            },
        });
    }, []);

    return (
        <div className="login-page vh-100">
            <video loop autoPlay muted id="vid">
                <source src="img/bg.mp4" type="video/mp4" />
                <source src="img/bg.mp4" type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <div className="p-4">
                <h2 className="text-white my-0">Welcome Back</h2>
                <p className="text-white text-50">Sign in to continue</p>
                <div
                    style={{
                        display: "flex",
                        height: "50vh",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <div id="firebaseui-auth-container"></div>
                    <a
                        href="forgot_password.html"
                        className="text-decoration-none"
                    >
                        <p className="text-white text-center">
                            Forgot your password?
                        </p>
                    </a>
                </div>
                {/* <form className="mt-5 mb-4" action="verification.html">
                    <div className="form-group">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="form-group">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <button className="btn btn-primary btn-lg btn-block">
                        <a href="/" className="verification.html">
                            SIGN IN
                        </a>
                    </button>
                    <div className="py-2">
                        <button className="btn btn-lg btn-facebook btn-block">
                            <i className="feather-facebook" /> Connect with
                            Facebook
                        </button>
                    </div>
                </form> */}
            </div>
            <div className="fixed-bottom d-flex align-items-center justify-content-center">
                <a href="signup.html">
                    <p className="text-center text-white m-0">
                        Don't have an account? Sign up
                    </p>
                </a>
            </div>
        </div>
    );
}

export default Login;
