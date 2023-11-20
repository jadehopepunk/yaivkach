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

export const BOOK_SEARCH_QUERY = gql`
  query bookSearch($query: String!) {
    books: all_${SCHEMA_IDS.book}(
      filter: { title: { contains: $query } }
    ) {
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

export const LIBRARY_BOOK_ITEMS_QUERY = gql`
  query libraryBookItems($libraryId: String!) {
    book_items: all_${SCHEMA_IDS.book_item}(
      filter: { library: { eq: $libraryId } }
    ) {
      documents {
        meta {
          documentId
          viewId
        }
        fields {
          book {
            fields {
              title
              subtitle
            }
          }
        }
      }
    }
  }
`
