import { CircularProgress, Dialog, IconButton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colors } from "../../colors";

export default function IconButtonRouting({ link, duration = 2, children }) {
  const [open, setOpen] = useState(false);
  const [countDown, setCountDown] = useState(duration);
  const [inter, setInter] = useState(null);
  const [pos, setPos] = useState(20);
  useEffect(() => {
    if (open === true) {
      if (countDown < 0) {
        handleOpenLink();
        clearInterval(inter);
        setInter(null);
        setCountDown(0);
        setPos(20);
        setOpen(false);
      }
    }
  }, [open, countDown]);

  const handleOpen = (value) => {
    setCountDown(duration);
    setPos(20);
    setTimeout(() => {
      setPos(-20);
    }, 10);
    setOpen(value);
    if (value === true) {
      const _inter = setInterval(() => {
        setCountDown((prev) => prev - 0.1);
      }, 100);
      setInter(_inter);
    } else {
      clearInterval(inter);
      setInter(null);
      setPos(20);
    }
  };

  const handleOpenLink = () => {
    window.open(link, "_blank");
  };

  return (
    <Stack>
      <Dialog
        open={open}
        onClose={() => handleOpen(false)}
        PaperProps={{
          style: {
            transition: `ease ${duration}s`,
            borderRadius: "50%",
            borderColor: colors.textHighlight,
            background: colors.background,
            boxShadow: `0 ${pos}px 40px ${
              colors.textHighlight
            }, inset 0 ${-pos}px 20px ${colors.textHighlight}`,
          },
        }}
      >
        <Stack padding={2}>
          <CircularProgress
            variant="determinate"
            value={(countDown / duration) * 100}
            size={"50px"}
            color="warning"
          />
        </Stack>
      </Dialog>
      <IconButton onClick={() => handleOpen(true)}>{children}</IconButton>
    </Stack>
  );
}
