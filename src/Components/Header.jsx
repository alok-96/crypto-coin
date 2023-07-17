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
      color={"#c09956"}
      h={"10vh"}
      borderBottom={"1px solid #c09956"}
    >
      <HStack alignItems={"center"}>
        <Img src={logo} w={"50px"}></Img>
        <Text fontSize={"30px"} fontWeight={"500"}>
          Crypto Coin
        </Text>
      </HStack>
      
      <HStack gap={"30px"}>
        <Button variant={"link"} color={"#c09956"}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant={"link"} color={"#c09956"}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"link"} color={"#c09956"}>
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
