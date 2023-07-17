import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import ExchangeCard from './ExchangeCard';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/exchanges"
        );
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchExchanges();
  });

  return (
    <Container maxW={"container.xl"} bgColor={""}>
      {loading ? (
        <div className="spinner">
          <Spinner size={"xl"} color={"#c09956"} />
        </div>
      ) : (
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {exchanges.map((i) => (
            <ExchangeCard
              key={i.id}
              name={i.name}
              img={i.image}
              rank={i.trust_score_rank}
              url={i.url}
            />
          ))}
        </HStack>
      )}
    </Container>
  );
};

export default Exchanges;
