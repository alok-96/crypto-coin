import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

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
    <Box
      style={{
        display: isVisible ? "block" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1",
        cursor: "pointer",
      }}
      onClick={goToTop}
    >
      <MdKeyboardArrowUp color="#ffffff" size={'30px'} />
    </Box>
  );
};

export default ScrollToTop;
