import { InMemoryCache } from "@apollo/client";
import { authVar } from "./entities/auth";

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                auth: {
                    read() {
                        return authVar();
                    },
                },
            },
        },
    },
});
