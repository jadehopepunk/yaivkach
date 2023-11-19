import { Box, Button, Heading, Stack } from "@chakra-ui/react"
import { useQuery } from "@apollo/client"
import { Library } from "../../data/document_types"
import { Doc } from "../../p2panda-apollo"
import { Link, useParams } from "react-router-dom"
import { QueryStatusIndicator } from "../../components/QueryStatusIndicator"
import { LIBRARY_SHOW_QUERY } from "../../data/queries"

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
            <Stack direction="row">
              <Link to={`/libraries/${library.meta.documentId}/edit`}>
                <Button>Edit</Button>
              </Link>
            </Stack>
            <Box>{library.fields.long_description}</Box>
          </>
        )}
      </QueryStatusIndicator>
    </Box>
  )
}
