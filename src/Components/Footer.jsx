import React from "react";
// import "../styles/Footer.scss";
import logo from "../assets/logo.png";

import {
  AiFillCodepenCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { HStack, Stack, VStack, Image, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack
      direction={["column", "column", "row"]}
      color={"#222222"}
      borderTop={"2px solid #222222"}
      py={"2"}
    >
      <VStack alignItems={["center", "center", "start"]} px={"4"} flex={"50%"}>
        <HStack>
          <Image src={logo} w={["40px", "50px"]} />
          <Text fontSize={["md", "xl"]} color={"#986d2c"}>
            Crypto Coin
          </Text>
        </HStack>
        <Text>Copyright &copy; 2023 , All Rights Reserved.</Text>
      </VStack>
      <HStack px={'4'} flex={'50%'} justifyContent={[ 'center' , 'center', 'flex-end']} gap={'30px'} >
        <AiFillCodepenCircle size={'30'} />
        <AiFillFacebook size={'30'} />
        <AiFillTwitterCircle size={'30'} />
        <AiFillInstagram size={'30'} />
        <AiFillGithub size={'30'} />
      </HStack>
    </Stack>
  );
};

export default Footer;
