import { Box, Flex, Heading, HStack, Image, Link, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <Box w="100%" bg="#000000" color="#EEEEEE" >
            <Box w="70%" margin="auto">
                <Box>
                    <Heading color="#787677" fontSize="14px" textAlign="left" py="10px">TOP CATEGORIES</Heading>
                    <hr style={{ color: "#787677" }} />
                    <HStack justifyContent="space-between" textAlign="left" mt="10px" fontSize="13px" alignItems="start">
                        <VStack>
                            <UnorderedList spacing="0.75rem">
                                <ListItem>
                                    <Link>Explained News</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Delhi News</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Health News</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Jobs</Link>
                                </ListItem>
                                <ListItem>Mobile & Tabs</ListItem>
                            </UnorderedList>
                        </VStack>
                        <VStack>
                            <UnorderedList spacing="0.75rem">
                                <ListItem>
                                    <Link>Political Pulse</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Pune News</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>India News</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Mobile & Tabs</Link>
                                </ListItem>
                                <ListItem>Food & Wine</ListItem>
                            </UnorderedList>
                        </VStack>
                        <VStack>
                            <UnorderedList spacing="0.75rem">
                                <ListItem>
                                    <Link>Latest News</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Banglore News</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Sports News</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Tech Reviews</Link>
                                </ListItem>
                                <ListItem>Travel</ListItem>
                            </UnorderedList>
                        </VStack>
                        <VStack >
                            <UnorderedList spacing="0.75rem">
                                <ListItem>
                                    <Link>Mumbai News</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Bollywood News</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Lifestyle News</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Gadgets</Link>
                                </ListItem>
                                <ListItem>Fitness</ListItem>
                            </UnorderedList>
                        </VStack>
                    </HStack>
                </Box>
                <Box>
                    <Heading color="#787677" fontSize="14px" textAlign="left" py="10px">TRENDING NEWS</Heading>
                    <hr style={{ color: "#787677" }} />
                    <HStack justifyContent="space-between" textAlign="left" mt="10px" alignItems="start" fontSize="13px" >
                        <VStack>
                            <UnorderedList spacing="0.75rem">
                                <ListItem>
                                    <Link>Horoscope</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Dance Classes For Kids</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Subscribe To The Indian Express</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Rupee Fails 43 Against US Dollar</Link>
                                </ListItem>
                            </UnorderedList>
                        </VStack>
                        <VStack>
                            <UnorderedList spacing="0.75rem">
                                <ListItem>
                                    <Link>India News</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Entertainment News</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Buy Digital Premium</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Horoscope Today, 26 September 2022:</Link>
                                </ListItem>
                            </UnorderedList>
                        </VStack>
                        <VStack>
                            <UnorderedList spacing="0.75rem">
                                <ListItem>
                                    <Link>Art & Craft Classes For Kids</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>UPSC News</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Delhi News Live Updates:</Link>
                                </ListItem>
                            </UnorderedList>
                        </VStack>
                        <VStack>
                            <UnorderedList spacing="0.75rem">
                                <ListItem>
                                    <Link>Fitness Classes For Kids</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Buy All-Access Pass</Link>
                                </ListItem>
                                <ListItem>
                                    <Link>Delhi: Yamuna Flowing Above 'Warning' Level</Link>
                                </ListItem>
                            </UnorderedList>
                        </VStack>
                    </HStack>
                </Box>
                <Box>
                    <Heading color="#787677" fontSize="14px" textAlign="left" py="10px">LATEST STORIES</Heading>
                    <hr style={{ color: "#787677" }} />
                    <HStack justifyContent="space-between" textAlign="left" mt="10px" alignItems="start" fontSize="13px" >
                        <VStack w="400px">
                            <UnorderedList spacing="0.75rem">
                                <ListItem>
                                    <Link>
                                        Mahesh Babu Performs Mother Indira Devi’s Last Rites; Venkatesh, Vijay Deverakonda And Others Pay Respects
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link>
                                        ‘Even Modi Cannot Finish My Career’: Has Pankaja Munde Finally Gone Too Far?
                                    </Link>
                                </ListItem>
                            </UnorderedList>
                        </VStack>
                        <VStack w="400px">
                            <UnorderedList spacing="0.75rem">
                                <ListItem>
                                    <Link>
                                        ITiruchendur Subrahmanya Swamy Temple Renovation, Infra Works Launched
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link>
                                        Tata Motors Launches Tiago EV At Rs 8.49 Lakhs
                                    </Link>
                                </ListItem>
                            </UnorderedList>
                        </VStack>
                        <VStack w="400px">
                            <UnorderedList spacing="0.75rem">
                                <ListItem>
                                    <Link>
                                        Pro League Tie Will Give Us Better Understanding Of Spain Ahead Of WC: Manpreet
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link>
                                        Tech InDepth: Understanding Nvidia’s DLSS And What’s New With DLSS 3.0
                                    </Link>
                                </ListItem>
                            </UnorderedList>
                        </VStack>
                        <VStack w="400px">
                            <UnorderedList spacing="0.75rem">
                                <ListItem>
                                    <Link>
                                        What Is Aortic Disease And How Can You Distinguish It From A Heart Attack?
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link>
                                        Mohammed Shami Tests Negative For COVID-19
                                    </Link>
                                </ListItem>
                            </UnorderedList>
                        </VStack>
                    </HStack>
                </Box>
                <Box>
                    <hr style={{ marginTop: "12px", color: "#7E828E" }} />
                    <Box display="flex" justifyContent="space-between" textAlign="left" mt="10px" alignItems="start" fontSize="13px" w="100%">
                        <Box w="20%">
                            <Box>
                                <Heading color="#787677" fontSize="14px" textAlign="left" py="10px">FOLLOW US</Heading>
                                <Flex gap="10px">
                                    <Link href="https://www.facebook.com/indianexpress">
                                        <Image src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-facebook.svg" width="30px" alt="fb" />
                                    </Link>
                                    <Link href="https://twitter.com/indianexpress">
                                        <Image src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-twitter.svg" alt="twitter" width="30px" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/indian-express/">
                                        <Image src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-linkedin.svg" alt="Linkedin" width="30px" />
                                    </Link>
                                    <Link href="https://www.instagram.com/indianexpress/">
                                        <Image src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-instagram.svg" alt="instagram" width="30px" />
                                    </Link>
                                </Flex>
                            </Box>
                            <Box>
                                <Heading color="#787677" fontSize="14px" textAlign="left" py="10px">DOWNLOAD APPS</Heading>
                                <Flex gap="10px">
                                    <Link href="https://play.google.com/store/apps/details?id=com.indianexpress.android&hl=en">
                                        <Image src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-android.svg" alt="android" width="30px" />
                                    </Link>
                                    <Link href="https://apps.apple.com/us/app/the-indian-express/id506351833">
                                        <Image src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-apple.svg" alt="apple" width="30px" />
                                    </Link>
                                </Flex>
                            </Box>
                            <Box mt="10px" borderTop="1px solid #7E828E">
                                <Image src="https://indianexpress.com/wp-content/themes/indianexpress/images/newsguard-logo-w.svg" alt="logo" w="120px" h="18px" style={{ marginTop: "10px" }} />
                                <Flex gap="10px" mt="15px">
                                    <Image src="https://indianexpress.com/wp-content/themes/indianexpress/images/newsguard-check.svg" alt="tick" w="20px" h="30px" />
                                    <Text color="#787677" fontSize="12px">The Indian Express website has been rated GREEN for its credibility and trustworthiness by Newsguard, a global service that rates news sources for their journalistic standards.</Text>
                                </Flex>
                            </Box>
                        </Box>
                        <Box w="35%" borderLeft="1px solid #7E828E" paddingLeft="20px" paddingRight="20px">
                            <Heading color="#787677" fontSize="14px" textAlign="left" py="10px">EXPRESS GROUP</Heading>
                            <HStack >
                                <VStack style={{ display: "flex", alignItems: "start", marginTop: "-25px" }}>
                                    <Link href="">
                                        <Text>The Indian Express</Text>
                                    </Link>
                                    <Link href="">
                                        <Text>The Financial Express</Text>
                                    </Link>
                                    <Link href="">
                                        <Text>Loksatta</Text>
                                    </Link>
                                    <Link href="">
                                        <Text>Jansatta</Text>
                                    </Link>
                                    <Link href="">
                                        <Text>The Express Group</Text>
                                    </Link>
                                    <Link href="">
                                        <Text>Newsletters</Text>
                                    </Link>
                                    <Link href="">
                                        <Text>Ramnath Goenka Excellence in Journalism Awards</Text>
                                    </Link>
                                    <Link href="">
                                        <Text>Light House Journalism</Text>
                                    </Link>
                                </VStack>
                                <VStack style={{ display: "flex", alignItems: "start" }}>
                                    <Link href="">
                                        <Text>ieTamil.com</Text>
                                    </Link>
                                    <Link href="">
                                        <Text>ieBangla.com</Text>
                                    </Link>
                                    <Link href="">
                                        <Text>ieMalayalam.com</Text>
                                    </Link>
                                    <Link href="">
                                        <Text>inUth</Text>
                                    </Link>
                                    <Link href="">
                                        <Text>MyInsuranceClub</Text>
                                    </Link>
                                    <Link href="">
                                        <Text>26/11 Stories of Strength</Text>
                                    </Link>
                                    <Link href="">
                                        <Text>Online Classes for Kids</Text>
                                    </Link>
                                    <Link href="">
                                        <Text>Compare Term Insurance</Text>
                                    </Link>
                                </VStack>
                            </HStack>
                        </Box>
                        <Box w="35%" borderLeft="1px solid #7E828E" paddingLeft="20px">
                            <Heading color="#787677" fontSize="14px" textAlign="left" py="10px">QUICK LINKS</Heading>
                            <VStack style={{ display: "flex", alignItems: "start" }}>
                                <Link href="">
                                    <Text>T&C</Text>
                                </Link>
                                <Link href="">
                                    <Text>Privacy Policy</Text>
                                </Link>
                                <Link href="">
                                    <Text>Advertise with Us</Text>
                                </Link>
                                <Link href="">
                                    <Text>Brand Solutions</Text>
                                </Link>
                                <Link href="">
                                    <Text>Contact Us</Text>
                                </Link>
                                <Link href="">
                                    <Text>Subscribe</Text>
                                </Link>
                                <Link href="">
                                    <Text>Statutory provisions on reporting (sexual offenses)</Text>
                                </Link>
                                <Link href="">
                                    <Text>This website follows the DNPA’s code of conduct</Text>
                                </Link>
                                <Link href="">
                                    <Text>CSR</Text>
                                </Link>
                            </VStack>
                        </Box>
                    </Box>
                </Box>
                <Box borderTop="1px solid #7E828E" mt="20px">
                    <HStack justify="space-between" p="10px">
                        <Text color="#7E828E" fontSize="13px">Copyright © 2022 The Indian Express [P] Ltd. All Rights Reserved</Text>
                        <Image src="https://indianexpress.com/wp-content/themes/indianexpress/images/vip-powered-logo.png" alt="powered" width="200px" />
                    </HStack>
                </Box>
            </Box>
        </Box>
    )
}