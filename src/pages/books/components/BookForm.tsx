import {
  FormProvider,
  useFieldArray,
  useForm,
  FieldValues,
} from "react-hook-form"
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Heading,
  Box,
  VStack,
  Select,
  Textarea,
  IconButton,
  InputGroup,
  InputRightAddon,
  Stack,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import capitalize from "capitalize"
import langs from "langs"
import { object, string } from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ValidatedFormControl } from "../../../components/forms/errors"

export interface CreatorFormValue {
  name: string
  role: string
}

export interface BookFormValues {
  title: string
  subtitle?: string
  blurb?: string
  isbn?: string
  language?: string
  creators?: Array<CreatorFormValue>
}

type BookFormFieldValues = FieldValues & BookFormValues

const creatorRoles = [
  "author",
  "contributor",
  "editor",
  "translator",
  "illustrator",
  "other",
]

export interface BookFormProps {
  onSubmit: (values: BookFormValues) => void
}

export default function BookForm({ onSubmit }: BookFormProps) {
  const validationSchema = object().shape({
    title: string().required("Title is required"),
  })

  const methods = useForm<BookFormFieldValues>({
    defaultValues: {
      creators: [{ name: "", role: "author" }],
    },
    resolver: yupResolver(validationSchema),
  })
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    register,
  } = methods

  const { fields, append } = useFieldArray<BookFormFieldValues>({
    control,
    name: "creators",
  })

  return (
    <Box>
      <Heading as="h2" size="lg" color="gray.600">
        New book
      </Heading>
      <Box py={4}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4} align="stretch">
              <ValidatedFormControl fieldError={errors.title}>
                <FormLabel>Title</FormLabel>
                <Input {...register("title")} />
              </ValidatedFormControl>
              <ValidatedFormControl fieldError={errors.subtitle}>
                <FormLabel>Subtitle</FormLabel>
                <Input {...register("subtitle")} />
              </ValidatedFormControl>
              <FormControl>
                <FormLabel>Creator(s)</FormLabel>
                <Box>
                  <VStack align="flex-start">
                    {fields.map((field, index) => (
                      <InputGroup key={field.id}>
                        <Input {...register(`creators.${index}.name`)} />
                        <InputRightAddon>
                          <Select
                            variant="unstyled"
                            {...register(`creators.${index}.role`)}
                          >
                            {creatorRoles.map((roleName) => (
                              <option key={roleName} value={roleName}>
                                {capitalize(roleName)}
                              </option>
                            ))}
                          </Select>
                        </InputRightAddon>
                      </InputGroup>
                    ))}
                    <IconButton
                      icon={<AddIcon />}
                      onClick={append}
                      aria-label="Add creator"
                    />
                  </VStack>
                </Box>
              </FormControl>
              <ValidatedFormControl fieldError={errors.blurb}>
                <FormLabel>Blurb</FormLabel>
                <Textarea
                  {...register("blurb")}
                  placeholder="Promotional/descriptive text, perhaps from the back cover."
                />
              </ValidatedFormControl>
              <ValidatedFormControl fieldError={errors.isbn}>
                <FormLabel>ISBN</FormLabel>
                <Input {...register("isbn")} />
              </ValidatedFormControl>
              <ValidatedFormControl fieldError={errors.language}>
                <FormLabel>Language</FormLabel>
                <Select {...register("language")} placeholder="Select option">
                  {langs.all().map((lang) => (
                    <option key={lang[1]} value={lang[1]}>
                      {lang.name}
                    </option>
                  ))}
                </Select>
              </ValidatedFormControl>
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
