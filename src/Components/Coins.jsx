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
import Header from "./Header";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      }
    };

    fetchCoins();
  });

  return (
    <section style={{ background: "#0f051d", color: "#ffffff" }}>
      <Header />
      <Container maxW={"container.xl"} bgColor={""} paddingTop={"12vh"}>
        {loading ? (
          <div className="spinner">
            <Spinner size={"xl"} color={"rgb(255, 112, 238)"} />
          </div>
        ) : (
          <>
            <RadioGroup value={currency} onChange={setCurrency}>
              <HStack
                color={"#ffffff"}
                spacing={[4, 4, 8]}
                p={4}
                justifyContent={"center"}
              >
                <Radio value={"inr"} border={"2px solid #ffffff"}>
                  INR (₹)
                </Radio>
                <Radio value={"usd"} border={"2px solid #ffffff"}>
                  USD ($)
                </Radio>
                <Radio value={"eur"} border={"2px solid #ffffff"}>
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
    </section>
  );
};

export default Coins;
