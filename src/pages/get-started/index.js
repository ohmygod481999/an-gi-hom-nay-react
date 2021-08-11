import React from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../../utils/hooks/useTitle";

function GetStarted() {
    useTitle("Get started");

    return (
        <div>
            <div className="bg-primary d-flex align-items-center justify-content-center vh-100 index-page">
                <div className="text-center">
                    <Link to="/login">
                        <img src="img/logo.png" alt="" />
                    </Link>
                    <br />
                    <div className="spinner" />
                </div>
            </div>
            <div className="fixed-bottom d-flex align-items-center justify-content-center">
                <Link
                    to="/login"
                    className="btn btn-block d-flex align-items-center btn-lg btn-warning"
                >
                    Get Startedd <i className="feather-arrow-right ml-auto" />
                </Link>
            </div>
        </div>
    );
}

export default GetStarted;
