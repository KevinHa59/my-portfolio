import { Button, Collapse, Stack } from "@mui/material";
import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowDownIcon from "@mui/icons-material/ArrowDropDown";
export default function ButtonCollapse({
  title = "button",
  sx_button,
  sx_collapse,
  children,
}) {
  const [expanse, setExpanse] = useState(false);
  return (
    <Stack sx={{ position: "sticky", top: 50 }}>
      <Button
        onClick={() => setExpanse((prev) => !prev)}
        sx={{
          color: "#fff",
          textTransform: "none",
          fontSize: 18,
          fontWeight: 100,
          display: "flex",
          justifyContent: "flex-end",
          background: "transparent",
          transition: "ease-in-out 0.5s",
          ":hover": {
            background: "rgba(255,255,255,0.1)",
          },
          ...sx_button,
        }}
        endIcon={expanse ? <ArrowDownIcon /> : <ArrowLeftIcon />}
      >
        {title}
      </Button>
      <Collapse in={expanse}>
        <Stack
          sx={{
            borderRight: "1px solid #fff",
            padding: 1,
            paddingRight: 2,
            marginRight: "14px",
            ...sx_collapse,
          }}
        >
          {children}
        </Stack>
      </Collapse>
    </Stack>
  );
}
