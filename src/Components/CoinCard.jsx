import React from "react";
import { VStack, Heading, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => {
  return (
    <Link to={`/coin/${id}`}>
      <VStack
        w={"200px"}
        h={"200px"}
        m={"4"}
        alignItems={"center"}
        justifyContent={"center"}
        bgColor={"linear-gradient(145deg, #cacaca, #f0f0f0)"}
        color={"black"}
        borderRadius={"40px"}
        boxShadow={"20px 20px 60px #bebebe, -20px -20px 60px #ffffff"}
        transition={"all 0.3s"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image src={img} w={10} h={10} />
        <Heading size={"md"} noOfLines={1}>
          {symbol}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{ price ? `${currencySymbol} ${price}` : 'NA'}</Text>
      </VStack>
    </Link>
  );
};

export default CoinCard;
