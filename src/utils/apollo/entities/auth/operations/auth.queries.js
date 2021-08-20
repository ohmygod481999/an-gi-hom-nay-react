import { gql } from "@apollo/client";

export const GET_AUTH = gql`
    query GetAuth {
        auth @client {
            user {
                uid
                displayName
                email
                emailVerified
                phoneNumber
                photoURL
            }
            isAdmin
            accessToken
            isLoggedIn
            id
        }
    }
`;

export const GET_USER_BY_FIREBASE_ID = gql`
    query GetUserByFirebaseId($fb_id: String!) {
        user(where: { fb_uid: { _eq: $fb_id } }) {
            id
        }
    }
`;
