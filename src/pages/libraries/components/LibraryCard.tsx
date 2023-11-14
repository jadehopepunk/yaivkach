import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react"
import { Library } from "../../../data/document_types"
import { Doc } from "../../../p2panda-apollo"
import { Link } from "react-router-dom"

interface LibraryCardProps {
  library: Doc<Library>
}

export default function LibraryCard({ library }: LibraryCardProps) {
  const { fields, meta } = library

  return (
    <Card>
      <CardBody>
        <Stack spacing="0">
          <Heading size="md">{fields.name}</Heading>
          <Text>{fields.short_description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Link to={`/libraries/${meta.documentId}`}>
          <Button>Browse</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
