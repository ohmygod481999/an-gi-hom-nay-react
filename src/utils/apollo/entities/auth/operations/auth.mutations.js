import { authVar } from "..";

const createSetAuth = (authVar) => {
    return (
        { uid, displayName, email, emailVerified, phoneNumber, photoURL },
        accessToken
    ) => {
        // const auth = authVar();
        authVar({
            user: {
                uid,
                displayName,
                email,
                emailVerified,
                phoneNumber,
                photoURL,
            },
            accessToken,
        });
    };
};

export const authMutations = {
    setAuth: createSetAuth(authVar),
};
