import { gql } from "@apollo/client";

export const UPDATE_RESTAURANT = gql`
    mutation UpdateRestaurant(
        $id: Int!
        $address: String
        $name: String
        $img: String
        $open: timetz
        $close: timetz
        $latlng: point
    ) {
        update_restaurant(
            where: { id: { _eq: $id } }
            _set: {
                address: $address
                name: $name
                open: $open
                close: $close
                img: $img
                latlng: $latlng
            }
        ) {
            affected_rows
        }
    }
`;

export const INSERT_RESTAURANT = gql`
    mutation InsertRestaurant(
        $address: String
        $name: String
        $img: String
        $open: timetz
        $close: timetz
        $latlng: point
    ) {
        insert_restaurant(
            objects: {
                address: $address
                name: $name
                open: $open
                close: $close
                img: $img
                latlng: $latlng
            }
        ) {
            affected_rows
            returning {
                id
            }
        }
    }
`;

export const DELETE_RESTAURANT = gql`
    mutation DeleteRestaurant($id: Int) {
        delete_restaurant(where: { id: { _eq: $id } }) {
            affected_rows
        }
    }
`;
