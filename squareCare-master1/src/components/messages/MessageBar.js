import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachmentIcon from "@mui/icons-material/Attachment";
import "./message-styles.css";

const MessageBar = () => {
  const [message, setMessage] = useState("");
  const handleFileUpload = (e) => {
    //const file = e.target.files[0];
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "8px",
        borderTop: "1px solid #ddd",
        height: "100%",
        backgroundColor: "#fdfdff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
      className="message-bar"
    >
      <input
        accept="image/*"
        id="file-upload"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
      <label htmlFor="file-upload">
        <IconButton component="span" style={{ height: "48px" }}>
          <AttachmentIcon />
        </IconButton>
      </label>
      <TextField
        style={{ flexGrow: 1, height: "48px" }}
        variant="outlined"
        fullWidth
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setMessage("");
          }
        }}
        InputProps={{
          style: { height: "48px", alignItems: "center" }, // adjust line height to vertically center text
        }}
        sx={{
          margin: "0 8px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            // Targeting hover state specifically
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(120, 121, 241, 0.5)",
            },
            // Disabling hover effect when focused
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#7879F1", // Focused border color
              },
            },
          },
        }}
      />
      <IconButton onClick={(e) => setMessage("")} style={{ height: "48px" }}>
        <SendIcon sx={{ color: "#5932EA" }} />
      </IconButton>
    </div>
  );
};
export default MessageBar;
