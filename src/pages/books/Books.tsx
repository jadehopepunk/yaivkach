import { gql, useQuery } from "@apollo/client"
import {
  Container,
  Heading,
  Button,
  VStack,
  Box,
  SimpleGrid,
  CardBody,
  Card,
  Stack,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { SCHEMA_IDS } from "../../data/schemas"
import BookList from "./components/BookList"

const BOOK_INDEX_QUERY = gql`
  query bookIndex {
    allBooks: all_${SCHEMA_IDS.book} {
      documents {
        meta {
          viewId
        }
        fields {
          title
          subtitle
          blurb
          isbn
          language
        }
      }
    }
  }
`

export default function Books() {
  const { loading, error, data } = useQuery(BOOK_INDEX_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  console.log(data, data)

  return (
    <Container padding={4}>
      <Stack spacing={4}>
        <Heading>Books</Heading>
        <Link to="/book-items/new">
          <Button colorScheme="blue">Add Book</Button>
        </Link>
        <Box>
          <BookList documents={data.allBooks.documents} />
        </Box>
      </Stack>
    </Container>
  )
}
