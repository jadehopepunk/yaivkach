import { gql, useQuery } from "@apollo/client"
import { Container, Stack, Heading, Box, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { SCHEMA_IDS } from "../../data/schemas"
import LibraryList from "./components/LibraryList"

const LIBRARY_INDEX_QUERY = gql`
  query librariesIndex {
    allLibraries: all_${SCHEMA_IDS.library} {
      documents {
        meta {
          viewId
        }
        fields {
          name
          short_description
        }
      }
    }
  }
`

export default function Libraries() {
  const { loading, error, data } = useQuery(LIBRARY_INDEX_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  console.log(data, data)

  return (
    <Container padding={4}>
      <Stack spacing={4}>
        <Heading>Libraries</Heading>
        <Link to="/libraries/new">
          <Button colorScheme="blue">Create Library</Button>
        </Link>
        <Box>
          <LibraryList documents={data.allLibraries.documents} />
        </Box>
      </Stack>
    </Container>
  )
}
