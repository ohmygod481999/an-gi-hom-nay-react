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

export const INSERT_FOOD = gql`
    mutation InsertFood($description: String, $name: String) {
        insert_food(
            objects: { description: $description, name: $name }
        ) {
            affected_rows
            returning {
                description
                id
                name
            }
        }
    }
`;
