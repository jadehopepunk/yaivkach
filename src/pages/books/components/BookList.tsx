import { SimpleGrid } from "@chakra-ui/react"
import { Doc, documentKey } from "../../../p2panda-apollo"
import { Book } from "../../../data/document_types"
import BookCard from "./BookCard"

interface BookListProps {
  documents: Array<Doc<Book>>
}

export default function BookList({ documents }: BookListProps) {
  return (
    <SimpleGrid columns={2} spacing={10}>
      {documents.map((document) => (
        <BookCard key={documentKey(document)} book={document.fields} />
      ))}
    </SimpleGrid>
  )
}
