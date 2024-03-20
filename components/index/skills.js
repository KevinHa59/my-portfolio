import React from "react";
import Blur from "../component/transitions/blur";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import StyleSpan from "../component/TypographyS";
import { ReactIcon } from "../../icons/skills/react";
import { NextIcon } from "../../icons/skills/next";
import { JavaScriptIcon } from "../../icons/skills/javascript";
import { MUIIcon } from "../../icons/skills/mui";
import { NodeJSIcon } from "../../icons/skills/nodejs";
import { AzureIcon } from "../../icons/skills/azure";
import { AzureFunctionIcon } from "../../icons/skills/azure-function";
import { JavaIcon } from "../../icons/skills/java";
import { SpringBootIcon } from "../../icons/skills/spring-boot";
import { APIIcon } from "../../icons/skills/api";
import { MYSQLIcon } from "../../icons/skills/mysql";
import { SQLServerIcon } from "../../icons/skills/sql-server";
import { MongoDBIcon } from "../../icons/skills/mongodb";
import { GitIcon } from "../../icons/skills/git";
import { IntellijIdeaIcon } from "../../icons/skills/intellij";
import { VSCodeIcon } from "../../icons/skills/vscode";

export default function Skills({ isActive }) {
  return (
    <Blur active={isActive} timeout={500}>
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
        <Stack padding={2} gap={3}>
          <StyleSpan
            style={{ fontSize: "19px", textAlign: "justify" }}
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
            As a seasoned Software Developer, I bring a diverse set of technical
            skills and expertise to the table. Here are some of the key areas in
            which I excel:
          </StyleSpan>
          <Divider sx={{ background: "rgb(150,150,150)" }} />
          <Stack gap={3} paddingX={5}>
            <Stack>
              <Typography variant="h6" fontWeight={"bold"}>
                Frontend Development
              </Typography>
              <Stack direction={"row"} gap={2}>
                <IconTemplate
                  Icon={ReactIcon}
                  color={"rgb(48, 122, 161)"}
                  title="React JS"
                />
                <IconTemplate Icon={NextIcon} color={""} title="Next JS" />
                <IconTemplate
                  Icon={JavaScriptIcon}
                  color={"rgb(239, 216, 29)"}
                  title="Javascript"
                />
                <IconTemplate
                  Icon={MUIIcon}
                  color={"rgb(51, 163, 255)"}
                  title="Material MUI"
                />
              </Stack>
            </Stack>
            <Stack>
              <Typography variant="h6" fontWeight={"bold"}>
                Backend Development
              </Typography>
              <Stack direction={"row"} gap={2}>
                <IconTemplate
                  Icon={NodeJSIcon}
                  color="rgb(80, 153, 65)"
                  title="Node JS"
                />
                <IconTemplate
                  Icon={AzureFunctionIcon}
                  color="rgb(247, 202, 20)"
                  title="Azure Functions"
                />
                <IconTemplate
                  Icon={JavaIcon}
                  color="rgb(0, 106, 180)"
                  title="Java"
                />
                <IconTemplate
                  Icon={SpringBootIcon}
                  color="rgb(106, 173, 61)"
                  title="Spring Boot"
                />
              </Stack>
            </Stack>
            <Stack>
              <Typography variant="h6" fontWeight={"bold"}>
                Web Services
              </Typography>
              <Stack direction={"row"} gap={2}>
                <IconTemplate Icon={APIIcon} title="Rest API" />
                <IconTemplate
                  Icon={AzureIcon}
                  color="rgb(55, 192, 235)"
                  title="Azure"
                />
              </Stack>
            </Stack>
            <Stack>
              <Typography variant="h6" fontWeight={"bold"}>
                Database Management:
              </Typography>
              <Stack direction={"row"} gap={2}>
                <IconTemplate
                  Icon={MYSQLIcon}
                  color="rgb(55, 192, 235)"
                  title="MySQL"
                />
                <IconTemplate
                  Icon={SQLServerIcon}
                  color="rgb(195, 63, 50)"
                  title="SQL Server"
                />
                <IconTemplate
                  Icon={MongoDBIcon}
                  color="rgb(18, 165, 79)"
                  title="MongoDB"
                />
              </Stack>
            </Stack>
            <Stack>
              <Typography variant="h6" fontWeight={"bold"}>
                Version Control:
              </Typography>
              <Stack direction={"row"} gap={2}>
                <IconTemplate
                  Icon={GitIcon}
                  color="rgb(232, 78, 49)"
                  title="Git"
                />
              </Stack>
            </Stack>
            <Stack>
              <Typography variant="h6" fontWeight={"bold"}>
                Languages:
              </Typography>
              <Stack direction={"row"} gap={1}>
                <StyleSpan>
                  {`Vietnamese (Native Speaker) <br /> English (Speaking, Reading,
                Writing, Listening)`}
                </StyleSpan>
              </Stack>
            </Stack>
          </Stack>
          <Divider sx={{ background: "rgb(150,150,150)" }} />
          <StyleSpan
            style={{ fontSize: "19px", textAlign: "justify" }}
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
            My proficiency in these technologies, combined with my passion for
            continuous learning and problem-solving, allows me to deliver
            high-quality solutions and drive innovation in every project I
            undertake.
          </StyleSpan>
        </Stack>
      </Paper>
    </Blur>
  );
}

function IconTemplate({ Icon, title = "", color }) {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={1}>
      <Icon sx={{ fontSize: "35px", color: color }} />
      {title}
    </Stack>
  );
}
