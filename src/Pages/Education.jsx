import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Grid, GridItem, Heading, HStack, Image, Stack, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SlideDiv2 from "../Components/SlideDiv2";
import { useContext } from "react";
import { EducationContext } from "../Context/EduContex/EducationContext";
import { AddItem } from "../Context/SportsContext/action";
import { AddItemEdu } from "../Context/EduContex/eduAction";

export const Education = () => {
    const [data, setData] = useState([]);
    const {eduState, eduDispatch} = useContext(EducationContext);

    const urlImg = "https://images.indianexpress.com/2022/09/IND-SA-23.jpg?resize=600,334"

    useEffect(() => {
        document.title = "Education News: Latest News, India News, Breaking News, Today's News Headlines Online, English News Top Stories, Coronavirus News, IPL 2022 Updates|The Indian Express";
        axios
            .get(
                "https://newsapi.org/v2/everything?q=education&apiKey=07ee45696e7b4c7dae7bc94ac0c4ddd6"
            )
            .then((res) => setData(res.data.articles))
            .catch((err) => console.log(err));
    }, []);

    console.log(data);

    return (
        <Box w="70%" margin="auto" cursor="pointer">
            <Box w="90%" m="auto" textAlign="left">
                <Breadcrumb p="0px 0px 10px">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" color="#A32020" fontSize="15px">
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/sports" color="#787676" fontSize="15px">
                            Education
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <HStack direction="column" bg="#F6F6F6">
                    <Text fontSize="20px" fontWeight="bold" color="#A32020" pl="5px">
                        EDUCATION
                    </Text>
                    <Wrap spacing={-5} _hover>
                        <WrapItem>
                            <Button fontSize="13px" fontWeight="bold" color="#6A6A6A" variant="ghost" _hover={{ color: "#A32020" }}>
                                JOBS
                            </Button>
                        </WrapItem>
                        <WrapItem>
                            <Button fontSize="13px" fontWeight="bold" color="#6A6A6A" variant="ghost" _hover={{ color: "#A32020" }}>
                                STUDENTS VOICE
                            </Button>
                        </WrapItem>
                        <WrapItem>
                            <Button fontSize="13px" fontWeight="bold" color="#6A6A6A" variant="ghost" _hover={{ color: "#A32020" }}>
                                STUDY ABROAD
                            </Button>
                        </WrapItem>
                        <WrapItem>
                            <Button fontSize="13px" fontWeight="bold" color="#6A6A6A" variant="ghost" _hover={{ color: "#A32020" }}>
                                MOCK TEST
                            </Button>
                        </WrapItem>
                    </Wrap>
                </HStack>
                <Text fontWeight="bold" fontSize="18" p="10px 0px 0px">
                    EDUCATION NEWS
                </Text>
            </Box>
            <Box display="flex" textAlign="left" mt="10px" >
                <Box w="50%" pt="10px">
                    <SlideDiv2 />
                </Box>
                <Box w="25%" pt="10px">
                    <Box>
                        <Image src="https://images.indianexpress.com/2022/09/The-right-choice-1.jpg?resize=450,250" width="205px" height="112px" alt="y" />
                        <Text color="#444444" fontSize="16px" width="203px" height="60px">Full-time MBA or part-time? Experts explain difference between the two</Text>
                    </Box>
                    <br />
                    <Box>
                        <Image src="https://images.indianexpress.com/2022/09/pexels-a-koolshooter-5255319-1.jpg?resize=450,250" width="205px" height="112px" alt="z" />
                        <Text color="#444444" fontSize="16px" width="203px" height="60px">JoSAA 2022 | From ISRO to drone sector to military: IIT professor talks about job opportunities after aerospace engineering</Text>
                    </Box>
                </Box>
                <Box w="25%" pt="10px">
                    <Box>
                        <Image src="https://images.indianexpress.com/2022/09/ch1685187-1-1.jpg?resize=450,250" width="205px" height="112px" alt="y" />
                        <Text color="#444444" fontSize="16px" width="203px" height="60px">Mandatory to register on ABC portal for DU Admissions</Text>
                    </Box>
                    <br />
                    <Box>
                        <Image src="https://images.indianexpress.com/2022/09/Brain-drain.jpg?resize=450,250" width="205px" height="112px" alt="z" />
                        <Text color="#444444" fontSize="16px" width="203px" height="60px">Over 2 million employees expected to quit by 2025</Text>
                    </Box>
                </Box>
            </Box>
            <Box w="93%" m="auto" textAlign="left" alignItems="center" mt="-20px">
                <HStack gap="10px">
                    <Box>
                        <Image src="https://images.indianexpress.com/2022/09/ch1070357-1.jpg?resize=450,250" mt="-10px" />
                        <Text fontSize="17px">
                            BHU launches internship programme
                        </Text>
                    </Box>
                    <Box>
                        <Image src="https://images.indianexpress.com/2022/10/pexels-startup-stock-photos-7112-1.jpg?resize=600,334" height="155px" width="350px" />
                        <Text fontSize="17px">
                            GATE 2023 Registration deadline extended; check eligibility criteria
                        </Text>
                    </Box>
                    <Box>
                        <Image src="https://images.indianexpress.com/2022/10/UGC-1200-1.jpg?resize=450,250" height="156px" width="280px" />
                        <Text fontSize="17px">
                            UGC clears professor of practice post for ‘experts’, PhD not must
                        </Text>
                    </Box>
                </HStack>
            </Box>
            <Box w="93%" m="auto" textAlign="left" borderTop="3px solid gray" mt="30px">
                {
                    data.map((value) => (
                        <Link to={`/educationDetail`} onClick={()=>eduDispatch(AddItemEdu(value))}>
                            <Grid
                                h="200px"
                                templateRows="repeat(2, 1fr)"
                                templateColumns="repeat(5, 1fr)"
                                gap={1}
                                paddingTop={10}
                                paddingBottom={10}
                                borderBottom="1px"
                                borderColor="gray.400"
                            >
                                <GridItem rowSpan={1} colSpan={1}>
                                    <Image
                                        boxSize="300px"
                                        height="auto"
                                        src={value.urlToImage ? value.urlToImage : urlImg}
                                        alt="SportNews"
                                    />
                                </GridItem>
                                <GridItem colSpan={4} bg="white">
                                    <Stack>
                                        <Heading fontSize="20px">{value.title}</Heading>
                                        <Text fontSize="12">{value.publishedAt}</Text>
                                        <Text>{value.description}</Text>
                                    </Stack>
                                </GridItem>
                            </Grid>
                        </Link>
                    ))
                }
            </Box>
        </Box>
    )
}
