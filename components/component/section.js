import { Stack, Typography } from "@mui/material";
import React from "react";
import { styles } from "../styles";

export default function Section({
  id,
  sx,
  title,
  background,
  inner_sx,
  children,
}) {
  return (
    <Stack
      id={id}
      alignItems={"center"}
      zIndex={2}
      sx={{
        width: "100%",
        position: "relative",
        ...sx,
      }}
    >
      <MenuSection background={background} />
      {title && <VerticalText text={title} />}

      <Stack
        sx={{
          width: {
            xl: "1500px",
            lg: "1200px",
            md: "900px",
            xs: "100%",
          },
          ...inner_sx,
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
}

function VerticalText({ text }) {
  return (
    <Typography
      sx={{
        position: "absolute",
        right: 0,
        bottom: 10,
        writingMode: "vertical-rl",
        textOrientation: "sideways",
        transform: "rotate(180deg)",
        opacity: 0.1,
        whiteSpace: "nowrap",
        fontSize: styles.fontSize.sideText,
      }}
    >
      {text}
    </Typography>
  );
}

function MenuSection({ background = "transparent" }) {
  return (
    <Stack
      height={"60px"}
      sx={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 2,
        left: 0,
        background: background,
      }}
    />
  );
}
