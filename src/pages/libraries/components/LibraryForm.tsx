import { FormProvider, useForm, FieldValues } from "react-hook-form"
import {
  Box,
  Stack,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react"
import { Library } from "../../../data/document_types"
import { Doc } from "../../../p2panda-apollo"
import { object, string } from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ValidatedFormControl } from "../../../components/forms/errors"

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
    register,
  } = methods

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4} align="stretch">
          <ValidatedFormControl fieldError={errors.name}>
            <FormLabel>Name</FormLabel>
            <Input {...register("name")} />
          </ValidatedFormControl>
          <ValidatedFormControl fieldError={errors.short_description}>
            <FormLabel>Short description</FormLabel>
            <Input {...register("short_description")} />
          </ValidatedFormControl>
          <ValidatedFormControl fieldError={errors.long_description}>
            <FormLabel>Long description</FormLabel>
            <Textarea {...register("long_description")} />
          </ValidatedFormControl>
          <Box>
            <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
              {initialLibrary ? "Update" : "Create"}
            </Button>
          </Box>
        </Stack>
      </form>
    </FormProvider>
  )
}
