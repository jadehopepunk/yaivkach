import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { getKeyPair } from "../keyPair"
import React, { useMemo, createContext } from "react"
import { GraphQLClient } from "graphql-request"
import { KeyPair, Session } from "shirokuma"

export type Panda = {
  publicKey?: string
  keyPair?: KeyPair
  session?: Session
  client?: GraphQLClient
}

export const PandaContext = createContext<Panda>({
  publicKey: undefined,
  keyPair: undefined,
  session: undefined,
  client: undefined,
})

type PandaProviderProps = {
  children: React.ReactNode
  endpoint: string
}

export const PandaProvider = ({ children, endpoint }: PandaProviderProps) => {
  const client = new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache(),
  })

  const state = useMemo(() => {
    const keyPair = getKeyPair()
    const session = new Session(endpoint).setKeyPair(keyPair)
    const client = new GraphQLClient(endpoint)

    return {
      keyPair,
      publicKey: keyPair.publicKey(),
      session,
      client,
    }
  }, [endpoint])

  return (
    <PandaContext.Provider value={state}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </PandaContext.Provider>
  )
}
