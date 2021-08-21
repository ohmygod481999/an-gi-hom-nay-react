import { gql } from "@apollo/client";

export const GET_ADDITION_PRODUCT = gql`
    query GetAdditionProduct {
        additionproduct {
            id
            name
            description
            sub_description
            price
            img
            third_party_url
        }
    }
`;
