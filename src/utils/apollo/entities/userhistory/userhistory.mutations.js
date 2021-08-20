import { gql } from "@apollo/client";

export const INSERT_USER_HISTORY = gql`
    mutation InsertUserHistory($dish_id: Int, $user_id: Int) {
        insert_userhistory(objects: { dish_id: $dish_id, user_id: $user_id }) {
            affected_rows
        }
    }
`;
