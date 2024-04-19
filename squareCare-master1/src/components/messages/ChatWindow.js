import React from "react";
import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import MessageBar from "./MessageBar";

import "./message-styles.css";

export default function ChatWindow() {
  return (
    <section className="main-chat-window">
      <AppBar position="static" sx={{borderRadius:'10px'}}>
        <Toolbar
          sx={{
            bgcolor: "#fdfdff",
            color: "black",
            border: "1px solid #ccc",
            borderRadius:'10px'
          }}
        >
          <Avatar sx={{ color: "white", bgcolor: "black" }}>J</Avatar>
          <Typography variant="h6" style={{ marginLeft: "20px" }}>
            Dr.John Doe
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="chat-content" style={{ width: "100%" }}>
        <div className="chat-bubble">
          <div className="chat-text">Hello, how can I help you today?</div>
        </div>
        <div className="chat-bubble self">
          <div className="chat-text">I have a headache and fever</div>
        </div>
        <div className="chat-bubble">
          <div className="chat-text">
            I recommend you to take some rest and drink plenty of water
          </div>
        </div>
      </div>
      {/** Message bar for sending messages*/}
      <div>
        <MessageBar />
      </div>
    </section>
  );
}
