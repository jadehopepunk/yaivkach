import { Box, Heading } from "@chakra-ui/react"
import { SCHEMA_IDS } from "../../data/schemas"
import { useQuery, gql } from "@apollo/client"
import { Library } from "../../data/document_types"
import { Doc } from "../../p2panda-apollo"

const LIBRARY_SHOW_QUERY = gql`
  query libraryShow {
    getLibrary: ${SCHEMA_IDS.library}(id: "002024449d9178c30cac390e66640371f515d41c07b0aa526b70f72fe44b84a2802e") {
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
  const { loading, error, data } = useQuery(LIBRARY_SHOW_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data.getLibrary) return <p>404: Not found</p>

  console.log("data", data)
  const library: Doc<Library> = data.getLibrary
  return (
    <Box>
      <Heading as="h1">{library.fields.name}</Heading>
    </Box>
  )
}
