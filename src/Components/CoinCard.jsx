import React from "react";
import { VStack, Heading, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => {
  return (
    <Link to={`/coin/${id}`}>
      <VStack
        className="tooltip"
        w={"200px"}
        h={"200px"}
        m={"4"}
        alignItems={"center"}
        justifyContent={"center"}
        color={"white"}
        style={{
          borderImage:
            "linear-gradient(rgb(90, 115, 241), rgb(255, 112, 238)) 1",
          borderWidth: " 2px",
          borderStyle: "solid",
        }}
        transition={"all 0.3s"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          src={img}
          w={10}
          h={10}
          style={{
            filter: "drop-shadow(0 0 0.75rem crimson)",
          }}
        />
        <Heading size={"md"} noOfLines={1}>
          {name}
        </Heading>
        <Text noOfLines={1}>{price ? `${currencySymbol} ${price}` : "NA"}</Text>
        <span className="tooltipText">Click for the details</span>
      </VStack>
    </Link>
  );
};

export default CoinCard;
