import { InMemoryCache } from "@apollo/client";
import { authVar } from "./entities/auth";
import { locationVar } from "./entities/location";

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                auth: {
                    read() {
                        return authVar();
                    },
                },
                location: {
                    read() {
                        return locationVar();
                    },
                },
            },
        },
    },
});
