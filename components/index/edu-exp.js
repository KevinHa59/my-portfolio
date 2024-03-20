import React from "react";
import Blur from "../component/transitions/blur";
import TimeLine from "../component/timeline";
import { Stack } from "@mui/material";

export default function EduExp({ isActive }) {
  return (
    <Blur active={isActive} timeout={500}>
      <Stack width={"100%"} alignItems={"center"}>
        <TimeLine />
      </Stack>
    </Blur>
  );
}
