import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function ActionFooter({ isHomePage }) {
    const location = useLocation();

    return (
        <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center">
            <div className="row">
                <div
                    className={`col ${
                        location.pathname.includes("/home") ? "selected" : ""
                    }`}
                >
                    <Link
                        to="/"
                        className={`${
                            location.pathname.includes("/home")
                                ? "text-primary"
                                : "text-dark"
                        } small font-weight-bold text-decoration-none`}
                    >
                        <p className="h4 m-0">
                            <i
                                className={`feather-home ${
                                    location.pathname.includes("/home")
                                        ? "text-primary"
                                        : "text-dark"
                                }`}
                            />
                        </p>
                        Home
                    </Link>
                </div>
                {/* <div
                    className={`col  ${
                        location.pathname === "/most-popular" ? "selected" : ""
                    }`}
                >
                    <Link
                        to="/most-popular"
                        className={`${
                            location.pathname === "/most-popular"
                                ? "text-primary"
                                : "text-dark"
                        } small font-weight-bold text-decoration-none`}
                    >
                        <p className="h4 m-0">
                            <i
                                className={`feather-map-pin ${
                                    location.pathname === "/most-popular"
                                        ? "text-primary"
                                        : "text-dark"
                                }`}
                            />
                        </p>
                        Trending
                    </Link>
                </div> */}
                <div className="col bg-white rounded-circle mt-n4 px-3 py-2">
                    <div className="bg-primary rounded-circle mt-n0 shadow">
                        <Link
                            to="/profile"
                            className="text-white small font-weight-bold text-decoration-none"
                        >
                            <i className="feather-user" />
                        </Link>
                    </div>
                </div>
                <div
                    className={`col ${
                        location.pathname === "/favorites" ? "selected" : ""
                    }`}
                >
                    <Link
                        to="/favorites"
                        className={`${
                            location.pathname === "/favorites"
                                ? "text-primary"
                                : "text-dark"
                        } small font-weight-bold text-decoration-none`}
                    >
                        <p className="h4 m-0">
                            <i
                                className={`feather-heart ${
                                    location.pathname === "/favorites"
                                        ? "text-primary"
                                        : "text-dark"
                                }`}
                            />
                        </p>
                        Favorites
                    </Link>
                </div>
                {/* <div
                    className={`col  ${
                        location.pathname === "/profile" ? "selected" : ""
                    }`}
                >
                    <Link
                        to="/profile"
                        className={`${
                            location.pathname === "/profile"
                                ? "text-primary"
                                : "text-dark"
                        } small font-weight-bold text-decoration-none`}
                    >
                        <p className="h4 m-0">
                            <i
                                className={`feather-user ${
                                    location.pathname === "/profile"
                                        ? "text-primary"
                                        : "text-dark"
                                }`}
                            />
                        </p>
                        Profile
                    </Link>
                </div> */}
            </div>
        </div>
    );
}

export default ActionFooter;
