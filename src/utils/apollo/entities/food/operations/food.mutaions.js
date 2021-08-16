import { gql } from "@apollo/client";

export const INSERT_FOOD = gql`
    mutation InsertFood($description: String, $name: String, $img: String) {
        insert_food(
            objects: { description: $description, name: $name, img: $img }
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

export const DELETE_FOOD = gql`
    mutation DeleteFood($id: Int) {
        delete_food(where: { id: { _eq: $id } }) {
            affected_rows
            returning {
                description
                id
                name
            }
        }
    }
`;

export const UPDATE_FOOD = gql`
    mutation UpdateFood($id: Int!, $description: String, $name: String) {
        update_food(
            where: { id: { _eq: $id } }
            _set: { description: $description, name: $name }
        ) {
            affected_rows
            returning {
                name
                id
                description
            }
        }
    }
`;
