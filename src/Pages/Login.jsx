
import React, { useContext, useEffect, useState } from "react";
import style from "./Login.module.css";
import {
  Stack,
  Box,
  Heading,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { AuthContext } from "../Context/AuthContext";


export const Login = ()=>{

    useEffect(() => {
        document.title = "Login Page: Latest News, India News, Breaking News, Today's News Headlines Online, English News Top Stories, Coronavirus News, IPL 2022 Updates|The Indian Express";
    }, [])

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { authState, loginUser , logoutUser} = useContext(AuthContext);
    const navigate = useNavigate();
  
    function handleSubmit(e){
      e.preventDefault();
      const payload={
        email,
        password
      }
     fetch(`https://reqres.in/api/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
      })
      .then((res)=>res.json())
      .then((res)=>{
        //  console.log(res.token);
         loginUser();
        //  console.log(loginUser);
         navigate("/");
      })
      
    }

    return (
        <div style={{marginBottom:"30px"}}>
        <div className={style.HeadLogo}>
          <div className={style.backbtn}>
            <ArrowBackIcon />
            <Button color="gray">
              <Link to="/">Back to IndianExpress</Link>
            </Button>
          </div>
  
          <div>
            <img
              src="	https://indianexpress.com/wp-content/themes/indianexpress/images/evolok/indian-express-logo-n.svg"
              alt="IndianExpress"
            />
          </div>
        </div>
        <div className={style.LoginCOntainer}>
          <div className={style.LoginForm}>
            <Heading as="h2" size="md" noOfLines={1}>
              WELCOME BACK
            </Heading>
            <Stack spacing={4}>
              <Box
                textAlign="center"
                bg="#d6d3d32e"
                w="100%"
                p={2}
                border="1px solid #cfcfcf"
                borderRadius="12px"
              >
                <div className={style.IconDiv}>
                  <FcGoogle /> Continue with Google
                </div>
              </Box>
  
              <Box
                textAlign="center"
                bg="#d6d3d32e"
                w="100%"
                p={2}
                border="1px solid #cfcfcf"
                borderRadius="12px"
              >
                <div className={style.IconDiv}>
                  <FaFacebook color="rgb(1, 1, 145)" /> Continue with Facebook
                </div>
              </Box>
              <Box
                textAlign="center"
                bg="#d6d3d32e"
                w="100%"
                p={2}
                border="1px solid #cfcfcf"
                borderRadius="12px"
              >
                <div className={style.IconDiv}>
                  <FaApple color="black" />
                  Continue with Apple
                </div>
              </Box>
            </Stack>
  
            <div className={style.orDiv}>
              <div></div>
              <div>or</div>
              <div></div>
            </div>
          </div>
            <div className={style.AlreadySiginn}>
              <Stack>
                <Text
                  fontSize="md"
                  w="90%"
                  margin="auto"
                  color="rgb(109 109 147)"
                >
                  Enter the email address or mobile number associated with your
                  account to sign in.
                </Text>
              </Stack>
              <div className={style.InputDiv}>
                <Input
                  variant="flushed"
                  name="email"
                  value={email}
                  placeholder="Insert your registered Email/Phone"
                  type="email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <Input
                  variant="flushed"
                  name="password"
                  value={password}
                  placeholder="Password"
                  type="password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
  
              <div className={style.SubmitButton}>
                <Button size="lg" w="100%" onClick={handleSubmit}>
                  Log In
                </Button>
              </div>
  
              <div className={style.TakingtoSignIn}>
                <div>
                  <Text color="gray.500">New to Indian Express?</Text>
                </div>
                <div>
                  <h1>Create an account to get started</h1>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
}