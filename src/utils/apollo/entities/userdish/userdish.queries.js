import { gql } from "@apollo/client";

export const GET_USER_DISHES = gql`
    query GetUserDishes($user_id: Int!) {
        userdish(where: { user_id: { _eq: $user_id } }) {
            id
            dish_id
            user_id
            dish {
                id
                name
                price
                img
                description
                restaurant {
                    id
                    name
                    address
                }
            }
        }
    }
`;
