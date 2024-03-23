import {
  Button,
  Collapse,
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
const button_style = (isActive = false) => {
  return {
    color: "#fff",
    textTransform: "none",
    padding: 0,
    paddingX: 2,
    fontSize: 16,
    fontWeight: 100,
    backdropFilter: isActive ? "blur(3px)" : "none",
    transition: "ease-in-out 0.5s",
    width: "max-content",
    borderBottom: `2px solid ${
      isActive ? colors.textHighlight : "transparent"
    }`,
    borderRadius: 0,
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
      <Stack direction={"row"}>
        <a href="#intro">
          <Button
            fullWidth
            onClick={() => handleSelectChange("introduction")}
            sx={{
              ...button_style(selected === "introduction"),
            }}
          >
            Introduction
          </Button>
        </a>
        <a href="#skills">
          <Button
            fullWidth
            size="small"
            onClick={() => handleSelectChange("skills")}
            sx={{
              ...button_style(selected === "skills"),
            }}
          >
            Skills
          </Button>
        </a>
        <a href="#edu">
          <Button
            fullWidth
            size="small"
            onClick={() => handleSelectChange("edu-exp")}
            sx={{
              ...button_style(selected === "edu-exp"),
            }}
          >
            Edu & Exp
          </Button>
        </a>
      </Stack>
    </Stack>
  );
}
