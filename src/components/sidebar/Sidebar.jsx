import React from "react";
import Box from '@mui/material/Box';
import './SidebarStyle.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Button } from "@mui/material";
import UseSidebar from "./UseSidebar";
export default function Sidebar() {
  const {logoutHandler} = UseSidebar();
  return <Box  className="sidebar-wrapper">
<DehazeIcon />
   <List className="list-wrapper">
     <ListItem>
       <ListItemButton component="a" href="/">
<LightModeOutlinedIcon />
<ListItemText primary='My Day' className="sidebar-text"/>
       </ListItemButton>
     </ListItem>
     <ListItem>
       <ListItemButton component="a" href="/important">
<StarBorderOutlinedIcon/>
<ListItemText primary='Important' className="sidebar-text"/>
       </ListItemButton>
     </ListItem>
     <ListItem>
       <ListItemButton component="a" href="/planning">
<CalendarMonthOutlinedIcon />
<ListItemText primary='Planning' className="sidebar-text" />
       </ListItemButton>
     </ListItem>
     <ListItem>
       <ListItemButton component="a" href="/assigned">
<PersonOutlineRoundedIcon />
<ListItemText primary='Assigned to me' className="sidebar-text" />
       </ListItemButton>
     </ListItem>
     <ListItem>
       <ListItemButton component="a" href="/tasks">
<HomeOutlinedIcon />
<ListItemText primary='Tasks' className="sidebar-text"/>
       </ListItemButton>
       <Button variant="outlined" onClick={logoutHandler} >
         Logout
       </Button>
     </ListItem>
   </List>
   </Box>;
}
