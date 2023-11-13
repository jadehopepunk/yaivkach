import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react"
import { Book } from "../../../data/document_types"

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Card>
      <CardBody>
        <Stack spacing="0">
          <Heading size="md">{book.title}</Heading>
          <Heading size="xs" color="gray.600">
            {book.subtitle}
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  )
}
