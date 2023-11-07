import { useForm } from "react-hook-form"
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
  InputGroup,
  InputLeftElement,
  Heading,
  Box,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { TextFieldError } from "../components/forms/errors"
import { Link } from "react-router-dom"

export default function NewBookItem() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values: any) {
    console.log("form submitted", values)
  }

  return (
    <Container py={4}>
      <Heading as="h2" size="lg" color="gray.600">
        Add book
      </Heading>
      <Box py={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.search}>
            <FormLabel htmlFor="search">Search</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                placeholder="isbn, title or author"
                {...register("search", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
            </InputGroup>
            <TextFieldError error={errors.search} />
          </FormControl>
          <Box mt={4}>
            <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
              Search
            </Button>{" "}
            or{" "}
            <Link to="/books/new">
              <Button>Create new book</Button>
            </Link>
          </Box>
        </form>
      </Box>
    </Container>
  )
}
