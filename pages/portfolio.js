import { resume } from "@/resume";
import { Divider, Paper, Stack, Typography, Zoom } from "@mui/material";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { CornerBL, Frame } from "../icons/cornr-bl";
import { Frame1 } from "../icons/frame-1";
import { CornerBR } from "../icons/cornr-br";
import { CornerTL } from "../icons/corner-tl";
import { CornerTR } from "../icons/cornr-tr";
import { Border } from "../icons/border";
import { TitleUnderline } from "../icons/title-underline";
export default function Portfolio() {
  const styles = {
    color: "#fff",
    fontFamily: "monospace",
  };

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minWidth: "100%",
        height: "100%",
        paddingY: 10,
        ...styles,
      }}
    >
      <Paper
        sx={{
          position: "relative",
          border: "1px dashed rgba(150, 150, 150, 1)",
          borderRadius: "50px",
          maxWidth: "1000px",
          background: "rgba(0,0,0,0.7)",
          background:
            "linear-gradient(155deg, rgba(5,5,5,0.5) 0, rgba(30,30,30,0.5) 17%, transparent 17%)",
          backdropFilter: "blur(5px)",
          color: "inherit",
          paddingY: "50px",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          overflow: "hidden",
        }}
      >
        <Frames />
        <Stack alignItems={"center"} padding={2} sx={{ color: "inherit" }}>
          <Stack direction={"row"}>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              textAlign={"center"}
              color={"inherit"}
            >
              Tong Ha
            </Typography>
          </Stack>
          <Frame1 sx={{ fontSize: "200px", height: "50px" }} />
          <Typography
            textAlign={"center"}
            variant="body2"
            fontFamily={"monospace"}
          >
            {Object.values(resume.personalInformation).join(" | ")}
          </Typography>
        </Stack>
        <Stack paddingY={2} gap={2}>
          <Title title={"Summary"} />
          <Stack paddingX={6}>
            <Typography variant="body2" fontFamily={"monospace"}>
              {resume.summary}
            </Typography>
          </Stack>
        </Stack>

        <Stack paddingY={2} sx={{ color: "inherit" }} gap={2}>
          <Title title={"Skills"} />
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            gap={2}
            paddingX={6}
            justifyContent={"space-evenly"}
            sx={{ color: "inherit" }}
          >
            {Object.entries(resume.skills).map((skill, index) => {
              return (
                <Zoom in={true} key={index} timeout={index * 100}>
                  <Paper
                    sx={{
                      borderRadius: "0 20px 0 0",
                      border: "1px dashed rgba(150, 150, 150, 1)",
                      borderLeft: "5px solid rgba(150, 150, 150, 1)",
                      boxShadow: "none",
                      background: "rgba(24, 26, 27,0.5)",
                      minWidth: "23%",
                      maxWidth: "100%",
                      transition: "ease 0.3s",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={"bold"}
                      fontFamily={"monospace"}
                      textTransform={"capitalize"}
                      textAlign={"center"}
                      sx={{
                        padding: 1,
                        color: "rgba(90, 169, 190,1)",
                      }}
                    >
                      {skill[0]}
                    </Typography>
                    <Divider />
                    <Stack padding={1} sx={{ color: "inherit" }}>
                      {skill[1].map((detail, _index) => {
                        return (
                          <Typography
                            key={_index}
                            variant="body2"
                            fontFamily={"monospace"}
                            sx={{
                              ":hover": { background: "rgba(255,255,255,0.1)" },
                              ...styles,
                            }}
                          >
                            <CodeIcon sx={{ fontSize: "12px" }} /> {detail}
                          </Typography>
                        );
                      })}
                    </Stack>
                  </Paper>
                </Zoom>
              );
            })}
          </Stack>
        </Stack>
        <Stack paddingY={2} gap={2}>
          <Title title={"Education"} />
          <Stack gap={4} paddingX={6}>
            {resume.education.map((edu, index) => (
              <Paper
                key={index}
                sx={{
                  borderRadius: "0 20px 0 0",
                  border: "1px dashed rgba(150, 150, 150, 1)",
                  boxShadow: "none",
                  background: "rgba(24, 26, 27,0.5)",
                  minWidth: "23%",
                  maxWidth: "100%",
                  transition: "ease 0.3s",
                  ...styles,
                }}
              >
                <Stack gap={1} padding={2}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={1}
                  >
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      gap={1}
                      sx={{ color: "rgba(90, 169, 190,1)" }}
                    >
                      <SchoolIcon sx={{ fontSize: "21px" }} />
                      <h3>{edu.institution}</h3>
                    </Stack>
                    <p>{edu.dates}</p>
                  </Stack>
                  <span>
                    <strong>Degree</strong>: {edu.degree}
                  </span>
                  <span>
                    <strong>Location</strong>: {edu.location}
                  </span>

                  <span>
                    <strong>GPA</strong>: {edu.gpa}
                  </span>
                  <span>
                    <strong>Honors</strong>: {edu.honors.join(", ")}
                  </span>
                  <span>
                    <strong>Relevant Coursework</strong>:{" "}
                    {edu.relevantCoursework.join(", ")}
                  </span>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Stack>

        <Stack paddingY={2} gap={2}>
          <Title title={"Experience"} />
          <Stack gap={4} paddingX={6}>
            {resume.experience.map((exp, index) => (
              <Paper
                key={index}
                sx={{
                  borderRadius: "0 20px 0 0",
                  border: "1px dashed rgba(150, 150, 150, 1)",
                  boxShadow: "none",
                  background: "rgba(24, 26, 27,0.5)",
                  minWidth: "23%",
                  maxWidth: "100%",
                  transition: "ease 0.3s",
                  ...styles,
                }}
              >
                <Stack gap={1} padding={2}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={1}
                  >
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      gap={1}
                      sx={{ color: "rgba(90, 169, 190,1)" }}
                    >
                      <WorkIcon sx={{ fontSize: "21px" }} />
                      <h3>{exp.position}</h3>
                    </Stack>
                    <p>{exp.dates}</p>
                  </Stack>
                  <span>
                    <strong>Company</strong>: {exp.company}
                  </span>
                  <span>
                    <strong>Location</strong>: {exp.location}
                  </span>

                  <span>
                    <strong>Responsibilities</strong>:
                  </span>
                  <Stack paddingLeft={5}>
                    {exp.responsibilities.map((re, _index) => {
                      return <li key={_index}>{re}</li>;
                    })}
                  </Stack>
                  <span>
                    <strong>Technologies</strong>:{" "}
                    {exp.technologiesUsed.join(", ")}
                  </span>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}

function Frames() {
  const frame_styles = {
    color: "rgb(200,200,200)",
    height: "132px",
    width: "200px",
    fontSize: "200px",
    position: "absolute",
  };
  return (
    <Stack
      sx={{ position: "absolute" }}
      top={-19}
      bottom={-19}
      left={-6}
      right={-6}
    >
      <Stack position={"relative"} width={"100%"} height={"100%"}>
        <CornerTL
          sx={{
            ...frame_styles,
            top: 0,
            left: 0,
          }}
        />
        <CornerTR
          sx={{
            ...frame_styles,
            top: 0,
            right: 0,
          }}
        />
        <CornerBL
          sx={{
            ...frame_styles,
            bottom: 0,
            left: 0,
          }}
        />
        <CornerBR
          sx={{
            ...frame_styles,
            bottom: 0,
            right: 0,
          }}
        />
      </Stack>
    </Stack>
  );
}

function MainBorder() {
  const color = 150;
  return (
    <Stack
      left={-24}
      right={-24}
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        position: "absolute",
      }}
    >
      <Border
        sx={{
          color: `rgb(${color}, ${color},${color})`,
          fontSize: "100px",
          width: "45px",
          height: "300px",
        }}
      />
      <Border
        sx={{
          color: `rgb(${color}, ${color},${color})`,
          fontSize: "100px",
          width: "45px",
          height: "300px",
        }}
      />
    </Stack>
  );
}

// title
function Title({ title }) {
  return (
    <Stack
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      position={"relative"}
    >
      <MainBorder />
      <Typography variant="h6" fontWeight={"bold"} fontFamily={"monospace"}>
        {title}
      </Typography>
      <TitleUnderline sx={{ fontSize: "250px", height: "20px" }} />
    </Stack>
  );
}
