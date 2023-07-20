import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Spinner,
  HStack,
  RadioGroup,
  Radio,
  Box,
  VStack,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Chart from "./Chart";

const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const params = useParams();
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";

  const buttons = ["24h", "7d", "15d", "30d", "90d", "1y", "max"];
  const changeChartDetails = (i) => {
    switch (i) {
      case "1d":
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
        setDays(1);
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
        setError(true);
        setLoading(false);
      }
    };

    fetchCoin();
  }, [params.id, currency, days]);

  if (error) return <Error />;
  return (
    <Container maxW={"container.xl"} bgColor={""} color={"#222222"}>
      {loading ? (
        <div className="spinner">
          <Spinner size={"xl"} color={"#986d2c"} />
        </div>
      ) : (
        <>
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
            <HStack spacing={8} m={4} justifyContent={"center"}>
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

          {/* Buttons for selecting No. of days */}
          <HStack wrap={"wrap"} justifyContent={"center"} p={"4"}>
            {buttons.map((i) => (
              <Button
                key={i}
                onClick={() => changeChartDetails(i)}
                color={"#222222"}
                bgColor={"#b5b5b5"}
                mx={["1", "2", "4"]}
              >
                {i}
              </Button>
            ))}
          </HStack>

          {/* Currency Symbol and Range for 24 Hour */}
          <VStack alignItems={"flex-start"} spacing={"4"} py={"4"}>
            <Text alignSelf={"center"} opacity={"0.7"} fontSize={"small"}>
              Last Updated on {coin.market_data.last_updated}
            </Text>
            <Image src={coin.image.large} w={"16"} h={"16"} />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {coin.market_data.current_price[currency]}
              </StatNumber>
              <StatHelpText>
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

            <Badge
              fontSize={"2xl"}
              bgColor={"#986d2c"}
            >{`#${coin.market_cap_rank}`}</Badge>

            {/* Range Bar */}
            <VStack w={"full"}>
              <Progress w={"full"} value={50} colorScheme={"facebook"} />
              <HStack justifyContent={"space-between"} w={"full"}>
                <Badge
                  children={`${currencySymbol} ${coin.market_data.high_24h[currency]}`}
                  colorScheme={"red"}
                />
                <Text fontSize={"sm"}>24h Range</Text>
                <Badge
                  children={`${currencySymbol} ${coin.market_data.low_24h[currency]}`}
                  colorScheme={"green"}
                />
              </HStack>
            </VStack>
          </VStack>

          {/* Some other details about selected coin */}
          <Box w={"full"} py={"4"}>
            <Item title={"Max Supply"} value={coin.market_data.max_supply} />
            <Item
              title={"Circulating Supply"}
              value={coin.market_data.circulating_supply}
            />
            <Item
              title={"Market Cap"}
              value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
            />
            <Item
              title={"All Time Low"}
              value={`${currencySymbol}${coin.market_data.atl[currency]}`}
            />
            <Item
              title={"All Time High"}
              value={`${currencySymbol}${coin.market_data.ath[currency]}`}
            />
          </Box>
        </>
      )}
    </Container>
  );
};

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} fontWeight={"500"} my={"4"}>
    <Text>{title}</Text>
    <Text>{value}</Text>
  </HStack>
);

export default CoinDetails;
