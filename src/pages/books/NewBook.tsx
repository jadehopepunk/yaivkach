import BookForm, { BookFormValues } from "./components/BookForm"

export default function NewBook() {
  const handleSubmit = (values: BookFormValues) => {
    console.log("form submitted", values)
  }

  return <BookForm onSubmit={handleSubmit} />
}
