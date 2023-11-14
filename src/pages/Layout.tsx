import { Box, Container } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <Box>
      <Navbar />
      <Container padding={4}>
        <Outlet />
      </Container>
    </Box>
  )
}
