import {ApolloClient, InMemoryCache} from '@apollo/client';

export const clientQueryConsult = new ApolloClient({
  uri: 'https://app.cuidadoconelperro.com.mx/graphql',
  cache: new InMemoryCache(),
  headers: {
    Cookie: 'PHPSESSID=7b942f5fd07b473be-3f8c984d29abcc',
    Store: 'cuidadoconelperro_mx_store_view',
  },
});
