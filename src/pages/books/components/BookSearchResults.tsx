import { useQuery } from "@apollo/client"
import { Book } from "../../../data/document_types"
import { BOOK_SEARCH_QUERY } from "../../../data/queries"
import { DocList } from "../../../p2panda-apollo/types"
import { QueryStatusIndicator } from "../../../components/QueryStatusIndicator"
import { Stack } from "@chakra-ui/react"

interface BookSearchResultsProps {
  query?: string
}

export default function BookSearchResults({ query }: BookSearchResultsProps) {
  const booksQuery = useQuery<{ books: DocList<Book> }>(BOOK_SEARCH_QUERY, {
    variables: {
      query: query,
    },
  })

  return (
    <QueryStatusIndicator query={booksQuery}>
      {({ books }) => (
        <Stack>
          {books.documents.map((book) => (
            <div key={book.meta.documentId}>{book.fields.title}</div>
          ))}
        </Stack>
      )}
    </QueryStatusIndicator>
  )
}
