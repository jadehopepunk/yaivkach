import { FormProvider, useForm, FieldValues } from "react-hook-form"
import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react"
import { Library } from "../../../data/document_types"
import { Doc } from "../../../p2panda-apollo"
import { object, string } from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

type LibraryFormFieldValues = FieldValues & Library

export interface LibraryFormProps {
  onSubmit: (values: Library) => void
  initialLibrary?: Doc<Library>
}

export default function LibraryForm({
  onSubmit,
  initialLibrary,
}: LibraryFormProps) {
  const validationSchema = object().shape({
    name: string().required("Name is required"),
    short_description: string().required("Short description is required"),
    long_description: string(),
  })

  const methods = useForm<LibraryFormFieldValues>({
    values: initialLibrary?.fields,
    resolver: yupResolver(validationSchema),
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
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Name</FormLabel>
            <Input {...register("name")} />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.short_description}>
            <FormLabel>Short description</FormLabel>
            <Input {...register("short_description")} />
            <FormErrorMessage>
              {errors.short_description?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.long_description}>
            <FormLabel>Long description</FormLabel>
            <Textarea {...register("long_description")} />
            <FormErrorMessage>
              {errors.long_description?.message}
            </FormErrorMessage>
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
