import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  HttpLink,
  split
} from "@apollo/client"
import { getMainDefinition } from "@apollo/client/utilities"

export default function inicializar() {
  const GRAPHQL_URL =
    process.env.GRAPHQL_URL

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://localhost:1337/graphql'
    }),
    cache: new InMemoryCache().restore({}),
  })
}
