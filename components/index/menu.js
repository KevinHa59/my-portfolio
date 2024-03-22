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
import ButtonCollapse from "../component/button-collapse";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const [selected, setSelected] = useState("introduction");

  const handleSelectChange = (val) => {
    router.push({
      pathname: router.pathname,
      query: {
        tab: val,
      },
    });
    setSelected(val);
    onChange && onChange(val);
  };

  useEffect(() => {
    const query = router.query;
    if (query.tab) {
      setSelected(query.tab);
    }
  }, [router]);

  return (
    <Stack paddingY={5} height={"100%"} sx={{ position: "relative" }}>
      <ButtonCollapse title="About Me">
        <Button
          fullWidth
          size="small"
          onClick={() => handleSelectChange("introduction")}
          sx={{
            ...button_style(selected === "introduction"),
          }}
        >
          Introduction
        </Button>
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
        <Button
          fullWidth
          size="small"
          onClick={() => handleSelectChange("edu-exp")}
          sx={{
            ...button_style(selected === "edu-exp"),
          }}
        >
          Test
        </Button>
      </ButtonCollapse>
    </Stack>
  );
}
