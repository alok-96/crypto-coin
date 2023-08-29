import React from "react";
import asset2 from "../assets/asset2.png";
import asset3 from "../assets/asset3.png";
import asset4 from "../assets/asset4.png";
import asset5 from "../assets/asset5.png";
import { RiAdminFill } from "react-icons/ri";
import { MdOutlineAccountBalance } from "react-icons/md";
import { BsCurrencyBitcoin } from "react-icons/bs";
import {
  Box,
  Container,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "./Header";
import asset1 from "../assets/asset1.png";

const Home = () => {
  return (
    <>
      <section
        id="heroSection"
        style={{
          backgroundImage: "linear-gradient(0deg,#0f051d 30%,#130749 70%)",
        }}
      >
        <Header />
        <Container maxW={"container.xl"}>
          <VStack
            alignItems={["center", "center", "start"]}
            h={"100vh"}
            w={"full"}
            justifyContent={"center"}
          >
            <Stack
              direction={["column", "column", "row"]}
              alignItems={"center"}
              justifyContent={"space-between"}
              py={"8"}
              w={"full"}
            >
              <Heading
                fontSize={["2rem", "3rem", "4rem"]}
                lineHeight={["50px", "75px", "100px"]}
                my={"4"}
                flexBasis={"70%"}
                textTransform={"uppercase"}
                fontFamily={"Space Grotesk"}
                color={"#ffffff"}
                textAlign={["center", "center", "start"]}
              >
                Buy, trade, and hold
                <span className="gradientText"> crypto currencies</span>
              </Heading>

              <Img
                src={asset1}
                w={["400px", "400px", "360px", "500px"]}
                objectFit={"fill"}
              />
            </Stack>
            <button className="button">Learn More</button>
          </VStack>
        </Container>
      </section>

      <section
        id="howToStart"
        style={{ background: "#0f051d", color: "#ffffff" }}
      >
        <Container maxW={"container.xl"}>
          <Heading
            fontSize={["2rem", "3rem", "4rem"]}
            py={"10"}
            textTransform={"uppercase"}
            fontFamily={"Space Grotesk"}
            textAlign={"center"}
          >
            Build your <span className="gradientText">crypto portfolio</span>
          </Heading>
          <Stack
            direction={["column", "column", "row"]}
            background={"#0f051d"}
            alignItems={"center"}
            w={"full"}
          >
            <Img
              src={asset2}
              width={["300px", "400px", "500px"]}
              flex={["100%", "100%", "60%"]}
              objectFit={"contain"}
              style={{ filter: "drop-shadow(2mm 0mm 15mm rgb(88, 52, 99))" }}
            />
            <VStack>
              <Box
                borderRadius={"20px"}
                border={"2px solid rgb(90, 115, 241)"}
                backgroundColor={"rgba(15, 5, 29, 0.5)"}
                padding={"20px"}
                my={"4"}
              >
                <HStack>
                  <Box
                    padding={"10px"}
                    background={
                      "-webkit-linear-gradient(45deg, rgb(90, 115, 241), rgb(255, 112, 238))"
                    }
                    borderRadius={"10px"}
                  >
                    <RiAdminFill size={"20px"} />
                  </Box>
                  <Heading fontSize={"xl"} textTransform={"uppercase"}>
                    Verify Your identity
                  </Heading>
                </HStack>
                <Text>
                  Complete the identity verification process to secure your
                  account and transactions.
                </Text>
              </Box>
              <Box
                borderRadius={"20px"}
                border={"2px solid rgb(90, 115, 241)"}
                backgroundColor={"rgba(15, 5, 29, 0.5)"}
                padding={"20px"}
                my={"4"}
              >
                <HStack>
                  <Box
                    padding={"10px"}
                    background={
                      "-webkit-linear-gradient(45deg, rgb(90, 115, 241), rgb(255, 112, 238))"
                    }
                    borderRadius={"10px"}
                  >
                    <MdOutlineAccountBalance size={"20px"} />
                  </Box>
                  <Heading fontSize={"xl"} textTransform={"uppercase"}>
                    Fund your account
                  </Heading>
                </HStack>
                <Text>
                  Add funds to your crypto account to start trading crypto. You
                  can add funds with a variety of payment methods.
                </Text>
              </Box>
              <Box
                borderRadius={"20px"}
                border={"2px solid rgb(90, 115, 241)"}
                backgroundColor={"rgba(15, 5, 29, 0.5)"}
                padding={"20px"}
                my={"4"}
              >
                <HStack>
                  <Box
                    padding={"10px"}
                    background={
                      "-webkit-linear-gradient(45deg, rgb(90, 115, 241), rgb(255, 112, 238))"
                    }
                    borderRadius={"10px"}
                  >
                    <BsCurrencyBitcoin size={"20px"} />
                  </Box>
                  <Heading fontSize={"xl"} textTransform={"uppercase"}>
                    Start trading
                  </Heading>
                </HStack>
                <Text>
                  You're good to go! Buy/sell crypto, set up recurring buys for
                  your investments, and discover what Binance has to offer.
                </Text>
              </Box>
            </VStack>
          </Stack>
        </Container>
      </section>

      <section id="explore" style={{ background: "#0f051d", color: "#ffffff" }}>
        <Container maxW={"container.xl"} py={"12"}>
          <Heading
            fontSize={["2rem", "3rem", "4rem"]}
            py={"8"}
            textTransform={"uppercase"}
            fontFamily={"Space Grotesk"}
            textAlign={"center"}
          >
            Explore endless
            <span className="gradientText"> opportunities </span>
          </Heading>
          <Stack
            direction={["column", "column", "row"]}
            justifyContent={"space-between"}
            wrap={"wrap"}
            py={"8"}
            gap={["0px", "0px", "50px"]}
          >
            <Box
              flex={"25%"}
              borderRadius={"25px"}
              border={"2px solid rgb(90, 115, 241)"}
              padding={"20px"}
              my={"4"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Img
                src={asset3}
                width={"200px"}
                height={"200px"}
                alignSelf={"center"}
              />
              <Heading fontSize={"lg"} my={"4"} className={"gradientText"}>
                Advanced Data Encryption
              </Heading>
              <Text>
                Your transaction data is secured via end-to-end encryption,
                ensuring that only you have access to your personal information.
              </Text>
            </Box>
            <Box
              flex={"25%"}
              borderRadius={"25px"}
              border={"2px solid rgb(90, 115, 241)"}
              padding={"20px"}
              my={"4"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Heading fontSize={"lg"} my={"4"} className={"gradientText"}>
                Secure Asset Fund for Users
              </Heading>
              <Text>
                We store 10% of all trading fees in a secure asset fund to
                protect a share of user funds.
              </Text>
              <Img
                src={asset5}
                width={"200px"}
                height={"200px"}
                alignSelf={"center"}
              />
            </Box>
            <Box
              flex={"25%"}
              borderRadius={"25px"}
              border={"2px solid rgb(90, 115, 241)"}
              padding={"20px"}
              my={"4"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Img
                src={asset4}
                width={"200px"}
                height={"200px"}
                alignSelf={"center"}
              />
              <Heading fontSize={"lg"} my={"4"} className={"gradientText"}>
                Personalised Access Control
              </Heading>
              <Text>
                Personalized access control allows you to restrict devices and
                addresses that can access your account, for greater ease of
                mind.
              </Text>
            </Box>
          </Stack>
        </Container>
      </section>

      <section
        id="getStarted"
        style={{ background: "#0f051d", color: "#ffffff" }}
      >
        <Container maxW={"container.xl"} py={"12"}>
          <VStack>
            <Heading
              fontSize={["2rem", "3rem", "4rem"]}
              lineHeight={["50px", "75px", "100px"]}
              py={"8"}
              textTransform={"uppercase"}
              fontFamily={"Space Grotesk"}
              textAlign={"center"}
            >
              Start earning
              <span className="gradientText"> today </span>
            </Heading>
            <button className="button">Sign Up Now</button>
          </VStack>
        </Container>
      </section>
    </>
  );
};

export default Home;
