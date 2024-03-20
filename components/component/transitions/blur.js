import { Fade, Slide, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

const style_in = {
  position: "relative",
  filter: "blur(0px)",
  opacity: 1,
  transform: "translateX(0%)",
};
const style_out = {
  position: "absolute",
  filter: "blur(50px)",
  opacity: 0,
  transform: "translateX(-10%)",
};
export default function Blur({ active = false, timeout = 500, children }) {
  const [isIn, setIsIn] = useState(active);
  const [style, setStyle] = useState(active ? style_out : style_out); // Start with initial blurred style

  useEffect(() => {
    if (active) {
      setStyle(style_in); // Transition in when becoming active
      setIsIn(true);
    } else {
      setStyle(style_out); // Transition out when becoming inactive
      const timer = setTimeout(() => {
        setIsIn(false);
        setStyle(style_in);
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [active, timeout]);

  return (
    isIn && (
      <Stack
        sx={{
          transition: `ease ${timeout / 1000}s`,
          ...style,
        }}
      >
        {children}
      </Stack>
    )
  );
}
