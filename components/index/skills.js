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
import { colors } from "../colors";
import { ArrowLeftIcon } from "../../icons/arrow-left";
import { styles } from "../styles";

export default function Skills({ id }) {
  return (
    <Stack
      id={id}
      sx={{
        color: "rgba(230,230,230,1)",
        minHeight: "calc(100vh - 60px)",
        paddingY: 5,
        width: {
          xl: "60%",
          md: "80%",
          xs: "100%",
        },
      }}
      position={"relative"}
      alignItems={"center"}
    >
      <Stack
        padding={2}
        gap={3}
        sx={{
          width: {
            md: "100%",
            xs: "90%",
          },
        }}
      >
        <StyleSpan
          style={{ fontSize: styles.fontSize.normal, textAlign: "justify" }}
          variant={[
            {
              text: [
                "Software Developer",
                "ReactJS",
                "NextJS",
                "Node.js",
                "Java",
              ],
              style: { fontWeight: "bold", color: colors.textHighlight },
            },
          ]}
        >
          As a seasoned Software Developer, I bring a diverse set of technical
          skills and expertise to the table. Here are some of the key areas in
          which I excel:
        </StyleSpan>
        <Divider sx={{ background: "rgb(150,150,150)" }} />
        <Stack
          gap={3}
          sx={{
            paddingX: {
              md: 5,
              xs: 0,
            },
          }}
        >
          <Stack>
            <Typography
              fontWeight={"bold"}
              sx={{ fontSize: styles.fontSize.skillHeader }}
            >
              Frontend Development
            </Typography>
            <Stack
              direction={"row"}
              gap={2}
              sx={{
                flexWrap: {
                  sm: "nowrap",
                  xs: "wrap",
                },
              }}
            >
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
            <Typography
              sx={{ fontSize: styles.fontSize.skillHeader }}
              fontWeight={"bold"}
            >
              Backend Development
            </Typography>
            <Stack
              direction={"row"}
              gap={2}
              sx={{
                flexWrap: {
                  sm: "nowrap",
                  xs: "wrap",
                },
              }}
            >
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
            <Typography
              sx={{ fontSize: styles.fontSize.skillHeader }}
              fontWeight={"bold"}
            >
              Web Services
            </Typography>
            <Stack
              direction={"row"}
              gap={2}
              sx={{
                flexWrap: {
                  sm: "nowrap",
                  xs: "wrap",
                },
              }}
            >
              <IconTemplate Icon={APIIcon} title="Rest API" />
              <IconTemplate
                Icon={AzureIcon}
                color="rgb(55, 192, 235)"
                title="Azure"
              />
            </Stack>
          </Stack>
          <Stack>
            <Typography
              sx={{ fontSize: styles.fontSize.skillHeader }}
              fontWeight={"bold"}
            >
              Database Management:
            </Typography>
            <Stack
              direction={"row"}
              gap={2}
              sx={{
                flexWrap: {
                  sm: "nowrap",
                  xs: "wrap",
                },
              }}
            >
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
            <Typography
              sx={{ fontSize: styles.fontSize.skillHeader }}
              fontWeight={"bold"}
            >
              Version Control:
            </Typography>
            <Stack
              direction={"row"}
              gap={2}
              sx={{
                flexWrap: {
                  sm: "nowrap",
                  xs: "wrap",
                },
              }}
            >
              <IconTemplate
                Icon={GitIcon}
                color="rgb(232, 78, 49)"
                title="Git"
              />
            </Stack>
          </Stack>
          <Stack>
            <Typography
              sx={{ fontSize: styles.fontSize.skillHeader }}
              fontWeight={"bold"}
            >
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
          style={{ fontSize: styles.fontSize.normal, textAlign: "justify" }}
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
    </Stack>
  );
}

function IconTemplate({ Icon, title = "", color }) {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={1}>
      <Icon sx={{ fontSize: styles.fontSize.skillIcon, color: color }} />
      <Typography
        sx={{ fontSize: styles.fontSize.normal, whiteSpace: "nowrap" }}
      >
        {title}
      </Typography>
    </Stack>
  );
}
