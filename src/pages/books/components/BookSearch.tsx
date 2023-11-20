import { FieldValues, useForm } from "react-hook-form"
import {
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Box,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import { ValidatedFormControl } from "../../../components/forms/errors"
import { object, string } from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

type SearchValues = FieldValues & {
  query: string
}

type SearchFieldValues = FieldValues & SearchValues

interface BookSearchProps {
  onSubmit: (query: string) => void
}

export default function BookSearch({ onSubmit }: BookSearchProps) {
  const validationSchema = object().shape({
    query: string().required("Search query is required"),
  })

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SearchFieldValues>({ resolver: yupResolver(validationSchema) })

  const onFormSubmit = ({ query }: SearchValues) => {
    onSubmit(query)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <ValidatedFormControl fieldError={errors.search}>
        <FormLabel htmlFor="search">Search</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="currently only by title, case sensitive"
            {...register("query")}
          />
        </InputGroup>
      </ValidatedFormControl>
      <Box mt={4}>
        <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
          Search
        </Button>{" "}
        or{" "}
        <Link to="/books/new">
          <Button>Create new book</Button>
        </Link>
      </Box>
    </form>
  )
}
