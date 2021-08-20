import { locationVar } from "..";

const createSetLocation = (locationVar) => {
    return (lat, lng) => {
        const location = {
            ...locationVar(),
            latlng: {
                lat,
                lng,
            },
        };
        locationVar(location);
    };
};

const createSetScriptLoaded = (locationVar) => {
    return (scriptLoaded) => {
        const location = {
            ...locationVar(),
            scriptLoaded: scriptLoaded,
        };
        locationVar(location);
    };
};

export const locationMutations = {
    setLocation: createSetLocation(locationVar),
    setScriptLoaded: createSetScriptLoaded(locationVar),
};
