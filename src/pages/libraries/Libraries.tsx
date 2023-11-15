import { useQuery } from "@apollo/client"
import { Stack, Heading, Box, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import LibraryList from "./components/LibraryList"
import { QueryStatusIndicator } from "../../components/QueryStatusIndicator"
import { Library } from "../../data/document_types"
import { DocList } from "../../p2panda-apollo/types"
import { LIBRARY_INDEX_QUERY } from "../../data/queries"

export default function Libraries() {
  const librariesQuery = useQuery<{ libraries: DocList<Library> }>(
    LIBRARY_INDEX_QUERY
  )

  return (
    <QueryStatusIndicator query={librariesQuery}>
      {({ libraries }) => (
        <Stack spacing={4}>
          <Heading>Libraries</Heading>
          <Link to="/libraries/new">
            <Button colorScheme="blue">Create Library</Button>
          </Link>
          <Box>
            <LibraryList documents={libraries.documents} />
          </Box>
        </Stack>
      )}
    </QueryStatusIndicator>
  )
}
