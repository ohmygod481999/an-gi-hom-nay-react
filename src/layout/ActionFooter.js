import React from "react";
import { Link } from "react-router-dom";

function ActionFooter() {
    return (
        <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center">
            <div className="row">
                <div className="col selected">
                    <Link
                        to="/"
                        className="text-danger small font-weight-bold text-decoration-none"
                    >
                        <p className="h4 m-0">
                            <i className="feather-home text-danger" />
                        </p>
                        Home
                    </Link>
                </div>
                <div className="col">
                    <Link
                        to="/"
                        className="text-dark small font-weight-bold text-decoration-none"
                    >
                        <p className="h4 m-0">
                            <i className="feather-map-pin" />
                        </p>
                        Trending
                    </Link>
                </div>
                <div className="col bg-white rounded-circle mt-n4 px-3 py-2">
                    <div className="bg-danger rounded-circle mt-n0 shadow">
                        <Link
                            to="/"
                            className="text-white small font-weight-bold text-decoration-none"
                        >
                            <i className="feather-shopping-cart" />
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <Link
                        to="/"
                        className="text-dark small font-weight-bold text-decoration-none"
                    >
                        <p className="h4 m-0">
                            <i className="feather-heart" />
                        </p>
                        Favorites
                    </Link>
                </div>
                <div className="col">
                    <Link
                        to="/profile"
                        className="text-dark small font-weight-bold text-decoration-none"
                    >
                        <p className="h4 m-0">
                            <i className="feather-user" />
                        </p>
                        Profile
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ActionFooter;
