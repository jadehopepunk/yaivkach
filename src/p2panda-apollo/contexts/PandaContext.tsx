import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

type PandaProviderProps = {
  children: React.ReactNode
  endpoint: string
}

export const PandaProvider = ({ children, endpoint }: PandaProviderProps) => {
  const client = new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
