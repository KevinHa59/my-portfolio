import { Stack } from "@mui/material";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Stack alignItems={"center"}>
      <Component {...pageProps} />
    </Stack>
  );
}

export default MyApp;
