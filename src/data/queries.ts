import { gql } from "@apollo/client"
import { SCHEMA_IDS } from "./schemas"

export const LIBRARY_SHOW_QUERY = gql`
  query libraryShow($documentId: String!) {
    library: ${SCHEMA_IDS.library}(id: $documentId) {
      meta {
        documentId
        viewId
      }
      fields {
        name
        short_description
        long_description
      }
    }
  }
`

export const LIBRARY_INDEX_QUERY = gql`
  query libraryIndex {
    libraries: all_${SCHEMA_IDS.library} {
      documents {
        meta {
          documentId
          viewId
        }
        fields {
          name
          short_description
        }
      }
    }
  }
`

export const BOOK_INDEX_QUERY = gql`
  query bookIndex {
    books: all_${SCHEMA_IDS.book} {
      documents {
        meta {
          documentId
          viewId
        }
        fields {
          title
          subtitle
          blurb
          isbn
          language
        }
      }
    }
  }
`
