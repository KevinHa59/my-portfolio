import {
  Collapse,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
const sample_data = [
  {
    year: 2017,
    title: <SchoolIcon />,
    detail:
      "Received Associate in Computer Science from Houston Community College, Houston, TX. Explored various aspects of computer science, including programming fundamentals, computer organization, and computer applications.",
    color: "green",
  },
  {
    year: 2017,
    title: <WorkIcon />,
    detail:
      "Interned as a Frontend Developer at DICENTRAL LTD, Vietnam. Gained hands-on experience in frontend development, working on projects involving HTML, CSS, and JavaScript.",
    color: "rgb(36, 152, 195)",
  },
  {
    year: 2020,
    title: <SchoolIcon />,
    detail:
      "Completed Bachelor of Computer Science from the University of Houston-Downtown, Houston, TX. Specialized in software engineering, database systems, and web programming.",
    color: "green",
  },
  {
    year: 2022,
    title: <WorkIcon />,
    detail:
      "Currently working as a Software Developer at Phase Ortho, Kentucky, United States. Collaborating with a team to develop production web applications on cloud platforms, leveraging technologies such as React JS, Node.js, and Azure services.",
    color: "rgb(36, 152, 195)",
  },
];

export default function TimeLine() {
  const [isIn, setIsIn] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsIn(true);
    }, 100);
  }, []);
  return (
    <Stack alignItems={"center"}>
      <IconButton
        sx={{
          width: "30px",
          minHeight: "30px",
          aspectRatio: "1/1",
          border: `6px solid ${isIn ? sample_data[0].color : "transparent"}`,
          borderRadius: "50%",
          transition: "ease 0.5s",
          cursor: "auto",
        }}
      >
        <ArrowDropDownCircleRoundedIcon
          sx={{
            color: "#fff",
            transform: `rotate(${isIn ? 0 : 180}deg)`,
            transition: "ease 0.5s",
          }}
        />
      </IconButton>
      <Collapse in={isIn} timeout={1000}>
        <Stack alignItems={"center"} width={"100%"}>
          {sample_data.map((e, index) => {
            const isEven = index % 2;

            return (
              <Stack
                key={index}
                direction={isEven ? "row" : "row-reverse"}
                width={"100%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"stretch"}
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
                <Stack
                  sx={{
                    borderRadius: 0,
                    minWidth: "11px",
                    border: `5px solid ${e.color}`,
                    borderWidth: "0 5px 0 5px",
                    paddingY: 5,
                  }}
                />

                <Stack
                  width={"100%"}
                  direction={isEven ? "row" : "row-reverse"}
                  alignItems={"center"}
                  sx={{
                    textAlign: "center",
                  }}
                  paddingY={2}
                >
                  {isEven ? (
                    <ArrowRightIcon sx={{ color: e.color }} />
                  ) : (
                    <ArrowLeftIcon sx={{ color: e.color }} />
                  )}
                  <Divider
                    sx={{
                      width: "50px",
                      height: "1px",
                      background: "transparent",
                    }}
                  />
                  <Paper
                    sx={{
                      width: "100%",
                      paddingY: 3,
                      background: "transparent",
                      color: "#fff",
                      borderColor: "#fff",
                      boxShadow: "none",
                      paddingX: 2,
                      textAlign: "justify",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 100 }}>
                      {e.title}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 100 }}>
                      {e.detail}
                    </Typography>
                  </Paper>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Collapse>
      <IconButton
        sx={{
          width: "30px",
          minHeight: "30px",
          aspectRatio: "1/1",
          border: `6px solid ${
            isIn ? sample_data[sample_data.length - 1].color : "transparent"
          }`,
          borderRadius: "50%",
        }}
      >
        <ArrowDropDownCircleRoundedIcon
          sx={{
            color: "#fff",
            transform: `rotate(${isIn ? 180 : 0}deg)`,
            transition: "ease 0.5s",
          }}
        />
      </IconButton>
    </Stack>
  );
}
