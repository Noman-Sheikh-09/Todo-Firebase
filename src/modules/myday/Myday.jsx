import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
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

export default function Myday() {
  const [showSidebar, setShowSidebar] = useState(true);

  const [addTast, setAddTask] = useState("");

  const InputHandler = () => {};

  const onSubmitHandler = () => {};

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
                <InputBase
                  placeholder="Add Task Here"
                  onChange={InputHandler}
                  className="input-feild"
                />
                <Box className="task-icons">
                  <div className="three-icons">
                    <CalendarMonthIcon className="three-icons" />
                    <NotificationsNoneIcon className="three-icons" />
                    <EventRepeatIcon className="three-icons" />
                  </div>
                  <Button
                    variant="text"
                    color="primary"
                    onClick={onSubmitHandler}
                  >
                    Add
                  </Button>
                </Box>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
