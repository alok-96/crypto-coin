import React from "react";
import { Stack, Alert, AlertIcon , AlertTitle, AlertDescription, Container} from "@chakra-ui/react";

const Error = () => {
  return (
    <Container minH={'100vh'} maxW={'container.xl'} p={'0'}>
      <Stack
        spacing={3}
        bgColor={"#ff405c"}
        color={"#222222"}
        direction={"column"}
      >
        <Alert status="error">
          <AlertIcon />
          <Stack direction={["column", "column", "row"]}>
            <AlertTitle>
              There was an error processing your request !
            </AlertTitle>
            <AlertDescription>
              Please try again after sometime.
            </AlertDescription>
          </Stack>
        </Alert>
      </Stack>
    </Container>
  );
};

export default Error;
