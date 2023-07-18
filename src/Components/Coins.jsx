import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Spinner,
  HStack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoins();
  });

  return (
    <Container maxW={"container.xl"} bgColor={""}>
      {loading ? (
        <div className="spinner">
          <Spinner size={"xl"} color={"#986d2c"} />
        </div>
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency}>
            <HStack
              color={"#222222"}
              spacing={8}
              m={4}
              justifyContent={"center"}
            >
              <Radio value={"inr"} border={"2px solid #222222"}>
                INR (₹)
              </Radio>
              <Radio value={"usd"} border={"2px solid #222222"}>
                USD ($)
              </Radio>
              <Radio value={"eur"} border={"2px solid #222222"}>
                EUR (€)
              </Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                key={i.id}
                id={i.id}
                name={i.name}
                img={i.image}
                symbol={i.symbol}
                price={i.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
