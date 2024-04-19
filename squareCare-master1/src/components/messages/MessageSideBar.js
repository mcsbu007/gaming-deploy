import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Dialog,
  DialogActions,
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";

import "./message-styles.css";

const MessageSideBar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [chatAddInput, setChatAddInput] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchQuery("");
  };

  const handleAddClick = () => {
    setIsPopupOpen(true);
    setChatAddInput("");
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setChatAddInput("");
  };

  const handleChatAddInputChange = (e) => {
    setChatAddInput(e.target.value);
  };

  const handleAddUserClick = () => {
    setIsPopupOpen(false);
  };

  // Dummy data for users
  const users = [
    { name: "Mia Wong", role: "Doctor" },
    { name: "Charlotte Lee", role: "Technician" },
    { name: "Alexander Perez", role: "Nurse" },
    { name: "Ethan James", role: "System Admin" },
    { name: "Isabella Clark", role: "Nurse" },
    { name: "Sophia Turner", role: "Hospital Admin" },
    { name: "Liam Scott", role: "Doctor" },
  ];

  return (
    <div className="chat-sidebar">
      <Typography variant="h6" gutterBottom sx={{ marginLeft: 1, my: 2 }}>
        Mesengers
      </Typography>
      <form onSubmit={handleFormSubmit} className="chat-search">
        <Box
          sx={{
            display: "flex",
            alignItems: "center", 
            marginBottom: 2,
            gap: 2, 
            width: "100%", 
          }}
        >
          <TextField
            placeholder="Search"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            onBlur={() => setSearchQuery("")}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                height: "36px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                // Targeting hover state specifically
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(120, 121, 241, 0.5)", // Your desired hover color
                },
                // Disabling hover effect when focused
                "&.Mui-focused": {
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7879F1", // Focused border color
                  },
                  // Override hover styles when focused
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7879F1", // Keep the focus color even when hovering
                  },
                },
              },
              "& .MuiInputLabel-root": {
                color: "#D3D3D3",
                fontWeight: "lighter",
                "&.Mui-focused": {
                  color: "#7879F1",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="text"
            sx={{ marginRight: 5, color: "#7879F1" }}
            onClick={handleAddClick}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              CHAT
              <AddIcon sx={{ fontSize: 20, marginLeft: 0.5 }} />
            </div>
          </Button>
        </Box>
      </form>
      <div className="user-list">
        <List>
          {["John Doe", "Sara Knight"].map((user, index) => (
            <Box
              key={index}
              sx={{
                marginBottom: 1, // spacing between cards
                boxShadow: 1, // card shadow
                borderRadius: 2, // rounded corners
                overflow: "hidden", // ensure the shadow isn't cut off
                "&:hover": {
                  backgroundColor: "#E6E6FA", // Change background color on hover
                },
                transition: "background-color 0.3s", // Smooth transition for background color change
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ color: "white", bgcolor: "black" }}>
                    {user[0]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={user}
                  secondary={user === "John Doe" ? "Doctor" : "Nurse"}
                />
              </ListItem>
            </Box>
          ))}
        </List>
      </div>

      {/** Popup for searching new mesengers */}
      <Dialog
        open={isPopupOpen}
        onClose={handlePopupClose}
        PaperProps={{
          sx: {
            borderRadius: "10px", // Rounded corners for the Dialog
          },
        }}
      >
        <form className="chat-add-form">
          <TextField
            type="text"
            placeholder="Search"
            fullWidth
            variant="standard"
            value={chatAddInput}
            onChange={handleChatAddInputChange}
            sx={{
              "& .MuiInputBase-root": {
                height: "60px",
                alignItems: "center",
                padding: "10px 14px",
              },
              "& .MuiInput-underline:before": {
                // Normal state underline color
                borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
              },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                // Underline color on hover (not disabled)
                borderBottom: "1px solid #E1E2FF",
              },
              "& .MuiInput-underline:after": {
                // Underline color when focused
                borderBottomColor: "#7879F1",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: chatAddInput && (
                <IconButton
                  onClick={() => setChatAddInput("")}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  <CloseIcon />
                </IconButton>
              ),
            }}
          />
        </form>
        <Box sx={{ maxHeight: "400px", overflowY: "hidden" }}>
          <List sx={{ padding: "0px" }}>
            {users.map((user, index) => (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: "background.paper", // Theme-dependent background
                  height: 80, // Set the height of each item
                  border: 1, // Add a border
                  borderColor: "grey.200", // Border color
                  paddingLeft: "30px", // Add left padding to move content to the right
                  "&:last-child": {
                    marginBottom: 0, // Remove margin for the last item
                  },
                  "&:hover": {
                    backgroundColor: "#E6E6FA", // Change color on hover
                  },
                }}
              >
                <ListItemAvatar sx={{ marginRight: "10px" }}>
                  <Avatar sx={{ bgcolor: "black" }}>
                    {user.name.split(" ")[0][0]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.name} secondary={user.role} />
              </ListItem>
            ))}
          </List>
        </Box>
        <DialogActions>
          <Button
            onClick={handleAddUserClick}
            sx={{
              bgcolor: "#7879F1",
              color: "white",
              height: 36, // Explicitly set the height
              minWidth: 64, // Set minimum width to ensure consistency
              maxWidth: 80, // Match the maximum width of the 'Add' button
              width: "100px", // Make the button full-width
              padding: "6px 16px", // Standard padding, adjust if needed
              "&:hover": {
                bgcolor: "rgba(72, 73, 221, 1)",
              },
              "&:active": {
                bgcolor: "rgba(62, 63, 211, 1)",
              },
            }}
          >
            Add
          </Button>
          <Button
            onClick={handlePopupClose}
            variant="text"
            sx={{
              color: "rgba(72, 73, 221, 1)",
              height: 36, // Match the height of the 'Add' button
              minWidth: 64, // Match the minimum width of the 'Add' button
              maxWidth: 80, // Match the maximum width of the 'Add' button
              width: "100px", // Make the button full-width
              padding: "6px 16px", // Match the padding of the 'Add' button
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MessageSideBar;
