import { gql } from "@apollo/client";

export const GET_MEALS = gql`
    query MyQuery {
        meal {
            id
            name
        }
    }
`;

export const GET_MEAL = gql`
    query MyQuery($id: Int!) {
        meal_by_pk(id: $id) {
            id
            name
            mealfoods {
                food {
                    id
                    name
                    dishes {
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
        }
    }
`;
