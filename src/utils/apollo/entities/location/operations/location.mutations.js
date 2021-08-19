import { locationVar } from "..";

const createSetLocation = (locationVar) => {
    return (lat, lng) => {
        const location = {
            lat,
            lng,
        };
        locationVar(location);
    };
};

export const locationMutations = {
    setLocation: createSetLocation(locationVar),
};
