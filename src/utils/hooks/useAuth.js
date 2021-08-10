import { useEffect } from "react";
import { authMutations } from "../apollo/entities/auth/operations/auth.mutations";
import { auth } from "../firebase";

export const useAuth = () => {
    useEffect(() => {
        // auth.signOut()
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userInfo = {
                    displayName: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    uid: user.uid,
                };
                const idToken = await user.getIdToken();
                authMutations.setAuth(userInfo, idToken);
            }
        });
    }, []);
};
