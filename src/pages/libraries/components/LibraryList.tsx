import { SimpleGrid } from "@chakra-ui/react"
import { Doc, documentKey } from "../../../p2panda-apollo"
import { Library } from "../../../data/document_types"
import LibraryCard from "./LibraryCard"

interface LibraryListProps {
  documents: Array<Doc<Library>>
}

export default function LibraryList({ documents }: LibraryListProps) {
  return (
    <SimpleGrid columns={2} spacing={10}>
      {documents.map((document) => (
        <LibraryCard key={documentKey(document)} library={document.fields} />
      ))}
    </SimpleGrid>
  )
}
