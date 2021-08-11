import { authVar } from "..";

const createSetAuth = (authVar) => {
    return (user, accessToken, isAdmin) => {
        // user { uid, displayName, email, emailVerified, phoneNumber, photoURL }
        authVar({
            user: user,
            accessToken,
            isAdmin: isAdmin,
            isLoggedIn: accessToken ? true : false,
        });
    };
};

export const authMutations = {
    setAuth: createSetAuth(authVar),
};
