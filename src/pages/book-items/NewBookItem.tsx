import { Box, Stack } from "@chakra-ui/react"
import BookSearch from "./components/BookSearch"
import BookSearchResults from "./components/BookSearchResults"

export default function NewBookItem() {
  function onSubmit(query: string) {
    console.log("form submitted", query)
  }

  return (
    <Stack>
      <BookSearch onSubmit={onSubmit} />
      <Box mt={4}>
        <BookSearchResults />
      </Box>
    </Stack>
  )
}
