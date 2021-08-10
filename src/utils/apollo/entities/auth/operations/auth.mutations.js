import { authVar } from "..";

const createSetAuth = (authVar) => {
    return (user, accessToken) => {
        // user { uid, displayName, email, emailVerified, phoneNumber, photoURL }
        authVar({
            user: user,
            accessToken,
            isLoggedIn: accessToken ? true : false,
        });
    };
};

export const authMutations = {
    setAuth: createSetAuth(authVar),
};
