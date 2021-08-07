import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
    uri: "https://an-gi-hom-nay.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": process.env.REACT_APP_HASURA_ADMIN_SECRET,
    },
});
