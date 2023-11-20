import { Box, Stack } from "@chakra-ui/react"
import { useState } from "react"
import BookSearch from "./components/BookSearch"
import BookSearchResults from "./components/BookSearchResults"

export default function NewBookItem() {
  const [query, setQuery] = useState("")

  return (
    <Stack>
      <BookSearch onSubmit={setQuery} />
      <Box mt={4}>
        <BookSearchResults query={query} />
      </Box>
    </Stack>
  )
}
