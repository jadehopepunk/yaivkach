import { Box, Stack } from "@chakra-ui/react"
import { Doc } from "../../../p2panda-apollo"
import { LIBRARY_BOOK_ITEMS_QUERY } from "../../../data/queries"
import { Library } from "../../../data/document_types"
import { useQuery } from "@apollo/client"
import { QueryStatusIndicator } from "../../../components/QueryStatusIndicator"
import { DocList } from "../../../p2panda-apollo/types"
import BookCard from "../../books/components/BookCard"

interface LibraryBooksProps {
  library: Doc<Library>
}

export default function LibraryBooks({ library }: LibraryBooksProps) {
  const libraryQuery = useQuery<{ book_items: DocList<any> }>(
    LIBRARY_BOOK_ITEMS_QUERY,
    {
      variables: {
        libraryId: library.meta.documentId,
      },
    }
  )

  return (
    <QueryStatusIndicator query={libraryQuery}>
      {({ book_items }) => (
        <Stack>
          {book_items.documents.map((bookItem) => (
            <BookCard
              key={bookItem.meta.documentId}
              book={bookItem.fields.book.fields}
            />
          ))}
        </Stack>
      )}
    </QueryStatusIndicator>
  )
}
