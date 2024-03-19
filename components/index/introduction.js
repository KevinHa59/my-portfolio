import { portfolio } from "@/portfolio";
import { Fade, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import TypographyS from "../component/TypographyS";

export default function Introduction({ isActive }) {
  return (
    <Fade in={isActive} timeout={500}>
      <Stack gap={4}>
        <Typography variant="h4">Hello, I'm Tong Ha</Typography>
        <Paper
          sx={{
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(3px)",
            color: "rgba(230,230,230,1)",
            width: "80%",
          }}
        >
          <Stack padding={2}>
            <TypographyS
              variant={[
                {
                  text: [
                    "Software Developer",
                    "ReactJS",
                    "NextJS",
                    "Node.js",
                    "Java",
                  ],
                  style: { fontWeight: "bold", color: "rgb(17, 227, 254)" },
                },
              ]}
            >
              {portfolio.introduction}
            </TypographyS>
          </Stack>
        </Paper>
      </Stack>
    </Fade>
  );
}
