import { gql } from "@apollo/client";

export const GET_USER_HISTORIES = gql`
    query GetUserHistories($user_id: Int!) {
        userhistory(
            where: { user_id: { _eq: $user_id } }
            order_by: { created_at: desc }
        ) {
            id
            user_id
            dish_id
            created_at
            dish {
                id
                name
                price
                img
                restaurant {
                    id
                    name
                }
            }
        }
    }
`;
