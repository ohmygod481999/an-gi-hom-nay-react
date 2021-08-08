import React from "react";
import { useTitle } from "../utils/hooks/useTitle";

function Login() {
    useTitle("Login");

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
                <form className="mt-5 mb-4" action="verification.html">
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
                </form>
                <a href="forgot_password.html" className="text-decoration-none">
                    <p className="text-white text-center">
                        Forgot your password?
                    </p>
                </a>
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
