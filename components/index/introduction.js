import { portfolio } from "@/portfolio";
import { Fade, Grow, Paper, Slide, Stack, Typography } from "@mui/material";
import React from "react";
import TypographyS from "../component/TypographyS";
import Blur from "../component/transitions/blur";
import { resume } from "@/resume";

export default function Introduction({ isActive }) {
  return (
    <Blur active={isActive} timeout={500}>
      <Stack gap={4} paddingX={1}>
        <TypographyS
          style={{ fontSize: "clamp(25px, 2vw, 40px)" }}
          variant={[
            {
              text: "Tong Ha",
              style: { fontWeight: "bold", color: "rgb(17, 227, 254)" },
            },
          ]}
        >
          Hello, I'm Tong Ha
        </TypographyS>
        <Paper
          sx={{
            background: "rgba(100,100,100,0)",
            backdropFilter: "blur(3px)",
            color: "rgba(230,230,230,1)",
            width: {
              xl: "60%",
              md: "80%",
              xs: "100%",
            },
          }}
        >
          <Stack padding={2}>
            <TypographyS
              style={{ fontSize: "19px", textAlign: "justify" }}
              variant={[
                {
                  text: [
                    "Software Developer",
                    "ReactJS",
                    "NextJS",
                    "Node.js",
                    "Spring Boot",
                  ],
                  style: {
                    fontWeight: "bold",
                    color: "rgb(17, 227, 254)",
                    textTransform: "uppercase",
                  },
                },
              ]}
            >
              {resume.introduction}
            </TypographyS>
          </Stack>
        </Paper>
      </Stack>
    </Blur>
  );
}
