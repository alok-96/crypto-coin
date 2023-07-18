import React from "react";
import { HStack, Button, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <HStack
      p={"4"}
      justifyContent={"space-between"}
      alignItems={"center"}
      h={"10vh"}
      boxShadow={'10px 0px 10px #222222'}
    >
      <HStack alignItems={"center"}>
        <Img src={logo} w={"50px"}></Img>
        <Text fontSize={"30px"} fontWeight={"500"} color={"#986d2c"}>
          Crypto Coin
        </Text>
      </HStack>

      <HStack gap={"30px"}>
        <Button variant={"link"} color={"#222222"}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant={"link"} color={"#222222"}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"link"} color={"#222222"}>
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
