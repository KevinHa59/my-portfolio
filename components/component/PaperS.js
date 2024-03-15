import { Paper, Stack } from "@mui/material";
import React from "react";
import {
  CornerBottomRightStyle1,
  CornerTopLeftStyle1,
} from "../../icons/corner-style-1";

export default function PaperS({ sx, children }) {
  return (
    <Stack
      sx={{
        border: "1px dashed rgba(255,255,255,0.7)",
        background: "rgba(24, 26, 27,0.5)",
        minWidth: "23%",
        maxWidth: "100%",
        transition: "ease 0.3s",
        position: "relative",
        ...sx,
      }}
    >
      <Frame />
      {children}
    </Stack>
  );
}

function Frame() {
  return (
    <>
      <CornerTopLeftStyle1
        sx={{
          position: "absolute",
          top: -8,
          left: -8,
          fontSize: "100px",
          color: "rgba(200,200,200,1)",
        }}
      />
      <CornerBottomRightStyle1
        sx={{
          position: "absolute",
          bottom: -8,
          right: -8,
          fontSize: "100px",
          color: "rgba(200,200,200,1)",
        }}
      />
    </>
  );
}
