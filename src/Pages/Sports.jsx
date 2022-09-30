import { Box, Heading } from "@chakra-ui/react"
import { useEffect } from "react";
import SlideDiv from "../Components/SlideDiv"

export const Sports=()=>{

    useEffect(() => {
        document.title = "Sports Page: Latest News, India News, Breaking News, Today's News Headlines Online, English News Top Stories, Coronavirus News, IPL 2022 Updates|The Indian Express";
    }, [])

    return (
        <Box>
            <Heading>sports</Heading>
            <SlideDiv/> 
        </Box>
    )
}