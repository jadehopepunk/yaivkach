import { FormProvider, useForm, FieldValues } from "react-hook-form"
import {
  Container,
  Heading,
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react"
import { Library } from "../../../data/document_types"

type LibraryFormFieldValues = FieldValues & Library

export interface LibraryFormProps {
  onSubmit: (values: Library) => void
}

export default function LibraryForm({ onSubmit }: LibraryFormProps) {
  const methods = useForm<LibraryFormFieldValues>({})
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    register,
  } = methods

  return (
    <Box>
      <Heading as="h2" size="lg" color="gray.600">
        New library
      </Heading>
      <Box py={4}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4} align="stretch">
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input {...register("name")} />
              </FormControl>
              <FormControl>
                <FormLabel>Short description</FormLabel>
                <Input {...register("short_description")} />
              </FormControl>
              <FormControl>
                <FormLabel>Long description</FormLabel>
                <Textarea {...register("long_description")} />
              </FormControl>
              <Box>
                <Button
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Create
                </Button>
              </Box>
            </Stack>
          </form>
        </FormProvider>
      </Box>
    </Box>
  )
}
