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
  Container,
  Heading,
  Box,
  VStack,
  Select,
  Textarea,
  IconButton,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import capitalize from "capitalize"
import langs from "langs"

export interface CreatorFormValue {
  name: string
  role: string
}

export interface BookFormValues {
  title: string
  blurb: string
  isbn: string
  language: string
  creators: Array<CreatorFormValue>
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
  const methods = useForm<BookFormFieldValues>({
    defaultValues: {
      creators: [{ name: "", role: "author" }],
    },
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
                <Input {...register("title")} />
              </FormControl>
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
              <FormControl>
                <FormLabel>Blurb</FormLabel>
                <Textarea
                  {...register("blurb")}
                  placeholder="Promotional/descriptive text, perhaps from the back cover."
                />
              </FormControl>
              <FormControl>
                <FormLabel>ISBN</FormLabel>
                <Input {...register("isbn")} />
              </FormControl>
              <FormControl>
                <FormLabel>Language</FormLabel>
                <Select {...register("language")} placeholder="Select option">
                  {langs.all().map((lang) => (
                    <option key={lang[1]} value={lang[1]}>
                      {lang.name}
                    </option>
                  ))}
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
