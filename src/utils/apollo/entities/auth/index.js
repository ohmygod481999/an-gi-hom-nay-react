import { makeVar } from "@apollo/client";

const authInitialValue = {
    user: null,
    accessToken: null,
};

export const authVar = makeVar(authInitialValue);
