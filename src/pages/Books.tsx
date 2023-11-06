import { Container, Heading, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";

export default function Books() {

  return (
    <Container padding={4}>
      <Heading>Books</Heading>
      <Link to="/books/new"><Button colorScheme='blue'>Add Book</Button></Link>
    </Container>
  )
}
