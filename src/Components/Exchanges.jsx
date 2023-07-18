import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import ExchangeCard from './ExchangeCard';
import Error from './Error';

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

  if(error) return <Error />;
  return (
    <Container maxW={"container.xl"} bgColor={""}>
      {loading ? (
        <div className="spinner">
          <Spinner size={"xl"} color={"#986d2c"} />
        </div>
      ) : (
        <HStack wrap={"wrap"} justifyContent={"space-evenly"} marginTop={'8'}>
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
