import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [isVisible, SetIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        SetIsVisible(true);
      } else {
        SetIsVisible(false);
      }
    });
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      style={{
        display: isVisible ? "block" : "none",
        position: "fixed",
        bottom: "10vh",
        right: "20px",
        zIndex: "1",
      }}
      onClick={goToTop}
    >
      <AiOutlineArrowUp color="#986d2c" />
    </Button>
  );
};

export default ScrollToTop;
