import { useEffect } from "react";
import { locationMutations } from "../apollo/entities/location/operations/location.mutations";

export const useLocation = () => {
    useEffect(() => {
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
    }, []);
};
