import { useNavigate } from "react-router-dom"
import { createLibrary } from "../../data/requests"
import { usePanda } from "../../p2panda-apollo"
import { useApolloClient } from "@apollo/client"
import LibraryForm from "./components/LibraryForm"
import { Library } from "../../data/document_types"

export default function NewLibrary() {
  const { session } = usePanda()
  const client = useApolloClient()
  let navigate = useNavigate()

  const handleSubmit = async (values: Library) => {
    console.log("form submitted", values)

    if (session) {
      const viewId = await createLibrary(session, values)
      console.log("viewId", viewId)
      await client.refetchQueries({ include: ["libraryIndex"] })
      navigate("/libraries")
    } else {
      console.error("no P2Panda session, data not saved")
    }
  }

  console.log("session", session)

  return <LibraryForm onSubmit={handleSubmit} />
}
