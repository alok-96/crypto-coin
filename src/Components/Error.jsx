import React from "react";
import { Stack, Alert, AlertIcon , AlertTitle, AlertDescription} from "@chakra-ui/react";

const Error = () => {
  return (
    <Stack spacing={3} bgColor={"#ff405c"} color={"#222222"} direction={'column'}>
      <Alert status="error">
        <AlertIcon />
        <Stack direction={['column', 'column', 'row']}>
        <AlertTitle>There was an error processing your request !</AlertTitle>
        <AlertDescription>
          Please try again after sometime.
        </AlertDescription>
        </Stack>
      </Alert>
    </Stack>
  );
};

export default Error;
