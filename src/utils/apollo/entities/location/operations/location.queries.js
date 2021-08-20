import { gql } from "@apollo/client";

export const GET_LOCATION = gql`
    query GetLocation {
        location @client {
            latlng {
                lat
                lng
            }
            scriptLoaded
        }
    }
`;
