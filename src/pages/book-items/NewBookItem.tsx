import { Box, Stack } from "@chakra-ui/react"
import { useState } from "react"
import BookSearch from "../books/components/BookSearch"
import BookSearchResults from "../books/components/BookSearchResults"
import { Doc } from "../../p2panda-apollo"
import { Book } from "../../data/document_types"

interface NewBookItemProps {
  bookActions: (book: Doc<Book>) => React.ReactNode
}

export default function NewBookItem({ bookActions }: NewBookItemProps) {
  const [query, setQuery] = useState("")

  return (
    <Stack>
      <BookSearch onSubmit={setQuery} />
      <Box mt={4}>
        {query && <BookSearchResults query={query} bookActions={bookActions} />}
      </Box>
    </Stack>
  )
}
