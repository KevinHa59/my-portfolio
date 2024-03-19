import RecommendIcon from "@mui/icons-material/Recommend";
import { Fade, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Menu from "../components/index/menu";
import { useRouter } from "next/router";
import Introduction from "../components/index/introduction";
export default function Home() {
  const [tab, setTab] = useState(0);

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
      <Stack width={"calc(100% - 200px)"} paddingY={5}>
        {<Introduction isActive={tab === 0} />}
      </Stack>
      <Stack minWidth={"200px"}>
        <Menu onChange={setTab} />
      </Stack>
    </Stack>
  );
}
