import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import MessageSideBar from "./messages/MessageSideBar.js";
import ChatWindow from "./messages/ChatWindow.js";

export default function MessagePanel() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      spacing={1}
      sx={{
        display: "flex",
        bgcolor: "#f7f9fe",
        margin: 0,
        padding: 0,
      }}
    >
      {!isSmallScreen && (
        <Grid item xs={12} md={3} lg={3} xl={3} sx={{ p: 2 }}>
          <MessageSideBar />
        </Grid>
      )}
      <Grid item xs={12} sm={12} md={9} lg={9} xl={9} sx={{ p: 2 }}>
        <ChatWindow />
      </Grid>
    </Grid>
  );
}
