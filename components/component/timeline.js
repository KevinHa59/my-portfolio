import {
  Collapse,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import StyleSpan from "./TypographyS";
import { colors } from "../colors";
import { styles } from "../styles";

const sample_data = [
  {
    dateFrom: 2017,
    dateTo: 2020,
    Icon: <SchoolIcon />,
    title: "Houston Community College",
    detail: (
      <StyleSpan
        variant={[
          {
            text: "Houston Community College",
            style: { fontWeight: "bold", color: colors.textHighlight },
          },
        ]}
      >
        Start Associate in Computer Science from Houston Community College,
        Houston, TX. Explored various aspects of computer science, including
        programming fundamentals, computer organization, and computer
        applications.
      </StyleSpan>
    ),
    color: colors.textHighlight,
  },
  {
    dateFrom: 2017,
    Icon: <WorkIcon />,
    title: "DICENTRAL LTD, Vietnam",
    detail: (
      <StyleSpan
        variant={[
          {
            text: "DICENTRAL LTD",
            style: { fontWeight: "bold", color: "rgb(0, 71, 187)" },
          },
        ]}
      >
        Interned as a Frontend Developer at DICENTRAL LTD, Vietnam. Gained
        hands-on experience in frontend development, working on projects
        involving HTML, CSS, and JavaScript.
      </StyleSpan>
    ),
    color: "rgb(36, 152, 195)",
  },
  {
    dateFrom: 2020,
    dateTo: 2022,
    Icon: <SchoolIcon />,
    title: "University of Houston",
    detail: (
      <StyleSpan
        variant={[
          {
            text: "University of Houston-Downtown",
            style: { fontWeight: "bold", color: "rgb(195, 9, 11)" },
          },
        ]}
      >
        Begin Bachelor of Computer Science from the University of
        Houston-Downtown, Houston, TX. Specialized in software engineering,
        database systems, and web programming.
      </StyleSpan>
    ),
    color: colors.textHighlight,
  },
  {
    dateFrom: 2022,
    dateTo: "Current",
    Icon: <WorkIcon />,
    title: "Phase Ortho",
    detail: (
      <StyleSpan
        variant={[
          {
            text: "Phase Ortho",
            style: { fontWeight: "bold" },
          },
        ]}
      >
        Currently working as a Software Developer at Phase Ortho, Kentucky,
        United States. Collaborating with a team to develop production web
        applications on cloud platforms, leveraging technologies such as React
        JS, Node.js, and Azure services.
      </StyleSpan>
    ),
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

            return <SectionItem key={index} isEven={isEven} item={e} />;
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

function SectionItem({ item, isEven }) {
  const theme = useTheme();
  const [isHover, setIsHover] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Stack
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      direction={isMobile ? "row" : isEven ? "row" : "row-reverse"}
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"stretch"}
    >
      <Stack
        direction={isEven ? "row-reverse" : "row"}
        alignItems={"center"}
        sx={{
          width: {
            sm: "100%",
            xs: "0",
          },
          overflow: "hidden",
        }}
      >
        {item.dateTo && (
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              border: `4px solid ${item.color}`,
              borderWidth: isEven ? "5px 1px 1px 5px" : "1px 5px 5px 1px",
              padding: 1,
              aspectRatio: "1/1",
              borderRadius: "50%",
            }}
          >
            {item.dateFrom}
          </Stack>
        )}
        <Divider
          sx={{
            transition: "ease 0.5s",
            width: isHover ? "25%" : "50%",
            background: item.color,
          }}
        />
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            border: `4px solid ${item.color}`,
            borderWidth: isEven ? "5px 1px 1px 5px" : "1px 5px 5px 1px",
            padding: 1,
            aspectRatio: "1/1",
            borderRadius: "50%",
          }}
        >
          {item.dateTo ? item.dateTo : item.dateFrom}
        </Stack>
      </Stack>
      <Stack
        sx={{
          borderRadius: 0,
          minWidth: "11px",
          border: `5px solid ${item.color}`,
          borderWidth: "0 5px 0 5px",
          paddingY: 5,
        }}
      />

      <Stack
        width={"100%"}
        direction={isMobile ? "row" : isEven ? "row" : "row-reverse"}
        alignItems={"center"}
        sx={{
          textAlign: "center",
          border: `1px solid ${item.color}`,
          borderRadius: isMobile
            ? "0 25px 25px 0"
            : isEven
            ? "0 25px 25px 0"
            : "25px 0 0 25px",
          marginY: isMobile && 2,
        }}
        paddingY={2}
      >
        <Divider
          sx={{
            width: {
              md: "50px",
              xs: "0px",
            },
            background: item.color,
            transition: "ease 0.5s",
          }}
        />
        {isEven ? (
          <ArrowRightIcon sx={{ color: item.color }} />
        ) : (
          <ArrowLeftIcon sx={{ color: item.color }} />
        )}

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
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 100 }}>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              {item.Icon}
              <Typography variant="body2" fontStyle={"italic"}>
                {item.title}
              </Typography>
            </Stack>
          </Typography>
          {isMobile && (
            <Typography fontStyle={"italic"}>
              {item.dateFrom} {item.dateTo && ` - ${item.dateTo}`}
            </Typography>
          )}
          <Divider sx={{ background: "rgba(255,255,255,1)" }} />
          <Typography
            variant="body1"
            sx={{ fontWeight: 300, fontSize: styles.fontSize.eduNormal }}
          >
            {item.detail}
          </Typography>
        </Paper>
      </Stack>
    </Stack>
  );
}
