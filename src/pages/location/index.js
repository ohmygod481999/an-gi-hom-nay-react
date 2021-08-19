import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { locationMutations } from "../../utils/apollo/entities/location/operations/location.mutations";
import { useTitle } from "../../utils/hooks/useTitle";

function Location() {
    useTitle("Xác định vị trí");
    const history = useHistory();
    const handleGetLocation = (e) => {
        e.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                locationMutations.setLocation(
                    position.coords.latitude,
                    position.coords.longitude
                );
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
        history.push("/home");
    };
    return (
        <div className="vh-100 location location-page">
            <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
                <img
                    src="img/location.png"
                    className="img-fluid mx-auto"
                    alt="Responsive image"
                />
                <div className="px-4 text-center mt-4">
                    <h5 className="text-dark">Hi, nice to meet you!</h5>
                    <p className="mb-5">
                        Choose your location to start find restaurants around
                        you.
                    </p>
                    <a
                        href="home.html"
                        className="btn btn-lg btn-primary btn-block my-4"
                        onClick={handleGetLocation}
                    >
                        <i className="feather-navigation" /> Use current
                        location
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Location;
