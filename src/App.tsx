import { Box } from "@chakra-ui/react"
import Navbar from "./components/Navbar.tsx"
import { usePanda } from "./p2panda/hooks/usePanda"
import { Outlet } from "react-router-dom";

function App() {
  const { publicKey } = usePanda()

  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  )
}

export default App
