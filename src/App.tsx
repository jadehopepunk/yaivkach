import { Box } from "@chakra-ui/react"
import Books from "./pages/Books.tsx"
import Navbar from "./components/Navbar.tsx"
import { usePanda } from "./p2panda/hooks/usePanda"

function App() {
  const { publicKey } = usePanda()

  return (
    <Box>
      <Navbar />
      <Books />
    </Box>
  )
}

export default App
