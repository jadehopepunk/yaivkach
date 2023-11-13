import { Card, CardBody, SimpleGrid } from "@chakra-ui/react"
import { Doc, documentKey } from "../../../p2panda-apollo"
import { Book } from "../../../data/document_types"

interface BookListProps {
  documents: Array<Doc<Book>>
}

export default function BookList({ documents }: BookListProps) {
  return (
    <SimpleGrid columns={2} spacing={10}>
      {documents.map((document) => (
        <Card key={documentKey(document)}>
          <CardBody>{document.fields.title}</CardBody>
        </Card>
      ))}
    </SimpleGrid>
  )
}
