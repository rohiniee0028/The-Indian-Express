import { Box, Heading, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getData = (params)=>{
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=07ee45696e7b4c7dae7bc94ac0c4ddd6/${params}`)
}

export const SportsDetail= ()=>{
    const params = useParams();
    console.log(params)
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = "Sports News: Latest News, India News, Breaking News, Today's News Headlines Online, English News Top Stories, Coronavirus News, IPL 2022 Updates|The Indian Express";
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=07ee45696e7b4c7dae7bc94ac0c4ddd6/${params}`
            )
            .then((res) => setData(res.data.articles))
            .catch((err) => console.log(err));
    }, []);
    return (
        <Box w="70%" margin="auto">
            <Box>
                <Heading>{data.title}</Heading>
                <Image src={data.urlToImg} alt="d-1"/>
            </Box>
        </Box>
    )
}