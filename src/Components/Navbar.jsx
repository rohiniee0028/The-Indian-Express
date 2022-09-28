import { Box, Button, Container, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { BsList, BsSearch } from "react-icons/bs";
import { FaEnvelopeOpenText, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import SimpleImageSlider from "react-simple-image-slider";
import styles from "./Navbar.module.css";
import Sections from "./Sections";

export const Navbar = () => {

    const images = [
        { url: "https://tpc.googlesyndication.com/simgad/12692791964622314734" },
        { url: "https://tpc.googlesyndication.com/simgad/12692791964622314734" },
        { url: "images/3.jpg" },
    ];
    // const ImageSlider = () => {
    //     return (
    //         <div>
    //             <SimpleImageSlider
    //                 width={896}
    //                 height={504}
    //                 images={images}
    //                 showBullets={true}
    //                 showNavs={true}
    //             />
    //         </div>
    //     );
    // }

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const x = today.toUTCString()
    // console.log(x)

    return (
        <Container maxW='90%' mt="10px" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Flex display="flex" gap="15px" alignItems="center">
                    <Box >
                       <Sections />
                    </Box>
                    <Box bg="#EFEFEF" px=".75rem" py=".7rem" borderRadius="5px">
                        <BsSearch />
                    </Box>
                </Flex>
                <Box fontSize="13px" className={styles.language}>
                    <b>ENGLISH</b> | தமிழ் | বাংলা | മലയാളം | हिंदी |मराठी
                </Box>
                <Flex alignItems="center" gap="15px" className={styles.icon}>
                    <Box bg="#EFEFEF" px="0.5rem" py=".5rem" borderRadius="5px">
                        <Flex alignItems="center" gap="5px">Newsletter <FaEnvelopeOpenText /> </Flex>
                    </Box>
                    <Flex gap="15px" color="gray">
                        <FaFacebook />
                        <FaTwitter />
                        <FaYoutube />
                        <FaInstagram />
                    </Flex>
                </Flex>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                <Box className={styles.date}>
                    <Text fontSize="12px">{x}</Text>
                    <Text fontSize="12px">EPAPER | TODAY’S PAPER</Text>
                </Box>
                <Box className={styles.heading}>
                    <Image src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg" alt="x-x" />
                    <Text fontSize="13px" fontWeight="bold">JOURNALISM OF COURAGE</Text>
                </Box>
                <Box>
                    <SimpleImageSlider
                        width={221}
                        height={71}
                        images={images}
                    // showBullets={true}
                    // showNavs={true}
                    />
                </Box>
            </Box>
            <Box borderTop="1px solid lightgray" borderBottom="1px solid lightgray" p="2px 9px" className={styles.refrence}>
                <Flex justifyContent="space-between" alignItems="center">
                    <Box fontSize="13px" color="black">
                        <HStack gap="10px" className={styles.row3}>
                            <Text _hover={{ color: "#D70000" }}>Home</Text>
                            <Text _hover={{ color: "#D70000" }}>Explained</Text>
                            <Text _hover={{ color: "#D70000" }}>Political Pulse</Text>
                            <Text _hover={{ color: "#D70000" }}>India</Text>
                            <Text _hover={{ color: "#D70000" }}>Cities</Text>
                            <Text _hover={{ color: "#D70000" }}>Opinion</Text>
                            <Text _hover={{ color: "#D70000" }}>Entertainment</Text>
                            <Text _hover={{ color: "#D70000" }}>Lifestyle</Text>
                            <Text _hover={{ color: "#D70000" }}>Technology</Text>
                            <Text _hover={{ color: "#D70000" }}>Videos</Text>
                            <Text _hover={{ color: "#D70000" }}>Sports</Text>
                            <Text _hover={{ color: "#D70000" }}>Audio</Text>
                            <Text _hover={{ color: "#D70000" }}>Education</Text>
                            <Text _hover={{ color: "#D70000" }}>Premium</Text>
                            <Text _hover={{ color: "#D70000" }}>Investigations</Text>
                        </HStack>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "10px" }}>
                        <Button bg="#FFB900" fontSize="14px" colorScheme="#FFB900" color="black">SUBSCRIBE</Button>
                        <Button bg="#3B4057" color="white" fontSize="14px" colorScheme="#3B4057">Sign in</Button>
                    </Box>
                </Flex>
            </Box>
            <Box borderTop="1px solid lightgray" borderBottom="1px solid lightgray" p="10px 0px " mt="-4" >
                <Flex gap="20px" justifyContent="center" alignItems="center" className={styles.trending}>
                    <Text color="#D70000" fontSize="12px" fontWeight="500">TRENDING</Text>
                    <Box _hover={{ color: "#D70000" }} bg="#EFEFEF" p="2px 12px" borderRadius="5px" fontSize="13px">Crossword $ Sudoku</Box>
                    <Box _hover={{ color: "#D70000" }} bg="#EFEFEF" p="2px 12px" borderRadius="5px" fontSize="13px">UPSC special</Box>
                    <Box _hover={{ color: "#D70000" }} bg="#EFEFEF" p="2px 12px" borderRadius="5px" fontSize="13px">Everyday Explainers</Box>
                    <Box _hover={{ color: "#D70000" }} bg="#EFEFEF" p="2px 12px" borderRadius="5px" fontSize="13px">Health Specials</Box>
                    <Box _hover={{ color: "#D70000" }} bg="#EFEFEF" p="2px 12px" borderRadius="5px" fontSize="13px">Academic Counselling</Box>
                    <Box _hover={{ color: "#D70000" }} bg="#EFEFEF" p="2px 12px" borderRadius="5px" fontSize="13px">Follow Authors</Box>
                    <Box _hover={{ color: "#D70000" }} bg="#EFEFEF" p="2px 12px" borderRadius="5px" fontSize="13px">Cricket</Box>
                </Flex>
            </Box>
        </Container>

    )
}