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
        sx={{ position: "fixed", top: 0, left: 0, height: "60px", zIndex: 5 }}
      >
        <Menu />
      </Stack>
      <Section id={"intro"} background={"#000"} title={"INTRODUCTION"}>
        <Introduction />
      </Section>
      <Section
        background={colors.backgroundPaper}
        id={"skills"}
        title={"SKILLS"}
        sx={{ background: colors.backgroundPaper }}
      >
        <Skills />
      </Section>
      <Section
        background={"#000"}
        id={"edu"}
        title={"EDUCATION & EXPERIENCE"}
        inner_sx={{ alignItems: "center" }}
      >
        <EduExp />
      </Section>
    </Stack>
  );
}
