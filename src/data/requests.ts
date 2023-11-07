import { DocumentViewId, Session } from "shirokuma"
import { BOOK_SCHEMA_ID } from "./schemas"
import { Book } from "./document_types"

export async function createBook(
  session: Session,
  book: Book
): Promise<DocumentViewId> {
  return await session.create(book, {
    schemaId: BOOK_SCHEMA_ID,
  })
}
