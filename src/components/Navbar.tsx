"use client"

import { Box, Flex, useColorModeValue, Stack, Button } from "@chakra-ui/react"
import ColourModeSwitcher from "./ColorModeSwitcher.tsx"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Stack direction="row" alignItems="center">
            <Box>Book Sharing</Box>
            <Box>
              <Link to="/books">
                <Button colorScheme="blue" variant="ghost">
                  Books
                </Button>
              </Link>
              <Link to="/libraries">
                <Button colorScheme="blue" variant="ghost">
                  Libraries
                </Button>
              </Link>
            </Box>
          </Stack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <ColourModeSwitcher />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
