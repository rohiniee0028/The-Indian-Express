import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Grid, GridItem, Heading, HStack, Image, Stack, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import SlideDiv from "../Components/SlideDiv"
import axios from "axios";
import { Link } from "react-router-dom";

export const Sports = () => {
    const [data, setData] = useState([]);

    const urlImg = "https://images.indianexpress.com/2022/09/IND-SA-23.jpg?resize=600,334"

    useEffect(() => {
        document.title = "Sports News: Latest News, India News, Breaking News, Today's News Headlines Online, English News Top Stories, Coronavirus News, IPL 2022 Updates|The Indian Express";
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=07ee45696e7b4c7dae7bc94ac0c4ddd6`
            )
            .then((r) => setData(r.data.articles))
            .catch((e) => console.log(e));
    }, []);

    console.log(data);

    return (
        <Box w="65%" margin="auto" cursor="pointer">
            <Box w="94%" m="auto" textAlign="left">
                <Breadcrumb p="0px 0px 10px">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" color="#A32020" fontSize="15px">
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/sports" color="#787676" fontSize="15px">Sports</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <HStack direction="column" bg="#F6F6F6">
                    <Text fontSize="20px" fontWeight="bold" color="#A32020" pl="5px">
                        SPORTS
                    </Text>
                    <Wrap spacing={-5} _hover>
                        <WrapItem>
                            <Button fontSize="13px" fontWeight="bold" color="#6A6A6A" variant="ghost" _hover={{ color: "#A32020" }}>
                                CRICKET
                            </Button>
                        </WrapItem>
                        <WrapItem>
                            <Button fontSize="13px" fontWeight="bold" color="#6A6A6A" variant="ghost" _hover={{ color: "#A32020" }}>
                                FOOTBALL
                            </Button>
                        </WrapItem>
                        <WrapItem>
                            <Button fontSize="13px" fontWeight="bold" color="#6A6A6A" variant="ghost" _hover={{ color: "#A32020" }}>
                                TENNIS
                            </Button>
                        </WrapItem>
                        <WrapItem>
                            <Button fontSize="13px" fontWeight="bold" color="#6A6A6A" variant="ghost" _hover={{ color: "#A32020" }}>
                                WWE
                            </Button>
                        </WrapItem>
                        <WrapItem>
                            <Button fontSize="13px" fontWeight="bold" color="#6A6A6A" variant="ghost" _hover={{ color: "#A32020" }}>
                                PHOTOS
                            </Button>
                        </WrapItem>
                        <WrapItem>
                            <Button fontSize="13px" fontWeight="bold" color="#6A6A6A" variant="ghost" _hover={{ color: "#A32020" }}>
                                PODCAST
                            </Button>
                        </WrapItem>
                        <WrapItem>
                            <Button fontSize="13px" fontWeight="bold" color="#6A6A6A" variant="ghost" _hover={{ color: "#A32020" }}>
                                EXPLAINED
                            </Button>
                        </WrapItem>
                    </Wrap>
                </HStack>
                <Text fontWeight="bold" fontSize="18" p="10px 0px 0px">
                    Sports
                </Text>
            </Box>
            <Box display="flex" textAlign="left" mt="10px" >
                <Box w="50%" pt="10px">
                    <SlideDiv />
                </Box>
                <Box w="25%" pt="10px">
                    <Box>
                        <Image src="https://images.indianexpress.com/2022/09/football-fix.png?resize=450,250" width="205px" height="112px" alt="y" />
                        <Text color="#444444" fontSize="16px" width="203px" height="60px">Weekly football fix: What to watch</Text>
                    </Box>
                    <Box>
                        <Image src="https://images.indianexpress.com/2022/09/divyansh-pawar.jpg?resize=450,250" width="205px" height="112px" alt="z" />
                        <Text color="#444444" fontSize="16px" width="203px" height="60px">How Olympic ‘failure’ transformed Divyansh</Text>
                    </Box>
                </Box>
                <Box w="25%" pt="10px">
                    <Box>
                        <Image src="https://images.indianexpress.com/2020/05/motogp-fb-1.jpg?resize=450,250" width="205px" height="112px" alt="y" />
                        <Text color="#444444" fontSize="16px" width="203px" height="60px">Confirmed: India to host a MotoGP race in 2023</Text>
                    </Box>
                    <Box>
                        <Image src="https://images.indianexpress.com/2022/09/Magnus-and-Niemann.jpg?resize=450,250" width="205px" height="112px" alt="z" />
                        <Text color="#444444" fontSize="16px" width="203px" height="60px">Carlsen vs Niemann: FIDE to form investigatory panel</Text>
                    </Box>
                </Box>
            </Box>
            <Box w="93%" m="auto" mt="-100px" textAlign="left">
                <HStack gap="10px">
                    <Box>
                        <Image src="https://images.indianexpress.com/2022/06/osaka-1200-10.jpeg?resize=450,250" />
                        <Text fontSize="17px">
                            Bandon Mein Tha Dum review: While comprehensive, series falls flat
                            in capturing glory & drama of India’s win
                        </Text>
                    </Box>
                    <Box>
                        <Image src="https://images.indianexpress.com/2022/06/While-You-Were-Asleep-3-1.jpg?resize=450,250" />
                        <Text fontSize="17px">
                            Bandon Mein Tha Dum review: While comprehensive, series falls flat
                            in capturing glory & drama of India’s win
                        </Text>
                    </Box>
                    <Box>
                        <Image src="https://images.indianexpress.com/2022/06/Nadal-1-3.jpg?resize=450,250" />
                        <Text fontSize="17px">
                            Bandon Mein Tha Dum review: While comprehensive, series falls flat
                            in capturing glory & drama of India’s win
                        </Text>
                    </Box>
                </HStack>
            </Box>
            <Box w="93%" m="auto" textAlign="left" borderTop="3px solid gray" mt="30px">
                {
                    data.map((value) => (
                        <Link to={`/sports/${value.source.name}`}>
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
