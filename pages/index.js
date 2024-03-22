import RecommendIcon from "@mui/icons-material/Recommend";
import { Fade, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Menu from "../components/index/menu";
import { useRouter } from "next/router";
import Introduction from "../components/index/introduction";
import Skills from "../components/index/skills";
import EduExp from "../components/index/edu-exp";
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
        width: {
          xl: "1600px",
          md: "80%",
          xs: "100%",
        },
      }}
      minHeight={"100vh"}
      direction={"row"}
    >
      <Stack width={"calc(100% - 200px)"} paddingTop={8}>
        {<Introduction isActive={tab === "introduction"} />}
        {<Skills isActive={tab === "skills"} />}
        {<EduExp isActive={tab === "edu-exp"} />}
      </Stack>
      <Stack minWidth={"200px"}>
        <Menu onChange={setTab} />
      </Stack>
    </Stack>
  );
}
