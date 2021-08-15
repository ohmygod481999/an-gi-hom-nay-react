import { gql } from "@apollo/client";

export const GET_MEALS = gql`
    query MyQuery {
        meal {
            id
            name
        }
    }
`;
