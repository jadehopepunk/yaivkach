import { Box, Heading } from "@chakra-ui/react"
import NewBookItem from "./NewBookItem"
import { useQuery } from "@apollo/client"
import { LIBRARY_SHOW_QUERY } from "../../data/queries"
import { Doc } from "../../p2panda-apollo"
import { Library } from "../../data/document_types"
import { useParams } from "react-router-dom"
import { QueryStatusIndicator } from "../../components/QueryStatusIndicator"

export default function NewLibraryBookItem() {
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
          <Heading as="h2">Add book</Heading>
          <Heading as="h3" size="md">
            {library.fields.name}
          </Heading>
          <Box mt={4}>
            <NewBookItem />
          </Box>
        </>
      )}
    </QueryStatusIndicator>
  )
}
