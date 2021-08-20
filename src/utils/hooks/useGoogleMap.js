import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";
import { locationMutations } from "../apollo/entities/location/operations/location.mutations";

export const useGoogleMap = () => {
    useEffect(() => {
        const loader = new Loader({
            apiKey: process.env.REACT_APP_GOOGLE_MAP,
            version: "weekly",
            libraries: ["places"],
        });
        loader.load().then(() => {
            locationMutations.setScriptLoaded(true);
        });
    }, []);
};
