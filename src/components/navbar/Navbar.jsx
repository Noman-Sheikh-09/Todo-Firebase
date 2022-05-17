import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import SearchIcon from "@mui/icons-material/Search";
import "./NavbarStyle.css";
import { Box, InputBase } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AppsIcon from "@mui/icons-material/Apps";
import UseNavbar from "./UseNavbar";
import AppLauncher from "../appLauncher/AppLauncher";
export default function Navbar(props) {
  const {launchOpen, setLaunchOpen} = UseNavbar();
  return (
    <div>
      <AppBar position="static" color="primary" style={{ width: "100%" }}>
        <Toolbar className="navbar-wrapper">
          <Box className="title-wrapper">
            <AppsIcon onClick={()=>setLaunchOpen(true)} />
         
{!setLaunchOpen && <AppLauncher launchOpen={launchOpen} />}
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
