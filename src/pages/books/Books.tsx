import { gql, useQuery } from "@apollo/client"
import { Container, Heading, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { BOOK_SCHEMA_ID } from "../../data/schemas"

const GET_BOOKS = gql`
  {
    all_${BOOK_SCHEMA_ID} {
      documents {
        meta {
          viewId
        }
        fields {
          title
          blurb
          isbn
          language
        }
      }
    }
  }
`

export default function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  console.log(data, data)

  return (
    <Container padding={4}>
      <Heading>Books</Heading>
      <Link to="/book-items/new">
        <Button colorScheme="blue">Add Book</Button>
      </Link>
    </Container>
  )
}
