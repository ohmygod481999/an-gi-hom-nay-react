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
        }
    }
`;
