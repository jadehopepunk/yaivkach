import { FormControl, FormErrorMessage } from "@chakra-ui/react"
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

interface ValidatedFormControlProps {
  children: React.ReactNode
  fieldError?: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined
}

export function ValidatedFormControl({
  children,
  fieldError,
}: ValidatedFormControlProps) {
  return (
    <FormControl isInvalid={!!fieldError}>
      {children}
      {fieldError?.message && typeof fieldError.message === "string" && (
        <FormErrorMessage>{fieldError.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}
