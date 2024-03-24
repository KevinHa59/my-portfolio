import {
  Button,
  Collapse,
  Fade,
  Grow,
  Paper,
  Slide,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { colors } from "../colors";
import StyleSpan from "../component/TypographyS";
import ButtonHamburger from "../component/button/button-hamburger";
const button_style = (isActive = false, isMobile = false) => {
  return {
    color: "#fff",
    textTransform: "none",
    padding: 0,
    paddingX: 2,
    fontSize: isMobile ? 25 : 16,
    fontWeight: 100,
    backdropFilter: isActive ? "blur(3px)" : "none",
    transition: "ease-in-out 0.5s",
    width: "100%",
    borderBottom: `2px solid ${
      isActive ? colors.textHighlight : "transparent"
    }`,
    borderRadius: 0,
    whiteSpace: "nowrap",
    ":hover": {
      background: "rgba(255,255,255,0.1)",
    },
  };
};

export default function Menu() {
  const [selected, setSelected] = useState("introduction");

  const handleSelectChange = (val) => {
    setSelected(val);
  };

  return (
    <Stack
      width={"100%"}
      height={"100%"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      paddingX={2}
      zIndex={20}
      sx={{
        borderBottom: `1px solid ${colors.textHighlight}`,
        boxShadow: `0 5px 20px ${colors.textHighlight}40`,
      }}
    >
      <StyleSpan
        style={{ fontFamily: "fantasy", fontSize: "30px" }}
        variant={[
          {
            text: "Tong",
            style: {
              color: colors.textHighlight,
            },
          },
        ]}
      >
        Tong Ha
      </StyleSpan>
      <ButtonHamburger>
        {(isMobile) => (
          <Stack
            direction={isMobile ? "column" : "row"}
            width={isMobile ? "100%" : "max-content"}
          >
            <Fade in={true} timeout={1000} style={{ transitionDelay: "100ms" }}>
              <a href="#intro">
                <Button
                  fullWidth
                  onClick={() => handleSelectChange("introduction")}
                  sx={{
                    ...button_style(selected === "introduction", isMobile),
                  }}
                >
                  Introduction
                </Button>
              </a>
            </Fade>
            <Fade in={true} timeout={1000} style={{ transitionDelay: "200ms" }}>
              <a href="#skills">
                <Button
                  fullWidth
                  onClick={() => handleSelectChange("skills")}
                  sx={{
                    ...button_style(selected === "skills", isMobile),
                  }}
                >
                  Skills
                </Button>
              </a>
            </Fade>
            <Fade in={true} timeout={1000} style={{ transitionDelay: "300ms" }}>
              <a href="#edu">
                <Button
                  fullWidth
                  onClick={() => handleSelectChange("edu-exp")}
                  sx={{
                    ...button_style(selected === "edu-exp", isMobile),
                  }}
                >
                  Edu & Exp
                </Button>
              </a>
            </Fade>
          </Stack>
        )}
      </ButtonHamburger>
    </Stack>
  );
}
