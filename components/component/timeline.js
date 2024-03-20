import { Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const sample_data = [
  {
    year: 1990,
    title: "Title 1",
    detail: "I was born",
    color: "rgb(36, 152, 195)",
  },
  {
    year: 1995,
    title: "Title 2",
    detail:
      "I was a student, that was 1995, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sunt dignissimos",
    color: "red",
  },
];

export default function TimeLine() {
  return (
    <Stack alignItems={"center"}>
      {sample_data.map((e, index) => {
        const isEven = index % 2;
        return (
          <Stack
            key={index}
            direction={isEven ? "row" : "row-reverse"}
            width={"100%"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              width={"100%"}
              direction={isEven ? "row-reverse" : "row"}
              alignItems={"center"}
            >
              <Divider
                sx={{ width: "50%", height: "1px", background: e.color }}
              />
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                  border: `4px solid ${e.color}`,
                  borderWidth: "1px 5px 5px 1px",
                  padding: 1,
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                }}
              >
                {e.year}
              </Stack>
            </Stack>
            <Paper
              sx={{
                borderRadius: 0,
                minWidth: "10px",
                background: e.color,
                paddingY: 5,
                height: "100%",
              }}
            />
            <Stack
              width={"100%"}
              direction={isEven ? "row" : "row-reverse"}
              alignItems={"center"}
              sx={{ textAlign: "center" }}
              paddingY={2}
            >
              {isEven ? (
                <ArrowRightIcon sx={{ color: e.color }} />
              ) : (
                <ArrowLeftIcon sx={{ color: e.color }} />
              )}
              <Divider
                sx={{ width: "50px", height: "1px", background: "transparent" }}
              />
              <Paper
                variant="outlined"
                sx={{
                  width: "100%",
                  paddingY: 3,
                  background: "transparent",
                  color: "#fff",
                  //   border: "none",
                  borderColor: "#fff",
                  boxShadow: "none",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 100 }}>
                  {e.title}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  {e.detail}
                </Typography>
              </Paper>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}
