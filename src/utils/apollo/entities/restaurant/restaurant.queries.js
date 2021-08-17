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
