import { gql } from "@apollo/client";

export const GET_FOODS = gql`
    query MyQuery {
        food {
            id
            name
            description
        }
    }
`;


