import {
  Divider,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import TypographyS from "../component/TypographyS";
import { resume } from "@/resume";
import { colors } from "../colors";
import { LinkedInIcon } from "../../icons/socials/linkedin";
import { GithubIcon } from "../../icons/socials/github";
import { useRouter } from "next/router";
import IconButtonRouting from "../component/button/button-routing";

export default function Introduction({ id }) {
  const router = useRouter();

  return (
    <Stack
      id={id}
      paddingX={1}
      justifyContent={"center"}
      height={"calc(100vh - 60px)"}
    >
      <Stack height={"80%"} justifyContent={"center"}>
        <TypographyS
          style={{ fontSize: "clamp(25px, 3vw, 50px)", fontWeight: "bold" }}
          variant={[
            {
              text: "Tong Ha",
              style: { fontWeight: "bold", color: colors.textHighlight },
            },
          ]}
        >
          Hello, I am Tong Ha
        </TypographyS>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.textHighlight }}
        >
          Software Developer
        </Typography>
        <Paper
          sx={{
            background: "rgba(100,100,100,0)",
            color: "rgba(230,230,230,1)",
            boxShadow: "none",
            width: {
              xl: "60%",
              md: "80%",
              xs: "100%",
            },
          }}
        >
          <Stack paddingY={6}>
            <TypographyS
              style={{ fontSize: "19px", textAlign: "justify" }}
              variant={[
                {
                  text: [
                    "Software Developer",
                    "ReactJS",
                    "NextJS",
                    "Node.js",
                    "Azure Functions",
                    "Spring Boot",
                    "MySQL",
                    "NoSQL",
                  ],
                  style: {
                    fontWeight: "bold",
                    color: colors.textHighlight,
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
      <Stack height={"20%"} gap={1}>
        <Stack direction={"row"} justifyContent={"center"}>
          <Tooltip title="Linked In">
            <IconButtonRouting link={"https://www.linkedin.com/in/tong-ha/"}>
              <LinkedInIcon
                sx={{ fontSize: "50px", color: colors.textHighlight }}
              />
            </IconButtonRouting>
          </Tooltip>
          <Tooltip title="Github">
            <IconButtonRouting link={"https://github.com/KevinHa59"}>
              <GithubIcon
                sx={{ fontSize: "50px", color: colors.textHighlight }}
              />
            </IconButtonRouting>
          </Tooltip>
        </Stack>
        <Divider sx={{ background: colors.textHighlight }} />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
        >
          <TypographyS
            variant={[
              { text: "(346)", style: { color: colors.textHighlight } },
            ]}
            style={{ width: "50%", textAlign: "right" }}
          >
            (346)-219 2755
          </TypographyS>
          <Divider
            orientation="vertical"
            sx={{ background: colors.textHighlight }}
          />
          <Typography textAlign={"left"} sx={{ width: "50%" }}>
            haquoctong59@gmail.com
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
