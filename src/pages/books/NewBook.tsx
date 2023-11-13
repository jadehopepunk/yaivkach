import { useNavigate } from "react-router-dom"
import { createBook } from "../../data/requests"
import { usePanda } from "../../p2panda-apollo"
import BookForm, { BookFormValues } from "./components/BookForm"
import { useApolloClient } from "@apollo/client"

export default function NewBook() {
  const { session } = usePanda()
  const client = useApolloClient()
  let navigate = useNavigate()

  const handleSubmit = async (values: BookFormValues) => {
    console.log("form submitted", values)

    // TODO: Find a way to pass these values without having to de-structure and re-structure
    const { title, subtitle, blurb, isbn, language } = values
    const book = { title, subtitle, blurb, isbn, language }

    if (session) {
      const viewId = await createBook(session, book)
      console.log("viewId", viewId)
      await client.refetchQueries({ include: ["bookIndex"] })
      navigate("/books")
    } else {
      console.error("no P2Panda session, data not saved")
    }
  }

  console.log("session", session)

  return <BookForm onSubmit={handleSubmit} />
}
