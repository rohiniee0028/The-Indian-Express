import { Box, Button,  Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, ListItem,Text, UnorderedList, useDisclosure, VStack } from "@chakra-ui/react"
import React from "react";
import { BsList } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import styles from "./Navbar.module.css";

function Sections() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('top')

  return (
    <>
      <Button _hover={{ bg: "#EFEFEF" }} bg="#EFEFEF" onClick={onOpen} gap="10px">
        <BsList />
        Section
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='2px' mb="5">
            <Box w="90%" margin="auto">
              <Flex justify="space-between" alignItems="center" >
                <Box>
                  <ImCross onClick={onClose} style={{ cursor: "pointer" }} />
                </Box>
                <Box style={{ display: "flex", gap: "10px" }}>
                  <Button bg="#FFB900" fontSize="14px" colorScheme="#FFB900" color="black">SUBSCRIBE</Button>
                  <Button bg="#3B4057" color="white" fontSize="14px" colorScheme="#3B4057">Sign In</Button>
                </Box>
              </Flex>
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <Box w="80%" margin="auto">
              <HStack justify="space-between" lineHeight="3rem">
                <VStack>
                  <UnorderedList style={{listStyle:"none",cursor:"pointer"}}>
                    <ListItem>e-paper</ListItem>
                    <ListItem>Premium</ListItem>
                    <ListItem>India</ListItem>
                    <ListItem>Cities</ListItem>
                  </UnorderedList>
                </VStack>
                <VStack>
                  <UnorderedList style={{listStyle:"none" ,cursor:"pointer"}}>
                    <ListItem>Opinion</ListItem>
                    <ListItem>Political Pulse</ListItem>
                    <ListItem>Explained</ListItem>
                    <ListItem>Science</ListItem>
                  </UnorderedList>
                </VStack>
                <VStack>
                  <UnorderedList style={{listStyle:"none",cursor:"pointer"}}>
                    <ListItem>Sports</ListItem>
                    <ListItem>World</ListItem>
                    <ListItem>Business</ListItem>
                    <ListItem>Entertainment</ListItem>
                  </UnorderedList>
                </VStack>
                <VStack>
                  <UnorderedList style={{listStyle:"none",cursor:"pointer"}}>
                    <ListItem>Health</ListItem>
                    <ListItem>Lifestyle</ListItem>
                    <ListItem>Technology</ListItem>
                    <ListItem>Education</ListItem>
                  </UnorderedList>
                </VStack>
                <VStack>
                  <UnorderedList style={{listStyle:"none",cursor:"pointer"}}>
                    <ListItem>Eye</ListItem>
                    <ListItem>Trending</ListItem>
                    <ListItem>Investigations</ListItem>
                    <ListItem>Newsletters</ListItem>
                  </UnorderedList>
                </VStack>
                <VStack>
                  <UnorderedList style={{listStyle:"none",cursor:"pointer"}}>
                    <ListItem>Photos</ListItem>
                    <ListItem>Videos</ListItem>
                    <ListItem>Audio</ListItem>
                    <ListItem>Web Stories</ListItem>
                  </UnorderedList>
                </VStack>
              </HStack>
            </Box>
          </DrawerBody>
          <DrawerHeader borderTopWidth='2px' mt="5">
            <Box  p="10px 0px " mt="-3" >
              <Flex gap="20px" justifyContent="center" alignItems="center" className={styles.trending}>
                <Text color="#D70000" fontSize="14px" fontWeight="500">TRENDING</Text>
                <Box _hover={{ color: "#D70000" }} bg="#EFEFEF" p="2px 12px" borderRadius="5px" fontSize="13px">Crossword $ Sudoku</Box>
                <Box _hover={{ color: "#D70000" }} bg="#EFEFEF" p="2px 12px" borderRadius="5px" fontSize="13px">UPSC special</Box>
                <Box _hover={{ color: "#D70000" }} bg="#EFEFEF" p="2px 12px" borderRadius="5px" fontSize="13px">Everyday Explainers</Box>
                <Box _hover={{ color: "#D70000" }} bg="#EFEFEF" p="2px 12px" borderRadius="5px" fontSize="13px">Health Specials</Box>
                <Box _hover={{ color: "#D70000" }} bg="#EFEFEF" p="2px 12px" borderRadius="5px" fontSize="13px">Academic Counselling</Box>
                <Box _hover={{ color: "#D70000" }} bg="#EFEFEF" p="2px 12px" borderRadius="5px" fontSize="13px">Follow Authors</Box>
                <Box _hover={{ color: "#D70000" }} bg="#EFEFEF" p="2px 12px" borderRadius="5px" fontSize="13px">Cricket</Box>
              </Flex>
            </Box>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sections;