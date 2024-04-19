import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import DashboardIcon from "@material-ui/icons/Dashboard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MessageIcon from "@material-ui/icons/Message";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import PersonIcon from "@material-ui/icons/Person";

const sidebarData = [
  { text: "Dashboard", path: "DashBoard", icon: <DashboardIcon /> },
  { text: "Notification", path: "Notification", icon: <NotificationsIcon /> },
  { text: "Messages", path: "messages", icon: <MessageIcon /> },
  { text: "Accounts", path: "AccountManagement", icon: <AccountCircleIcon /> },
  { text: "Patients", path: "patients", icon: <PeopleIcon /> },
  { text: "Resources", path: "Resources", icon: <WorkIcon /> },
  { text: "Profile", path: "StaffManagementPage", icon: <PersonIcon /> },
];

const SideBar = ({ open, setOpen }) => {
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const NavListItem = styled(ListItem)(() => ({
    marginTop: "20px",
    background: "transparent",
    ":hover": {
      background: "#7879F1",
      color: "white",
    },
  }));

  const styles = (theme) => ({
    listItemText: {
      fontSize: "0.7em",
    },
  });
  return (
    <Drawer
      open={open}
      variant="permanent"
      onClose={toggleDrawer}
      sx={{
        zIndex: 99999,
        width: open ? 240 : 90,
      }}
      PaperProps={{
        sx: {
          backgroundColor: "white",
          opacity: 1,
          width: "100%",
        },
      }}
    >
      <List>
        <ListItem onClick={toggleDrawer} style={{cursor:'pointer'}}>
          <ListItemIcon style={{ justifyContent: "center" }}>
            <img
              src="../logo.png"
              alt="logo"
              style={{ height: "2em", width: "auto" }}
            />
          </ListItemIcon>
          {open && (
            <ListItemText primary="Square Care" />
          )}
        </ListItem>
        <Divider />
        {sidebarData.map((item) => (
          <NavLink
            to={`/${item.path.toLowerCase()}`}
            key={item.path}
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            <NavListItem>
              <ListItemIcon style={{ justifyContent: "center" }}>
                {React.cloneElement(item.icon, {
                  style: { fontSize: "1.4rem" },
                })}
              </ListItemIcon>

              {open && (
                <ListItemText
                  primary={item.text}
                  classes={{ primary: styles.listItemText }}
                />
              )}
            </NavListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
