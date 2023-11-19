import { useNavigate, useParams } from "react-router-dom"
import { Doc, usePanda } from "../../p2panda-apollo"
import { useApolloClient, useQuery } from "@apollo/client"
import LibraryForm from "./components/LibraryForm"
import { Library } from "../../data/document_types"
import { Box, Heading } from "@chakra-ui/react"
import { LIBRARY_SHOW_QUERY } from "../../data/queries"
import { QueryStatusIndicator } from "../../components/QueryStatusIndicator"
import { updateLibrary } from "../../data/requests"
import { DocumentViewId } from "shirokuma"

export default function EditLibrary() {
  let { libraryId } = useParams()

  const libraryQuery = useQuery<{ library: Doc<Library> }>(LIBRARY_SHOW_QUERY, {
    variables: {
      documentId: libraryId,
    },
  })

  const { session } = usePanda()
  const client = useApolloClient()
  let navigate = useNavigate()

  const handleSubmit = async (values: Library, viewId: DocumentViewId) => {
    console.log("form submitted", values)

    // TODO: Find a way to pass these values without having to de-structure and re-structure
    const { name, short_description, long_description } = values
    const library = { name, short_description, long_description }

    if (session) {
      console.log("updating library", library, viewId)

      await updateLibrary(session, library, viewId)
      await client.refetchQueries({ include: ["libraryIndex"] })
      navigate("/libraries")
    } else {
      console.error("no P2Panda session, data not saved")
    }
  }

  return (
    <Box>
      <QueryStatusIndicator query={libraryQuery}>
        {({ library }) => (
          <Box>
            <Heading as="h2" size="lg" color="gray.600">
              Edit library
            </Heading>
            <Box py={4}>
              <LibraryForm
                onSubmit={(values) => handleSubmit(values, library.meta.viewId)}
                initialLibrary={library}
              />
            </Box>
          </Box>
        )}
      </QueryStatusIndicator>
    </Box>
  )
}
