import React from "react";
import { useTitle } from "../utils/hooks/useTitle";

function GetStarted() {
    useTitle("Get started");
    
    return (
        <div>
            <div className="bg-primary d-flex align-items-center justify-content-center vh-100 index-page">
                <div className="text-center">
                    <a href="login.html">
                        <img src="img/logo.png" alt="" />
                    </a>
                    <br />
                    <div className="spinner" />
                </div>
            </div>
            <div className="fixed-bottom d-flex align-items-center justify-content-center">
                <a
                    className="btn btn-block d-flex align-items-center btn-lg btn-warning"
                    href="login.html"
                >
                    Get Started <i className="feather-arrow-right ml-auto" />
                </a>
            </div>
        </div>
    );
}

export default GetStarted;
