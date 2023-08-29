import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Spinner,
  HStack,
  RadioGroup,
  Radio,
  Box,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Chart from "./Chart";
import Header from "./Header";

const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const params = useParams();
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";

  const buttons = ["24h", "7d", "15d", "30d", "90d", "1y", "max"];
  const changeChartDetails = (i) => {
    switch (i) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "15d":
        setDays("15d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "90d":
        setDays("90d");
        setLoading(true);
        break;
      case "1y":
        setDays("365d");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;

      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  };

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${params.id}`
        );
        const { data: chartData } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        // console.log(data);
        // console.log(chartData);
        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchCoin();
  }, [params.id, currency, days]);

  return (
    <section
      style={{ background: "#0f051d", color: "#ffffff", paddingBottom: "20px" }}
    >
      <Header />
      <Container
        maxW={"container.xl"}
        bgColor={""}
        color={"#222222"}
        paddingTop={"12vh"}
      >
        {loading ? (
          <div className="spinner">
            <Spinner size={"xl"} color={"rgb(255, 112, 238)"} />
          </div>
        ) : (
          <>
            {/* Currency Symbol  */}
            <HStack
              alignItems={"center"}
              w={"100%"}
              spacing={"4"}
              py={"4"}
              color={"#ffffff"}
            >
              <Badge
                fontSize={"2xl"}
                bgColor={"#3b4da8"}
                color={"white"}
              >{`#${coin.market_cap_rank}`}</Badge>
              <Image
                src={coin.image.large}
                w={"16"}
                h={"16"}
                alignSelf={"start"}
                marginTop={"4"}
                style={{
                  filter: "drop-shadow(0 0 0.75rem crimson)",
                }}
              />

              <Stat alignSelf={"start"}>
                <StatLabel textAlign={"start"}>{coin.name}</StatLabel>
                <StatNumber>
                  {currencySymbol}
                  {coin.market_data.current_price[currency]}
                </StatNumber>
                <StatHelpText textAlign={"start"}>
                  <StatArrow
                    type={
                      coin.market_data.price_change_percentage_24h > 0
                        ? "increase"
                        : "decrease"
                    }
                  />
                  {coin.market_data.price_change_percentage_24h}%
                </StatHelpText>
              </Stat>
            </HStack>

            {/* Graph */}
            <Box w={"full"}>
              <Chart
                arr={chartArray}
                currencySymbol={currencySymbol}
                days={days}
              />
            </Box>

            {/* RadioButtons for selecting currency */}
            <RadioGroup value={currency} onChange={setCurrency}>
              <HStack
                spacing={[4, 4, 8]}
                m={4}
                justifyContent={"center"}
                color={"#ffffff"}
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

            {/* Buttons for selecting No. of days */}
            <HStack wrap={"wrap"} justifyContent={"center"} py={"4"}>
              {buttons.map((i) => (
                <Button
                  key={i}
                  isDisabled={i === days}
                  onClick={() => changeChartDetails(i)}
                  color={"#ffffff"}
                  bgColor={"#3b4da8"}
                  mx={["1", "2", "4"]}
                >
                  {i}
                </Button>
              ))}
            </HStack>
            <Text
              width={"full"}
              opacity={"0.7"}
              fontSize={"small"}
              color={"#ffffff"}
              style={{ textAlign: "center" }}
            >
              Last Updated on {coin.market_data.last_updated}
            </Text>
          </>
        )}
      </Container>
    </section>
  );
};

export default CoinDetails;
