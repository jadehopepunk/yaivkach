import { FormProvider, useForm } from "react-hook-form"
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
  Heading,
  Box,
  VStack,
  Select,
  Textarea,
} from "@chakra-ui/react"
import MultiTextInput from "../components/forms/MultiTextInput"

export default function NewBook() {
  const methods = useForm({
    defaultValues: {
      foobar: ["adrf"],
    },
  })
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods

  function onSubmit(values: any) {
    console.log("form submitted", values)
  }

  return (
    <Container py={4}>
      <Heading as="h2" size="lg" color="gray.600">
        New book
      </Heading>
      <Box py={4}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4} align="stretch">
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Creator(s)</FormLabel>
                <MultiTextInput addLabel="Add creator" />
              </FormControl>
              <FormControl>
                <FormLabel>Blurb</FormLabel>
                <Textarea />
              </FormControl>
              <FormControl>
                <FormLabel>ISBN</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Format</FormLabel>
                <Select placeholder="Select option">
                  <option value="option1">Paper book</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Language</FormLabel>
                <Select placeholder="Select option">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>
              <Box>
                <Button
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Create
                </Button>{" "}
              </Box>
            </VStack>
          </form>
        </FormProvider>
      </Box>
    </Container>
  )
}
