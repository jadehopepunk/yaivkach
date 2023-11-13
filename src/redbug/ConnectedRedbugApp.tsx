import { ReactNode } from "react"
import { usePanda } from "../p2panda-apollo/hooks/usePanda"

interface ConnectedRedBugAppProps {
  children: ReactNode
}

const ENDPOINT = "http://localhost:2020/graphql"

export default function ConnectedRedBugApp({
  children,
}: ConnectedRedBugAppProps) {
  const { publicKey } = usePanda()

  console.log("public key", publicKey)

  return <>{children}</>
}
