import { Box, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SportsContext } from "../Context/SportsContext/SportsContext";

export const SportsDetail= ()=>{
   const {sportsState, sportsDispatch} = useContext(SportsContext);

    useEffect(() => {
        document.title = "Sports News: Latest News, India News, Breaking News, Today's News Headlines Online, English News Top Stories, Coronavirus News, IPL 2022 Updates|The Indian Express";
    }, []);

    return (
        <Box w="70%" margin="auto" textAlign="left" mb="50px">
            { 
               sportsState?.sportsData?.map((el,index)=>(
                <Box key={index}>
                  <br/>
                  <Heading>{el.title}</Heading>
                  <br/>
                   <Image src={el.urlToImage} alt="d-1"/>
                   <br/>
                   <Text  fontSize="20px" fontWeight="400">{el.author}</Text>
                   <br/>
                   <Text  fontSize="20px" fontWeight="400">{el.content}</Text>
                   <br/>
                   <Text fontSize="20px" fontWeight="400">{el.description}</Text>
                </Box>
               ))
            }
        </Box>
    )
}