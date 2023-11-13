import { Container, Stack, Heading } from "@chakra-ui/react"

export default function Libraries() {
  // const { loading, error, data } = useQuery(GET_BOOKS)

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error : {error.message}</p>

  // console.log(data, data)

  return (
    <Container padding={4}>
      <Stack spacing={4}>
        <Heading>Libraries</Heading>
      </Stack>
    </Container>
  )
}
