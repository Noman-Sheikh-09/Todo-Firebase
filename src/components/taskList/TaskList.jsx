import { Box, Button, InputBase, Paper, Typography } from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import UseTaskList from "./UseTaskList";
import "./TaskListStyle.css";
export default function TaskList() {
  const { tasks } = UseTaskList();
  return (
   <>
   {
     tasks.map((item, index)=>{
  

      <Paper className="input-bg" key={index}>
       <Typography variant="body1">
         {item.task}
       </Typography>
        <Box className="task-icons">
          <div className="three-icons">
            <CalendarMonthIcon className="three-icons" />
            <NotificationsNoneIcon className="three-icons" />
            <EventRepeatIcon className="three-icons" />
          </div>
          <Button
            variant="text"
            color="primary"
           
          >
            Del
          </Button>
        </Box>
      </Paper>
     })
   }
   </>
  );
}
