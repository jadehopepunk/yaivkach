import { Box, Button, Heading } from "@chakra-ui/react"
import NewBookItem from "./NewBookItem"
import { useApolloClient, useQuery } from "@apollo/client"
import { LIBRARY_SHOW_QUERY } from "../../data/queries"
import { Doc, usePanda } from "../../p2panda-apollo"
import { Book, BookItem, Library } from "../../data/document_types"
import { useNavigate, useParams } from "react-router-dom"
import { QueryStatusIndicator } from "../../components/QueryStatusIndicator"
import { createBookItem } from "../../data/requests"

export default function NewLibraryBookItem() {
  const { session } = usePanda()
  const client = useApolloClient()
  let navigate = useNavigate()

  let { libraryId } = useParams()

  const libraryQuery = useQuery<{ library: Doc<Library> }>(LIBRARY_SHOW_QUERY, {
    variables: {
      documentId: libraryId,
    },
  })

  const addBookToLibrary = async (book: Doc<Book>, library: Doc<Library>) => {
    console.log("add book", library.fields.name, book)

    const bookItem: BookItem = {
      bookId: book.meta.documentId,
      libraryId: library.meta.documentId,
    }

    if (session) {
      createBookItem(session, bookItem)
      await client.refetchQueries({ include: ["bookIndex"] })
      navigate(`/libraries/${library.meta.documentId}`)
    } else {
      console.error("no P2Panda session, data not saved")
    }
  }

  return (
    <QueryStatusIndicator query={libraryQuery}>
      {({ library }) => (
        <>
          <Heading as="h2">Add book</Heading>
          <Heading as="h3" size="md">
            {library.fields.name}
          </Heading>
          <Box mt={4}>
            <NewBookItem
              bookActions={(book) => (
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => addBookToLibrary(book, library)}
                >
                  Add
                </Button>
              )}
            />
          </Box>
        </>
      )}
    </QueryStatusIndicator>
  )
}
