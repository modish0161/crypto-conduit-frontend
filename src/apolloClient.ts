import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
    uri: 'YOUR_GRAPHQL_ENDPOINT',
});

const authLink = setContext((_, { headers }) => {
    // Get the authentication token from somewhere (localStorage, cookie, etc.)
    const token = localStorage.getItem('authToken');
    // Return the headers to the context so the httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

export function createApolloClient() {
    return new ApolloClient({
        link: authLink.concat(errorLink).concat(httpLink),
        cache: new InMemoryCache(),
    });
}
