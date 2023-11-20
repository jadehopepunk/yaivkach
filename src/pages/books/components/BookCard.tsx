import { Card, CardBody, CardFooter, Heading, Stack } from "@chakra-ui/react"
import { Book } from "../../../data/document_types"

interface BookCardProps {
  book: Book
  children?: React.ReactNode
}

export default function BookCard({ book, children }: BookCardProps) {
  return (
    <Card direction="row">
      <CardBody>
        <Stack spacing="0">
          <Heading size="md">{book.title}</Heading>
          <Heading size="xs" color="gray.600">
            {book.subtitle}
          </Heading>
        </Stack>
      </CardBody>
      {children && <CardFooter>{children}</CardFooter>}
    </Card>
  )
}
