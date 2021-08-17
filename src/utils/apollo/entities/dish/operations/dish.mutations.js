import { gql } from "@apollo/client";

export const DELETE_DISH = gql`
    mutation DeleteDish($id: Int) {
        delete_dish(where: { id: { _eq: $id } }) {
            affected_rows
            returning {
                description
                id
                name
            }
        }
    }
`;

export const INSERT_DISH = gql`
    mutation InsertDish(
        $description: String
        $name: String
        $price: Int
        $food_id: Int
        $restaurant_id: Int
        $img: String
    ) {
        insert_dish(
            objects: {
                description: $description
                name: $name
                price: $price
                food_id: $food_id
                restaurant_id: $restaurant_id
                img: $img
            }
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

export const UPDATE_DISH = gql`
    mutation UpdateDish(
        $id: Int!
        $description: String
        $name: String
        $price: Int
        $food_id: Int
        $restaurant_id: Int
        $img: String
    ) {
        update_dish(
            where: { id: { _eq: $id } }
            _set: {
                description: $description
                name: $name
                price: $price
                food_id: $food_id
                restaurant_id: $restaurant_id
                img: $img
            }
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
