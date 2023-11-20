import { useQuery } from "@apollo/client"
import { Book } from "../../../data/document_types"
import { BOOK_SEARCH_QUERY } from "../../../data/queries"
import { Doc, DocList } from "../../../p2panda-apollo/types"
import { QueryStatusIndicator } from "../../../components/QueryStatusIndicator"
import { Stack } from "@chakra-ui/react"
import BookCard from "./BookCard"

interface BookSearchResultsProps {
  query?: string
  bookActions?: (book: Doc<Book>) => React.ReactNode
}

export default function BookSearchResults({
  query,
  bookActions,
}: BookSearchResultsProps) {
  const booksQuery = useQuery<{ books: DocList<Book> }>(BOOK_SEARCH_QUERY, {
    variables: {
      query: query,
    },
  })

  return (
    <QueryStatusIndicator query={booksQuery}>
      {({ books }) => (
        <Stack>
          {books.documents.map((book: Doc<Book>) => (
            <BookCard key={book.meta.documentId} book={book.fields}>
              {bookActions && bookActions(book)}
            </BookCard>
          ))}
        </Stack>
      )}
    </QueryStatusIndicator>
  )
}
