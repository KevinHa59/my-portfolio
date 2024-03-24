import RecommendIcon from "@mui/icons-material/Recommend";
import { Fade, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Menu from "../components/index/menu";
import { useRouter } from "next/router";
import Introduction from "../components/index/introduction";
import Skills from "../components/index/skills";
import EduExp from "../components/index/edu-exp";
import Section from "../components/component/section";
import { colors } from "../components/colors";
import { ArrowLeftIcon } from "../icons/arrow-left";
import { ArrowUpIcon } from "../icons/arrow-up";
import { ArrowDownIcon } from "../icons/arrow-down";
export default function Home() {
  const router = useRouter();

  const [tab, setTab] = useState("introduction");

  useEffect(() => {
    const query = router.query;
    if (query.tab) {
      setTab(query.tab);
    }
  }, [router]);

  return (
    <Stack
      sx={{
        width: "100%",
        position: "relative",
      }}
      minHeight={"100vh"}
    >
      <Stack
        width={"100%"}
        sx={{ position: "fixed", top: 0, left: 0, height: "60px", zIndex: 10 }}
      >
        <Menu />
      </Stack>
      <Section id={"intro"} background={"#000"} title={"INTRODUCTION"}>
        <ArrowDownIcon
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            color: colors.textHighlight,
            fontSize: "30vw",
            opacity: 0.1,
          }}
        />
        <Introduction />
      </Section>
      <Section
        background={colors.backgroundPaper}
        id={"skills"}
        title={"SKILLS"}
        sx={{ background: colors.backgroundPaper }}
      >
        <ArrowLeftIcon
          sx={{
            position: "absolute",
            top: 60,
            right: 0,
            color: "#fff",
            fontSize: "25vw",
            opacity: 0.1,
          }}
        />
        <Skills />
      </Section>
      <Section
        background={"#000"}
        id={"edu"}
        title={"EDUCATION & EXPERIENCE"}
        inner_sx={{ alignItems: "center" }}
      >
        <ArrowDownIcon
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            color: colors.textHighlight,
            fontSize: "20vw",
            opacity: 0.05,
          }}
        />
        <ArrowUpIcon
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            color: colors.textHighlight,
            fontSize: "20vw",
            opacity: 0.05,
          }}
        />
        <EduExp />
      </Section>
    </Stack>
  );
}
