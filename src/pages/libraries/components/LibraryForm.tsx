import { FormProvider, useForm, FieldValues } from "react-hook-form"
import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react"
import { Library } from "../../../data/document_types"
import { Doc } from "../../../p2panda-apollo"

type LibraryFormFieldValues = FieldValues & Library

export interface LibraryFormProps {
  onSubmit: (values: Library) => void
  initialLibrary?: Doc<Library>
}

export default function LibraryForm({
  onSubmit,
  initialLibrary,
}: LibraryFormProps) {
  const methods = useForm<LibraryFormFieldValues>({
    values: initialLibrary?.fields,
  })
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    register,
  } = methods

  return (
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
            <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
              Create
            </Button>
          </Box>
        </Stack>
      </form>
    </FormProvider>
  )
}
