import React from "react";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { HStack, Container, VStack, Text, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <section
      className="footer"
      style={{ background: "#0f051d", color: "#ffffff" }}
    >
      <Container maxW={"container.xl"}>
        <VStack py={["12", "16", "20"]} cursor={"pointer"} gap={"20px"}>
          <HStack gap={"30px"}>
            <AiOutlineTwitter size={"30px"} className="icon" />
            <MdOutlineFacebook size={"30px"} className="icon" />
            <AiFillInstagram size={"30px"} className="icon" />
            <AiFillYoutube size={"30px"} className="icon" />
          </HStack>
          <Stack
            direction={["column", "column", "row"]}
            gap={"30px"}
            alignItems={"center"}
          >
            <Text className="footerText">Privacy Policy</Text>
            <Text className="footerText">Terms of Use</Text>
            <Text className="footerText">Terms and Conditions</Text>
          </Stack>
        </VStack>
      </Container>
    </section>
  );
};

export default Footer;
