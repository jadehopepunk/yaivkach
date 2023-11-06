import { useForm } from "react-hook-form"
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { TextFieldError } from "../components/Forms"

export default function NewBook() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <Container padding={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.search}>
          <FormLabel htmlFor="search">Search</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="isbn, title or author"
              {...register("search", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
            />
          </InputGroup>
          <TextFieldError error={errors.search} />
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}
