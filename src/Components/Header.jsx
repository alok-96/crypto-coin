import React from "react";
import {
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Show,
  Hide,
  Container,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/App.css";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        position: "fixed",
        background: "transparent",
        backdropFilter: "blur(10px)",
        width: "100vw",
      }}
    >
      <Container maxW={"container.xl"}>
        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          h={["10vh", "10vh", "15vh"]}
        >
          <HStack alignItems={"center"}>
            <Text
              fontSize={["20px", "25px", "28px"]}
              fontWeight={"600"}
              color={"#ffffff"}
            >
              Crypto Coin
            </Text>
          </HStack>

          <Hide breakpoint="(max-width: 950px)">
            <HStack
              gap={"30px"}
              fontWeight={"500"}
              fontSize={"1.2rem"}
              color={"#ffffff"}
              cursor={"pointer"}
            >
              <p>
                <HashLink smooth to="/#heroSection">
                  Home
                </HashLink>
              </p>
              <p>
                <Link to="/coins">Market</Link>
              </p>
              <p>
                <HashLink smooth to="/#howToStart">
                  How To Start
                </HashLink>
              </p>
              <p>
                <HashLink smooth to="/#explore">
                  Explore
                </HashLink>
              </p>
            </HStack>
            <HStack
              fontWeight={"500"}
              gap={"30px"}
              color={"#ffffff"}
              fontSize={"1.2rem"}
              cursor={"pointer"}
            >
              <p>
                <HashLink smooth to="/#getStarted">
                  Sign Up
                </HashLink>
              </p>
              <button className="button">
                <HashLink smooth to="/#getStarted">
                  Get Started
                </HashLink>
              </button>
            </HStack>
          </Hide>

          <Show breakpoint="(max-width: 950px)">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<GiHamburgerMenu />}
                variant="none"
                color={"#ffffff"}
              />
              <MenuList bgColor={"#0f051d"}>
                <MenuItem bgColor={"#0f051d"} color={"#ffffff"}>
                  <HashLink smooth to="/#heroSection">
                    Home
                  </HashLink>
                </MenuItem>
                <MenuItem bgColor={"#0f051d"} color={"#ffffff"}>
                  <Link to="/coins">Market</Link>
                </MenuItem>
                <MenuItem bgColor={"#0f051d"} color={"#ffffff"}>
                  <HashLink smooth to="/#howToStart">
                    How To Start
                  </HashLink>
                </MenuItem>
                <MenuItem bgColor={"#0f051d"} color={"#ffffff"}>
                  <HashLink smooth to="/#explore">
                    Explore
                  </HashLink>
                </MenuItem>
                <MenuItem bgColor={"#0f051d"} color={"#ffffff"}>
                  <HashLink smooth to="/#getStarted">
                    Sign Up
                  </HashLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </Show>
        </HStack>
      </Container>
    </div>
  );
};

export default Header;
