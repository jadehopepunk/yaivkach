import { FormErrorMessage } from "@chakra-ui/react"
import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form"

export function TextFieldError({
  error,
}: {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined
}) {
  return error && error.message ? (
    <FormErrorMessage>{error.message.toString()}</FormErrorMessage>
  ) : null
}
