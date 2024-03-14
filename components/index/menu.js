import {
  Button,
  Collapse,
  Grow,
  Paper,
  Slide,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { IntroBottom, IntroTop } from "../../icons/intro-frame";
import { PointerFinger } from "../../icons/pointer-finger";
import { CornerStyle } from "../../icons/corner-style";

export default function Menu({ onChange }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(-1);
  const styles = {
    color: "#fff",
    fontFamily: "monospace",
  };

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 1000);
  }, []);
  const animationDelay = (_isActive) => {
    return {
      frame: _isActive ? 500 : 700,
      startButton: _isActive ? 500 : 0,
      portfolioButton: _isActive ? 600 : 200,
    };
  };

  const handleChange = (selectedMenu) => {
    setIsActive(false);
    setTimeout(() => {
      onChange && onChange(selectedMenu);
    }, 700);
  };

  return (
    <Grow in={isActive} timeout={700}>
      <Stack height={"max-content"} width={"max-content"} position={"relative"}>
        <IntroTop
          sx={{
            position: "absolute",
            bottom: "100%",
            fontSize: "200px",
            height: "80px",
            width: "100%",
            ...styles,
          }}
        />
        <IntroBottom
          sx={{
            position: "absolute",
            top: "100%",
            fontSize: "200px",
            height: "50px",
            width: "100%",
            ...styles,
          }}
        />
        <Paper
          sx={{
            width: "300px",
            background: "rgba(0,0,0,0.7)",
            background:
              "linear-gradient(155deg, rgba(5,5,5,0.5) 0, rgba(30,30,30,0.7) 50%, transparent 50%)",
            border: "1px dashed #fff",
            borderWidth: "0 2px 0 2px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Stack width={"100%"} gap={1} paddingY={2}>
            <Slide
              in={isActive}
              direction="right"
              timeout={500}
              style={{ transitionDelay: animationDelay(isActive).startButton }}
            >
              <Stack>
                <ButtonFinger
                  isSelected={selected === 1}
                  onHover={() => setSelected(1)}
                  onClick={() => handleChange(1)}
                >
                  Start
                </ButtonFinger>
              </Stack>
            </Slide>
            <Slide
              in={isActive}
              direction="right"
              timeout={500}
              style={{
                transitionDelay: animationDelay(isActive).portfolioButton,
              }}
            >
              <Stack>
                <ButtonFinger
                  isSelected={selected === 2}
                  onHover={() => setSelected(2)}
                  onClick={() => handleChange(2)}
                >
                  Portfolio
                </ButtonFinger>
              </Stack>
            </Slide>
          </Stack>
          <Stack
            sx={{
              position: "absolute",
              borderRadius: isActive ? "0%" : "50%",
              bottom: 0,
              left: 0,
              height: isActive ? "100%" : "0%",
              transition: "ease 1s",
              aspectRatio: "1/1",
              color: "rgba(255,255,255,0.3)",
              justifyContent: "flex-end",
              overflow: "hidden",
            }}
          >
            <CornerStyle sx={{ fontSize: "120px" }} />
          </Stack>
        </Paper>
      </Stack>
    </Grow>
  );
}

function ButtonFinger({ isSelected, onClick, onHover, children }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(isSelected);
  }, [isSelected]);
  return (
    <Stack
      sx={{
        width: "100%",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Zoom in={isActive} timeout={300}>
        <Stack
          width={"100%"}
          height={"50%"}
          sx={{
            transition: "ease 0.3s",
            position: "absolute",
            top: "25%",
            background:
              "radial-gradient(rgba(255,255,255,0.3) 0%, transparent 70%)",
          }}
        />
      </Zoom>

      <Button
        sx={{
          textTransform: "none",
          color: "#fff",
          width: "max-content",
          position: "relative",
        }}
        onClick={onClick}
        onMouseOver={onHover}
      >
        {isSelected && (
          <PointerFinger
            sx={{
              fontSize: "50px",
              height: "35px",
              position: "absolute",
              right: "100%",
            }}
          />
        )}

        <Typography
          variant="h5"
          fontFamily={"monospace"}
          fontWeight={isSelected ? "bold" : 100}
        >
          {children}
        </Typography>
      </Button>
    </Stack>
  );
}
