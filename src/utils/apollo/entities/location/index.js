import { makeVar } from "@apollo/client";

const locationInitialValue = {
    latlng: null,
    scriptLoaded: false
};

export const locationVar = makeVar(locationInitialValue);
