import { DocumentViewId, Session } from "shirokuma"
import { SCHEMA_IDS } from "./schemas"
import { Book, BookCreator } from "./document_types"

type SingularDocumentViewId = string

// TODO: This shouldn't be needed. I've filed a PR with Shirokuma to try
//       and remove it: https://github.com/p2panda/shirokuma/pull/29
function expectSingleId(
  input: DocumentViewId | undefined
): SingularDocumentViewId {
  if (Array.isArray(input)) {
    console.error("Array of document ids", input)
    throw new Error("Received an array when we expect a single document id")
  }

  if (input == undefined) {
    throw new Error(
      "Received an undefined value when we expect a single document id"
    )
  }

  return input
}

export async function createBookCreator(
  session: Session,
  bookCreator: BookCreator
): Promise<SingularDocumentViewId> {
  return expectSingleId(
    await session.create(bookCreator, { schemaId: SCHEMA_IDS.book_creator })
  )
}

export async function createBook(
  session: Session,
  book: Book
): Promise<SingularDocumentViewId> {
  // const fields = new OperationFields()
  // fields.insert("event", "relation", reaction.event)

  return expectSingleId(
    await session.create(book, { schemaId: SCHEMA_IDS.book })
  )
}
