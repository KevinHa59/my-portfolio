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
        width: "50%",
      }}
      alignItems={"center"}
    >
      <TimeLine />
    </Stack>
  );
}
