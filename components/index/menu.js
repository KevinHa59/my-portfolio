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

const button_style = (isActive = false) => {
  return {
    color: "#fff",
    textTransform: "none",
    fontSize: 18,
    fontWeight: 100,
    display: "flex",
    justifyContent: "flex-end",
    background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
    backdropFilter: isActive ? "blur(3px)" : "none",
    ":hover": {
      background: "rgba(255,255,255,0.1)",
    },
  };
};

export default function Menu({ onChange }) {
  const [selected, setSelected] = useState(0);

  const handleSelectChange = (val) => {
    setSelected(val);
    onChange && onChange(val);
  };

  return (
    <Stack paddingY={5}>
      <Button
        onClick={() => handleSelectChange(0)}
        sx={{
          ...button_style(selected === 0),
        }}
      >
        Introduction
      </Button>
      <Button
        onClick={() => handleSelectChange(1)}
        sx={{
          ...button_style(selected === 1),
        }}
      >
        About Me
      </Button>
      <Button
        onClick={() => handleSelectChange(2)}
        sx={{
          ...button_style(selected === 2),
        }}
      >
        Skills
      </Button>
      <Button
        onClick={() => handleSelectChange(3)}
        sx={{
          ...button_style(selected === 3),
        }}
      >
        Projects
      </Button>
    </Stack>
  );
}
