import { useQuery } from "@apollo/client"
import { Heading, Button, Box, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import BookList from "./components/BookList"
import { QueryStatusIndicator } from "../../components/QueryStatusIndicator"
import { DocList } from "../../p2panda-apollo/types"
import { Book } from "../../data/document_types"
import { BOOK_INDEX_QUERY } from "../../data/queries"

export default function Books() {
  const booksQuery = useQuery<{ books: DocList<Book> }>(BOOK_INDEX_QUERY)

  return (
    <QueryStatusIndicator query={booksQuery}>
      {({ books }) => (
        <Stack spacing={4}>
          <Heading>Books</Heading>
          <Link to="/books/new">
            <Button colorScheme="blue">Add Book</Button>
          </Link>
          <Box>
            <BookList documents={books.documents} />
          </Box>
        </Stack>
      )}
    </QueryStatusIndicator>
  )
}
