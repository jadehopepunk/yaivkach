import { Box, Stack } from "@chakra-ui/react"
import { useState } from "react"
import BookSearch from "../books/components/BookSearch"
import BookSearchResults from "../books/components/BookSearchResults"

export default function NewBookItem() {
  const [query, setQuery] = useState("")

  return (
    <Stack>
      <BookSearch onSubmit={setQuery} />
      <Box mt={4}>{query && <BookSearchResults query={query} />}</Box>
    </Stack>
  )
}
