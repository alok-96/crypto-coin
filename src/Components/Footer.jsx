import React from "react";
import logo from "../assets/logo.png";

import {
  AiFillLinkedin,
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
      <HStack
        px={"4"}
        flex={"50%"}
        justifyContent={["center", "center", "flex-end"]}
        gap={"30px"}
      >
        <a
          href="https://www.linkedin.com/in/alok-dwivedi-4347801b8/"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={"30"} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100070380284005"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook size={"30"} />
        </a>
        <a
          href="https://twitter.com/alokdwivedi99"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle size={"30"} />
        </a>
        <a
          href="https://www.instagram.com/_its_alok_07_/"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram size={"30"} />
        </a>
        <a
          href="https://github.com/alok-96"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={"30"} />
        </a>
      </HStack>
    </Stack>
  );
};

export default Footer;
