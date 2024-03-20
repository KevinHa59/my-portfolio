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
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
const button_style = (isActive = false) => {
  return {
    color: "#fff",
    textTransform: "none",
    fontSize: 18,
    fontWeight: 100,
    display: "flex",
    justifyContent: "flex-end",
    background: isActive
      ? "linear-gradient(to right, transparent, rgba(255,255,255,0.1))"
      : "transparent",
    backdropFilter: isActive ? "blur(3px)" : "none",
    transition: "ease-in-out 0.5s",
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
        endIcon={selected === 0 && <ArrowLeftIcon />}
        sx={{
          ...button_style(selected === 0),
        }}
      >
        Introduction
      </Button>
      <Button
        onClick={() => handleSelectChange(1)}
        endIcon={selected === 1 && <ArrowLeftIcon />}
        sx={{
          ...button_style(selected === 1),
        }}
      >
        Skills
      </Button>
      <Button
        onClick={() => handleSelectChange(2)}
        endIcon={selected === 2 && <ArrowLeftIcon />}
        sx={{
          ...button_style(selected === 2),
        }}
      >
        Projects
      </Button>
    </Stack>
  );
}
