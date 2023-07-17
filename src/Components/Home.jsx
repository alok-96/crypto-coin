import React from "react";
import logo from "../assets/logo.png";
import { Img, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="home">
      <Img src={logo} alt="" className="logo" />
      <Text fontSize={"50px"} fontWeight={"600"} color={"#c09956"}>
        Crypto Coin
      </Text>
    </div>
  );
};

export default Home;
