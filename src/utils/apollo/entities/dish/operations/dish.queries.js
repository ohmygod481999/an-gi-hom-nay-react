import { gql } from "@apollo/client";

export const GET_DISH_PAGE = gql`
    query GetDishPage($limit: Int, $offset: Int) {
        dish(limit: $limit, offset: $offset) {
            id
            name
            price
            description
            food {
                id
                name
            }
            restaurant {
                id
                name
                address
            }
        }
        dish_aggregate {
            aggregate {
                count
            }
        }
    }
`;

export const GET_DETAIL_DISH = gql`
    query GetDishDetail($id: Int!) {
        dish_by_pk(id: $id) {
            id
            name
            price
            description
            food_id
            restaurant_id
            restaurant {
              id
              name
              address
              open
              close
              latlng
              dishes {
                id
                name
                price
                img
                description
              }
            }
            img
        }
    }
`;
