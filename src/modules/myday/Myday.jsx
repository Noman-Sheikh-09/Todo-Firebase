import {
  Grid,
  Typography,
  Paper,
  Button,
  InputBase,
  Box,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import "./MydayStyle.css";
import UseMyday from "./UseMyday";
import TaskList from "../../components/taskList/TaskList";
 
export default function Myday() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [task, setAddTask,onSubmitHandler ,tasks,
    ctaDeleteHandler,
    ctaUpdateHandler,
    onClickUpdateHandler,
  flag,
setFlag]= UseMyday("");

  return (
    <div className="full">
      <Grid container>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
        <Grid item md={9} sm={12} xs={12}>
          <DehazeIcon />
          <Typography variant="h6" color="initial" sx={{ margin: 5 }}>
            My Day...
          </Typography>
          <Grid item xs={12} sm={12}>
            <div>
              <Paper className="input-bg">
                <div>

                <InputBase
                  placeholder="Add Task Here"
                  className="input-feild"
                  value={task}
                  onChange={(e)=>setAddTask(e.target.value)}
                />
                </div>
                <Box className="task-icons">
                  <div className="three-icons">
                    <CalendarMonthIcon className="three-icons" />
                    <NotificationsNoneIcon className="three-icons" />
                    <EventRepeatIcon className="three-icons" />
                  </div>
                  {
                    !flag ? <Button
                    variant="text"
                    color="primary"
                    onClick={onSubmitHandler}
                  >
                    Add
                  </Button> :
                  <Button
                  variant="contained"
                  color="primary"
                  onClick={onClickUpdateHandler}
                >
                Update
                </Button>
                  }
                </Box>
              </Paper>
      <TaskList tasks={tasks}  ctaDeleteHandler={ctaDeleteHandler} ctaUpdateHandler={ctaUpdateHandler} />

            </div>
            <br />
           
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
