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
  Flex,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import capitalize from "capitalize"

interface CreatorFormValue {
  name: string
  role: string
}

type NewBookFormValues = FieldValues & {
  creators: Array<CreatorFormValue>
}

const creatorRoles = [
  "author",
  "contributor",
  "editor",
  "translator",
  "illustrator",
  "other",
]

export default function NewBook() {
  const methods = useForm<NewBookFormValues>({
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

  function onSubmit(values: any) {
    console.log("form submitted", values)
  }

  const { fields, append } = useFieldArray<NewBookFormValues>({
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
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Creator(s)</FormLabel>
                <Box>
                  <VStack align="flex-start">
                    {fields.map((field, index) => (
                      <InputGroup>
                        <Input {...register(`creators.${index}.name`)} />
                        <InputRightAddon>
                          <Select
                            variant="unstyled"
                            {...register(`creators.${index}.role`)}
                          >
                            {creatorRoles.map((roleName) => (
                              <option value={roleName}>
                                {capitalize(roleName)}
                              </option>
                            ))}
                          </Select>
                        </InputRightAddon>
                      </InputGroup>
                      // <Flex direction="row" key={field.id} width="100%">
                      //   <Flex flexGrow={1}>
                      //     <Input {...register(`creators.${index}.name`)} />
                      //   </Flex>
                      //   <Flex flexGrow={0}>
                      //     <Select {...register(`creators.${index}.role`)}>
                      //       {creatorRoles.map((roleName) => (
                      //         <option value={roleName}>
                      //           {capitalize(roleName)}
                      //         </option>
                      //       ))}
                      //     </Select>
                      //   </Flex>
                      // </Flex>
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
                <Textarea placeholder="Promotional/descriptive text, perhaps from the back cover." />
              </FormControl>
              <FormControl>
                <FormLabel>ISBN</FormLabel>
                <Input />
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
