import { gql } from "@apollo/client";

export const GET_RESTAURANTS = gql`
    query GetRestaurants {
        restaurant {
            id
            name
            address
            open
            close
            latlng
        }
        restaurant_aggregate {
            aggregate {
                count
            }
        }
    }
`;

export const GET_DETAIL_RESTAURANT = gql`
    query GetRestaurantDetail($id: Int!) {
        restaurant_by_pk(id: $id) {
            id
            name
            address
            close
            open
            img
            latlng
        }
    }
`;

export const GET_RESTAURANTS_PAGE = gql`
    query GetRestaurantPage($limit: Int, $offset: Int) {
        restaurant(limit: $limit, offset: $offset) {
            id
            name
            address
            open
            close
        }
        restaurant_aggregate {
            aggregate {
                count
            }
        }
    }
`;
