import RecommendIcon from "@mui/icons-material/Recommend";
import { Fade, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Menu from "../components/index/menu";
import { useRouter } from "next/router";
export default function Home() {
  const [state, setState] = useState(0);
  const router = useRouter();
  const handleRoute = (menuValue) => {
    if (menuValue === 2) {
      router.push({
        pathname: "portfolio",
      });
    }
  };

  return (
    <Stack>
      <Stack
        sx={{
          height: "100vh",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {state === 0 && <Menu onChange={(menu) => handleRoute(menu)} />}
      </Stack>
    </Stack>
  );
}
