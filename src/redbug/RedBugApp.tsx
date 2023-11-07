import { ChakraProvider } from "@chakra-ui/react"
import { ReactNode } from "react"
import { PandaProvider } from "../p2panda/contexts"

interface RedBugAppProps {
  children: ReactNode
}

const ENDPOINT = "http://localhost:2020/graphql"

export default function RedBugApp({ children }: RedBugAppProps) {
  return (
    <ChakraProvider>
      <PandaProvider endpoint={ENDPOINT}>{children}</PandaProvider>
    </ChakraProvider>
  )
}
