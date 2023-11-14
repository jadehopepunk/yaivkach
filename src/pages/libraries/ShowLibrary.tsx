import { Box, Heading } from "@chakra-ui/react"
import { SCHEMA_IDS } from "../../data/schemas"
import { useQuery, gql } from "@apollo/client"
import { Library } from "../../data/document_types"
import { Doc } from "../../p2panda-apollo"
import { useParams } from "react-router-dom"
import { QueryStatusIndicator } from "../../components/QueryStatusIndicator"

const LIBRARY_SHOW_QUERY = gql`
  query libraryShow($documentId: String!) {
    library: ${SCHEMA_IDS.library}(id: $documentId) {
      meta {
        documentId
      }
      fields {
        name
        short_description
        long_description
      }
    }
  }
`

export default function ShowLibrary() {
  let { libraryId } = useParams()

  const libraryQuery = useQuery<{ library: Doc<Library> }>(LIBRARY_SHOW_QUERY, {
    variables: {
      documentId: libraryId,
    },
  })

  return (
    <Box>
      <QueryStatusIndicator query={libraryQuery}>
        {({ library }) => (
          <>
            <Heading as="h1">{library.fields.name}</Heading>
            <Box>{library.fields.long_description}</Box>
          </>
        )}
      </QueryStatusIndicator>
    </Box>
  )
}
