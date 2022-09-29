import { Box, Heading, HStack, Image, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import data from "../db.json";
import { DemoCarousel } from "../Components/Carousel";

export const Home = () => {

    const [topNews, setTopNews] = useState([]);
    const [latestNews, setLatestNews] = useState([]);

    const urlImg = "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=600";

    const images = [
        { url: "https://images.indianexpress.com/2021/08/300x1001.gif" },
        { url: "https://images.indianexpress.com/2021/08/300x100.gif" }
    ];

    useEffect(() => {
        document.title = "Latest News, India News, Breaking News, Today's News Headlines Online, English News Top Stories, Coronavirus News, IPL 2022 Updates|The Indian Express";
        axios
            .get(
                "https://newsapi.org/v2/top-headlines?country=in&apiKey=34c7de93f7594b079eec28988567d583"
            )
            .then((res) => {
                console.log(res);
                setTopNews(res.data.articles);
            })
    }, [])

    useEffect(() => {
        axios.get(
                "https://newsdata.io/api/1/news?apikey=pub_8388f9e9492da67b017e34d4bdd4eca23d1b&country=in&language=en&category=top"
            )
            .then((res) => {
                console.log(res);
                setLatestNews(res.data.results);
            });
    }, [])

    return (
        <Box w="65%" margin="auto">
            <Box w="100%" border="1px solid gray" margin="auto" p="1rem">
                <HStack>
                    <Image
                        src="https://images.indianexpress.com/2014/03/Sc-abortion.jpg?w=475"
                        alt="top-head" />
                    <VStack style={{ textAlign: "left", paddingLeft: "1rem" }}>
                        <Heading mb="10px">All women, married or unmarried, entitled to safe and legal abortion: SC</Heading>
                        <Text>
                            Pointing to the abortion rights for rape survivors,
                            the court said married woman may also form part of the
                            class of survivors of sexual assault and rape as it is
                            quite possible that a woman may become pregnant on account
                            of a non-consensual act by the husband.
                        </Text>
                    </VStack>
                </HStack>
            </Box>
            <Box p="1rem" border="1px solid gray" borderTop="none">
                <HStack textAlign="left">
                    <Box>What Supreme Court said on abortion and marital rape</Box>
                    <Box borderLeft="1px solid gray" pl="1rem">Opinion | In abortion, the woman’s choice matters</Box>
                    <Box borderLeft="1px solid gray" pl="1rem">Explained: What is India's law on abortion?</Box>
                </HStack>
            </Box>
            <Box mt="20px" style={{ display: "flex", justifyContent: "space-between" }}>
                {/* left-div-going--------------- */}
                <Box w="68%" borderRight="1px dotted gray">
                    <HStack >
                        <Box w="50%" textAlign="left">
                            <Heading fontSize="20px" p="0px 0px 10px">As Gehlot meets Sonia Gandhi today, what to expect</Heading>
                            <Image src="https://images.indianexpress.com/2022/09/Gehlot-Sonia.jpg?w=430" w="320px" />
                            <Text fontSize="14px" mt="10px">Party veers around to view that calling a CLP meet on CM was premature</Text>
                        </Box>
                        <Box w="45%">
                            <UnorderedList style={{ listStyle: "none", textAlign: "left", }} spacing="0.75rem">
                                <Link href="">
                                    <ListItem>Why Ajay Maken, gen secy in-charge of Rajasthan Congress is a factor in current mess</ListItem>
                                </Link>
                                <hr />
                                <Link href="">
                                    <ListItem pt="10px">Chavan claims Shinde met him with alliance proposal during Fadnavis rule</ListItem>
                                </Link>
                                <hr />
                                <Link href="">
                                    <ListItem pt="10px">Officer's reply on sanitary pads query: 'Soon they'll ask for contraceptives'</ListItem>
                                </Link>
                                <hr />
                                <Link href="">
                                    <ListItem pt="10px">In an echo of history, the British Pound has lost its dominance</ListItem>
                                </Link>
                            </UnorderedList>
                        </Box>
                    </HStack>
                    <Box borderTop="3px solid black" mt="30px" style={{ display: "flex", justifyContent: "space-between", gap: "20px" }} >
                        <Box w="50%" textAlign="left">
                            <Heading fontSize="16px" p="20px 0px 5px">TOP NEWS</Heading>
                            {
                                topNews.map((el) => (
                                    <Box style={{ display: "flex", gap: "20px", borderTop: "1px dotted gray", borderBottom: "1px dotted gray" }} pt="0.5rem" pb="0.5rem">
                                        <Text fontSize="14px">{el.title}</Text>
                                        <Image src={el.urlToImage ? el.urlToImage : urlImg} width="108px" height="60px" alt="x-x" />
                                    </Box>
                                ))
                            }
                        </Box>
                        <Box w="50%" textAlign="left" bg="#F2F2F2" p="5px 15px 35px">
                            <Heading fontSize="16px" mt="15px">LATEST NEWS</Heading>
                            {
                                latestNews.map((el) => (
                                    <Box style={{ display: "flex", gap: "20px", borderBottom: "1px dotted gray" }} pt="0.5rem" pb="0.5rem" >
                                        <Text>{el.title}</Text>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                    <Box bg="black" mt="20px">
                        <Heading color="#FFC200" fontSize="20px" >BEST OF PREMIUM</Heading>
                        <DemoCarousel />
                    </Box>
                </Box>
                {/* right -div going------------------- */}
                <Box w="32%" pl="1rem" mt="10px">
                    <Text fontSize="11px" color="#6B6B6B" mb="5px">ADVERTISEMENT</Text>
                    <Image src="https://tpc.googlesyndication.com/simgad/5932997003930827343" width="100%" alt="ad-img" />
                    <br />
                    <Box>
                        <SimpleImageSlider
                            width={300}
                            height={113}
                            images={images}
                            showNavs={true}
                        // showBullets={true}
                        />
                    </Box>
                    <br />
                    <Box textAlign="left" mb="25px">
                        <Heading fontSize="16px" mb='2px' pb="10px" borderBottom="1px dotted gray">THE EXPRESS VIEW</Heading>
                        <Box style={{ display: "flex", gap: "20px", borderTop: "1px dotted gray" }} pt="0.5rem" pb="0.5rem">
                            <Text>After the ban: The political challenge posed by PFI still needs tackling</Text>
                            <Image src="https://images.indianexpress.com/2022/09/edit-28.jpg?w=210" width="100px" alt="ban-img" />
                        </Box>
                    </Box>
                    <Box textAlign="left">
                        <Heading fontSize="16px" mb='2px' pb="10px" borderBottom="1px dotted gray">OPINION </Heading>
                        {
                            data.opinion.map((el) => (
                                <Box style={{ display: "flex", flexDirection: "column", gap: "20px", borderTop: "1px dotted gray", borderBottom: "1px dotted gray" }} pt="0.5rem" pb="0.5rem">
                                    <HStack gap="5px">
                                        <Text fontSize="16px">{el.title}</Text>
                                        <Image src={el.image} width="60px" borderRadius="50%" alt="ban-img" />
                                    </HStack>
                                    <Text fontSize="13px" fontWeight="bold">{el.name}</Text>
                                </Box>
                            ))
                        }
                    </Box>
                    <Box p="15px 25px" border="1px dotted black" mt="20px">
                        <Heading color="#A32020" fontSize="16px">BUSINESS AS USUAL</Heading>
                        <br />
                        <Image src="https://images.indianexpress.com/2014/02/700-cartoon-165.jpg" alt="funny-img" />
                    </Box>
                    <Box mt="20px" textAlign="left">
                        <Heading fontSize="16px" mb='2px' pb="10px" borderBottom="1px dotted gray">LIFESTYLE</Heading>
                        {
                            data.lifeStyle.map((item) => (
                                <Box style={{ display: "flex", gap: "20px", borderTop: "1px dotted gray" }} pt="0.5rem" pb="0.5rem">
                                    <Text>{item.title}</Text>
                                    <Image src={item.image} width="100px" height="80px" alt="lifestyle-img" />
                                </Box>
                            ))
                        }
                    </Box>
                    <Box mt="20px" textAlign="left">
                        <Heading fontSize="16px" mb='2px' pb="10px" borderBottom="1px dotted gray">WORLD</Heading>
                        {
                            data.world.map((news) => (
                                <Box style={{ display: "flex", gap: "20px", borderTop: "1px dotted gray" }} pt="0.5rem" pb="0.5rem">
                                    <Text>{news.title}</Text>
                                    <Image src={news.image} width="100px" height="80px" alt="world-img" />
                                </Box>
                            ))
                        }
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}