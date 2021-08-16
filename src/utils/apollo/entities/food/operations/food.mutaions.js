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

export const INSERT_MEALFOOD = gql`
    mutation InsertMealFood($food_id: Int!, $meal_id: Int!) {
        insert_mealfood_one(object: { food_id: $food_id, meal_id: $meal_id }) {
            food_id
            meal_id
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
    mutation UpdateFood(
        $id: Int!
        $description: String
        $name: String
        $img: String
    ) {
        update_food(
            where: { id: { _eq: $id } }
            _set: { description: $description, name: $name, img: $img }
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

export const UPDATE_MEALFOOD = gql`
    mutation UpdateFood($id: Int!, $food_id: Int, $meal_id: Int) {
        update_mealfood(
            where: { id: { _eq: $id } }
            _set: { food_id: $food_id, meal_id: $meal_id }
        ) {
            affected_rows
            returning {
                id
                food_id
                meal_id
            }
        }
    }
`;
