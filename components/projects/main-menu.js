import { Collapse, Fade, Paper, Stack, Zoom } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function MainMenu() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 1000);
  }, []);
  return (
    <Stack
      position={"fixed"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"max-content"}
      bottom={20}
    >
      <Collapse
        orientation="horizontal"
        timeout={2000}
        in={isActive}
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Fade in={!isActive} timeout={1000}>
          <NavigateBeforeIcon
            sx={{ fontSize: "40px", position: "absolute", left: "0", top: 0 }}
          />
        </Fade>
        <Fade in={!isActive} timeout={1000}>
          <NavigateNextIcon
            sx={{ fontSize: "40px", position: "absolute", right: "0", top: 0 }}
          />
        </Fade>
        <Stack width={"100vw"} alignItems={"center"} position={"relative"}>
          <Paper
            sx={{
              width: "max-content",
              background: "transparent",
              borderRadius: "30px",
              overflow: "hidden",
            }}
          ></Paper>
        </Stack>
      </Collapse>
    </Stack>
  );
}
