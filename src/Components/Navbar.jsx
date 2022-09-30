import { Box, Button, Container, Flex, HStack, Image, Text} from "@chakra-ui/react";
import { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { FaEnvelopeOpenText, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import { AuthContext } from "../Context/AuthContext";
import styles from "./Navbar.module.css";
import { Search } from "./Search";
import Sections from "./Sections";

var objToday = new Date(),
  weekday = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ),
  dayOfWeek = weekday[objToday.getDay()],
  domEnder = (function () {
    var a = objToday;
    if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
    a = parseInt((a + "").charAt(1));
    return 1 == a ? "" : 2 == a ? "" : 3 == a ? "" : "";
  })(),
  dayOfMonth =
    today + (objToday.getDate() < 10)
      ? "0" + objToday.getDate() + domEnder
      : objToday.getDate() + domEnder,
  months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ),
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear();
  var today = dayOfWeek + ", " + curMonth + " " + dayOfMonth + ",  " + curYear;

export const Navbar = () => {

    const images = [
        { url: "https://tpc.googlesyndication.com/simgad/12692791964622314734" },
    ];

    const {authState} = useContext(AuthContext);

    return (
        <Container maxW='90%' mt="10px" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Flex display="flex" gap="15px" alignItems="center">
                    <Box >
                       <Sections />
                    </Box>
                    <Box bg="#EFEFEF"  borderRadius="5px">
                        <Search />
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
                    <Text fontSize="12px">{today}</Text>
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
                            <Link to="/">
                                <Text _hover={{ color: "#D70000" }}>Home</Text>
                            </Link>
                            <Text _hover={{ color: "#D70000" }}>Explained</Text>
                            <Text _hover={{ color: "#D70000" }}>Political Pulse</Text>
                            <Text _hover={{ color: "#D70000" }}>India</Text>
                            <Text _hover={{ color: "#D70000" }}>Cities</Text>
                            <Text _hover={{ color: "#D70000" }}>Opinion</Text>
                            <Text _hover={{ color: "#D70000" }}>Entertainment</Text>
                            <Text _hover={{ color: "#D70000" }}>Lifestyle</Text>
                            <Text _hover={{ color: "#D70000" }}>Technology</Text>
                            <Text _hover={{ color: "#D70000" }}>Videos</Text>
                            <Link to="/sports">
                               <Text _hover={{ color: "#D70000" }}>Sports</Text>
                            </Link>
                            <Text _hover={{ color: "#D70000" }}>Audio</Text>
                            <Text _hover={{ color: "#D70000" }}>Education</Text>
                            <Text _hover={{ color: "#D70000" }}>Premium</Text>
                            <Text _hover={{ color: "#D70000" }}>Investigations</Text>
                        </HStack>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "10px" }}>
                        <Button bg="#FFB900" fontSize="14px" colorScheme="#FFB900" color="black">SUBSCRIBE</Button>
                        <Link to="/login"  rel="noreferrer">
                           <Button bg="#3B4057" color="white" fontSize="14px" colorScheme="#3B4057">{!authState ? "Sign in" : "Sign out"}</Button>
                        </Link>
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