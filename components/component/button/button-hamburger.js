import {
  Collapse,
  Dialog,
  Fade,
  IconButton,
  Slide,
  Stack,
  Zoom,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { colors } from "../../colors";
export default function ButtonHamburger({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      {isMobile && (
        <IconButton onClick={() => setOpen((prev) => !prev)}>
          <MenuIcon sx={{ color: colors.textHighlight }} />
        </IconButton>
      )}
      {isMobile && (
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            style: {
              background: colors.backgroundPaper,
              padding: 5,
              width: "100%",
            },
          }}
        >
          {children(isMobile)}
        </Dialog>
      )}
      {!isMobile && children(false)}
    </Stack>
  );
}
