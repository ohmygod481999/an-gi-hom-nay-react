import { ApolloClient } from "@apollo/client";
import { cache } from "./cache";

export const apolloClient = new ApolloClient({
    uri: "https://an-gi-hom-nay.hasura.app/v1/graphql",
    cache: cache,
    headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": process.env.REACT_APP_HASURA_ADMIN_SECRET,
    },
});
