import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import "./NavbarStyle.css";
import { Box, InputBase } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AppsIcon from '@mui/icons-material/Apps';

export default function Navbar() {

  return (
    <div>
      <AppBar position="static" color="primary" style={{ width: "100%", }}>
        <Toolbar className="navbar-wrapper">
          <Box className="title-wrapper">
            <AppsIcon />
            <Typography variant="h6" className="title">
              To Do
            </Typography>
          </Box>

          <div className="search">
            <InputBase placeholder="Search..." className="search-box" />
            <SearchIcon className="search-icon" />
          </div>

          <SettingsOutlinedIcon />
          <QuestionMarkOutlinedIcon />
          <Avatar>N</Avatar>

         
        </Toolbar>
      </AppBar>
    </div>
  );
}
