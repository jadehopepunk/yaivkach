import { Box, Heading } from "@chakra-ui/react"
import { SCHEMA_IDS } from "../../data/schemas"
import { useQuery, gql } from "@apollo/client"
import { Library } from "../../data/document_types"
import { Doc } from "../../p2panda-apollo"
import { useParams } from "react-router-dom"

const LIBRARY_SHOW_QUERY = gql`
  query libraryShow($documentId: String!) {
    getLibrary: ${SCHEMA_IDS.library}(id: $documentId) {
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

  const { loading, error, data } = useQuery(LIBRARY_SHOW_QUERY, {
    variables: {
      documentId: libraryId,
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data.getLibrary) return <p>404: Not found</p>

  const library: Doc<Library> = data.getLibrary
  return (
    <Box>
      <Heading as="h1">{library.fields.name}</Heading>
    </Box>
  )
}
