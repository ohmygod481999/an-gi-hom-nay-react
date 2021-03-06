import { gql } from "@apollo/client";

export const GET_FOODS_PAGE = gql`
    query GetFoodPage($limit: Int, $offset: Int) {
        food(limit: $limit, offset: $offset) {
            id
            name
            description
        }
        food_aggregate {
            aggregate {
                count
            }
        }
    }
`;

export const GET_FOODS = gql`
    query GetFoods {
        food {
            id
            name
            description
        }
        food_aggregate {
            aggregate {
                count
            }
        }
    }
`;

export const GET_DETAIL_FOOD = gql`
    query GetFoodDetail($id: Int!) {
        food_by_pk(id: $id) {
            id
            name
            description
            img
        }
        mealfood(where: { food_id: { _eq: $id } }) {
            id
            food_id
            meal {
                id
                name
            }
        }
    }
`;
