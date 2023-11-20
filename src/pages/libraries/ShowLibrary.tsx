import { Box, Button, Heading, Stack } from "@chakra-ui/react"
import { useQuery } from "@apollo/client"
import { Library } from "../../data/document_types"
import { Doc } from "../../p2panda-apollo"
import { Link, useParams } from "react-router-dom"
import { QueryStatusIndicator } from "../../components/QueryStatusIndicator"
import { LIBRARY_SHOW_QUERY } from "../../data/queries"
import LibraryBooks from "./components/LibraryBooks"

export default function ShowLibrary() {
  let { libraryId } = useParams()

  const libraryQuery = useQuery<{ library: Doc<Library> }>(LIBRARY_SHOW_QUERY, {
    variables: {
      documentId: libraryId,
    },
  })

  return (
    <QueryStatusIndicator query={libraryQuery}>
      {({ library }) => (
        <>
          <Heading as="h1">{library.fields.name}</Heading>
          <Stack direction="row">
            <Link to={`/libraries/${library.meta.documentId}/edit`}>
              <Button>Edit</Button>
            </Link>
            <Link to={`/libraries/${library.meta.documentId}/book-items/new`}>
              <Button>Add book</Button>
            </Link>
          </Stack>
          <Box mt={4}>{library.fields.long_description}</Box>
          <Box mt={4}>
            <LibraryBooks library={library} />
          </Box>
        </>
      )}
    </QueryStatusIndicator>
  )
}
