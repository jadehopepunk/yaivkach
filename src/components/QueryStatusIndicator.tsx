import { QueryResult } from "@apollo/client/react/types/types"
import { Center, Spinner } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props<TData> {
  query: QueryResult<TData, any>
  children: (data: TData) => ReactNode
}

export function QueryStatusIndicator<TData>({ query, children }: Props<TData>) {
  if (query.loading) {
    return (
      <Center>
        <Spinner size="lg" opacity="50%" />
      </Center>
    )
  }

  if (query.error) {
    return <p>Error: {query.error.message}</p>
  }

  if (!query.data) {
    return <p>Data is empty</p>
  }

  return children(query.data as TData)
}
