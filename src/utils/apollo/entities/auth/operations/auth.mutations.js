import { authVar } from "..";

const createSetAuth = (authVar) => {
    return (user, accessToken, isAdmin, id) => {
        // user { uid, displayName, email, emailVerified, phoneNumber, photoURL }
        authVar({
            user: user,
            accessToken,
            isAdmin: isAdmin,
            isLoggedIn: accessToken ? true : false,
            id,
        });
    };
};

export const authMutations = {
    setAuth: createSetAuth(authVar),
};
