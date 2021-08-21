import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { authMutations } from "../apollo/entities/auth/operations/auth.mutations";
import { GET_USER_BY_FIREBASE_ID } from "../apollo/entities/auth/operations/auth.queries";
import { auth } from "../firebase";

export const useAuth = () => {
    const [getUser, { called, loading, data }] = useLazyQuery(
        GET_USER_BY_FIREBASE_ID
    );
    const [authTemp, setAuthTemp] = useState(null);

    useEffect(() => {
        // auth.signOut()
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const idTokenReuslt = await auth.currentUser.getIdTokenResult();
                const isAdmin = Boolean(idTokenReuslt.claims.isAdmin);
                const userInfo = {
                    displayName: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    uid: user.uid,
                };
                const idToken = await user.getIdToken();
                setAuthTemp({
                    userInfo,
                    idToken,
                    isAdmin,
                });
                getUser({
                    variables: {
                        fb_id: user.uid,
                    },
                });
            } else {
                authMutations.setAuth(null, null, null, null);
            }
        });
    }, []);

    useEffect(() => {
        if (called && data && auth) {
            const userId = data.user[0].id || null;
            authMutations.setAuth(authTemp.userInfo, authTemp.idToken, authTemp.isAdmin, userId);
        }
    }, [auth, data, called]);
};
