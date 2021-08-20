import { gql } from "@apollo/client";

export const INSERT_USER_DISH = gql`
    mutation InsertRestaurant($dish_id: Int, $user_id: Int) {
        insert_userdish(objects: { dish_id: $dish_id, user_id: $user_id }) {
            affected_rows
        }
    }
`;

export const DELETE_USER_DISH = gql`
    mutation DeleteRestaurant($dish_id: Int, $user_id: Int) {
        delete_userdish(
            where: {
                _and: { dish_id: { _eq: $dish_id }, user_id: { _eq: $user_id } }
            }
        ) {
            affected_rows
        }
    }
`;
