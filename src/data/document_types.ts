export type SingularDocumentViewId = string

export type BookCreator = {
  name: string
  role: string
}

export type Book = {
  title: string
  subtitle?: string
  blurb?: string
  isbn?: string
  language?: string
}

export type Library = {
  name: string
  short_description: string
  long_description?: string
}

export type BookItem = {
  bookId: SingularDocumentViewId
  libraryId: SingularDocumentViewId
}
