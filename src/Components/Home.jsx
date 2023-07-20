import React from "react";
import logo from "../assets/logo.png";
import mobile from "../assets/mobile.webp";
import laptop from "../assets/laptop.png";
import { Heading, Img, Stack, Text, VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Stack
        direction={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
        minH={"70vh"}
        alignItems={"center"}
        py={"8"}
      >
        <VStack
          color={"#222222"}
          flexBasis={"60%"}
          textAlign={["center", "center", "start"]}
          p={["4", "8"]}
        >
          <Heading size={["xl", "2xl"]} lineHeight={"50px"} my={"4"}>
            Buy, trade, and hold 350+ cryptocurrencies on Crypto Coin.
          </Heading>
          <Text fontSize={["md", "xl", "2xl"]} py={"4"}>
            Stay informed with real-time market data, expert analysis, and
            educational resources, empowering you to make informed decisions and
            maximize your crypto investments.
          </Text>
        </VStack>
        <Img
          src={logo}
          alt=""
          className="logo"
          m={"auto"}
          w={["200px", "300px", "400px"]}
        />
      </Stack>

      <Stack
        direction={["column", "column", "column", "row"]}
        minH={"80vh"}
        py={"8"}
      >
        <Img src={mobile} alt="" m={"auto"} w={["150px", "200px", "250px"]} />
        <VStack
          color={"#222222"}
          flexBasis={"60%"}
          textAlign={["center", "center", "start"]}
          p={["4", "8"]}
        >
          <Heading size={["xl", "2xl"]} lineHeight={"50px"} my={"4"}>
            Build your crypto portfolio
          </Heading>
          <Text fontSize={["md", "xl", "2xl"]} py={"4"}>
            <b>1. Verify your identity</b> <br />
            Complete the identity verification process to secure your account
            and transactions. <br /> <br />
            <b>2. Fund your account</b> <br />
            Add funds to your crypto account to start trading crypto. You can
            add funds with a variety of payment methods. <br /> <br />
            <b>3. Start trading</b> <br />
            You're good to go! Buy/sell crypto, set up recurring buys for your
            investments, and discover what Binance has to offer.
          </Text>
        </VStack>
      </Stack>

      <Stack
        direction={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
        minH={"80vh"}
        alignItems={"center"}
        py={"8"}
      >
        <VStack
          color={"#222222"}
          flexBasis={"60%"}
          textAlign={["center", "center", "start"]}
          p={["4", "8"]}
        >
          <Heading size={["xl", "2xl"]} lineHeight={"50px"} my={"4"}>
            Trade on the go. Anywhere, anytime.
          </Heading>
          <Text fontSize={["md", "xl", "2xl"]} py={"4"}>
            Stay in the know with our app and desktop client. Here at Crypto
            Coin, we are committed to user protection with strict protocols and
            industry-leading technical measures.
          </Text>
        </VStack>
        <Img src={laptop} alt="" m={"auto"} w={["300px", "400px", "500px"]} />
      </Stack>
    </>
  );
};

export default Home;
