import React from "react";
import {
  HStack,
  Button,
  Img,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Show,
  Hide,
} from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/App.css";

const Header = () => {
  return (
    <HStack
      p={["2", "4"]}
      justifyContent={"space-between"}
      alignItems={"center"}
      h={["8vh", "9vh", "10vh"]}
      boxShadow={"10px 0px 10px #222222"}
    >
      <HStack alignItems={"center"}>
        <Img src={logo} w={"50px"}></Img>
        <Text
          fontSize={["20px", "25px", "30px"]}
          fontWeight={"500"}
          color={"#986d2c"}
        >
          Crypto Coin
        </Text>
      </HStack>

      <Hide breakpoint="(max-width: 600px)">
        <HStack gap={"30px"}>
          <Button variant={"link"} color={"#222222"}>
            <Link to="/">Home</Link>
          </Button>
          <Button variant={"link"} color={"#222222"}>
            <Link to="/exchanges">Exchanges</Link>
          </Button>
          <Button variant={"link"} color={"#222222"}>
            <Link to="/coins">Coins</Link>
          </Button>
        </HStack>
      </Hide>

      <Show breakpoint="(max-width: 600px)">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<BiMenuAltRight />}
            variant="outline"
            border={"1px solid #222222"}
            color={"#222222"}
          />
          <MenuList bgColor={"#e0e0e0"}>
            <MenuItem bgColor={"#e0e0e0"} color={"#222222"}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem bgColor={"#e0e0e0"} color={"#222222"}>
              <Link to="/exchanges">Exchanges</Link>
            </MenuItem>
            <MenuItem bgColor={"#e0e0e0"} color={"#222222"}>
              <Link to="/coins">Coins</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Show>
    </HStack>
  );
};

export default Header;
