import {ApolloClient, InMemoryCache} from '@apollo/client';

export const Client = new ApolloClient({
    //uri: "https://amazing-store-ricardo-sipione.herokuapp.com",
    uri: "http://localhost:4000",
    cache: new InMemoryCache({
        addTypename: false
    }),
})