import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react"
import { Library } from "../../../data/document_types"

interface LibraryCardProps {
  library: Library
}

export default function LibraryCard({ library }: LibraryCardProps) {
  return (
    <Card>
      <CardBody>
        <Stack spacing="0">
          <Heading size="md">{library.name}</Heading>
          <Text>{library.short_description}</Text>
        </Stack>
      </CardBody>
    </Card>
  )
}
