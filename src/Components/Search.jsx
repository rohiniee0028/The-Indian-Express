import { SearchIcon } from "@chakra-ui/icons";
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
export const Search=()=>{

  const navigate = useNavigate();

  const goToSearch=()=>{
     navigate("/sports");
  }

    const {
        isOpen: Search,
        onOpen: openSearch,
        onClose: CloseSearch,
      } = useDisclosure();
      const initialRef = useRef(null);
      const finalRef = useRef(null);

    return (
        <div className={style.SearchIcondiv}>
        <Button onClick={openSearch} colorScheme="black" color="black">
          <SearchIcon w={5} h={5} />
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={Search}
          onClose={CloseSearch}
        >
          <ModalOverlay />
          <ModalContent top="28%">
            <ModalCloseButton />
            <ModalBody pb={6}>
              <div className={style.searchModal}>
                <Input
                  ref={initialRef}
                  placeholder="Search..."
                  focusBorderColor="black"
                  borderRadius="none"
                />
                <Button bg="black" colorScheme="white" borderRadius="none" onClick={goToSearch}>
                   SEARCH
                </Button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    )
}