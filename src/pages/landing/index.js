import React from "react";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="vh-100 landing-page-skip">
            <Link
                className="position-absolute btn-sm btn btn-outline-primary m-4 zindex"
                to="/"
            >
                Skip <i className="feather-chevrons-right" />
            </Link>
            <div className="osahan-slider">
                <div className="osahan-slider-item text-center">
                    <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
                        <img
                            src="img/landing1.png"
                            className="img-fluid mx-auto"
                            alt="Responsive image"
                        />
                        <h4 className="my-4 text-dark">
                            Discover Place Near You
                        </h4>
                        <p>
                            We make it simple to find the food you crave. Enter
                            your address and let us do the rest.
                        </p>
                    </div>
                </div>
                <div className="osahan-slider-item text-center">
                    <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
                        <img
                            src="img/landing2.png"
                            className="img-fluid mx-auto"
                            alt="Responsive image"
                        />
                        <h4 className="my-4 text-dark">Choose A Tasty Dish</h4>
                        <p>
                            When you order Eat Street, we'll specials and
                            rewards.
                        </p>
                    </div>
                </div>
                <div className="osahan-slider-item text-center">
                    <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
                        <img
                            src="img/landing3.png"
                            className="img-fluid mx-auto"
                            alt="Responsive image"
                        />
                        <h4 className="my-4 text-dark">Pick Up Or Delivery</h4>
                        <p>
                            We make food ordering fast, simple and free - no
                            matterif you order online or cash.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
