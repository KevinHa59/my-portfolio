import React from "react";
import Blur from "../component/transitions/blur";
import TimeLine from "../component/timeline";
import { Stack } from "@mui/material";

export default function EduExp({ id }) {
  return (
    <Stack
      id={id}
      paddingY={5}
      sx={{
        width: {
          md: "50%",
          xs: "100%",
        },
      }}
      alignItems={"center"}
    >
      <Stack
        justifyContent={"center"}
        sx={{
          width: {
            md: "100%",
            xs: "90%",
          },
        }}
      >
        <TimeLine />
      </Stack>
    </Stack>
  );
}
