import RecommendIcon from "@mui/icons-material/Recommend";
import { Fade, Stack, Typography } from "@mui/material";
export default function Home() {
  return (
    <Stack>
      <Stack sx={{ height: "100vh", width: "100%", alignItems: "center", justifyContent: "center" }}>
        <RecommendIcon color="primary" sx={{ fontSize: 50 }} />
        <Fade in={true} timeout={2000}>
          <Typography
            variant="h3"
            fontWeight={"bold"}
            sx={{
              background: "linear-gradient(90deg, #00afb9, #7209b7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {`< Hello World />`}
          </Typography>
        </Fade>
      </Stack>
    </Stack>
  );
}
