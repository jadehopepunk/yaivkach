import { AddIcon } from "@chakra-ui/icons"
import {
  InputGroup,
  Input,
  InputRightAddon,
  VStack,
  IconButton,
  Box,
} from "@chakra-ui/react"
import { useFieldArray, useFormContext } from "react-hook-form"

interface MultiTextInputProps {
  addLabel: string
}

export default function MultiTextInput({ addLabel }: MultiTextInputProps) {
  const { fields, append, remove } = useFieldArray({
    name: "foobar",
  })
  const { register } = useFormContext()

  return (
    <Box>
      <VStack align="flex-start">
        {fields.map((field, index) => (
          <Input
            key={field.id}
            placeholder="Author, editor, etc..."
            {...register(`foobar.${index}.value`)}
          />
        ))}
        <IconButton icon={<AddIcon />} onClick={append} aria-label={addLabel} />
      </VStack>
    </Box>
  )
}
