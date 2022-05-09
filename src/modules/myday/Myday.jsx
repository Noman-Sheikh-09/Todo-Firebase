import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Paper,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Avatar from "../../components/avatar/AvatarProfile";
import Sidebar from "../../components/sidebar/Sidebar";
import DehazeIcon from "@mui/icons-material/Dehaze";

import Input from "../../components/input/Input";
export default function Myday() {
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
              <Input />
            </div>
          </Grid>
          {/* <Paper elevation={10} >
          <TextField placeholder="Add" value={addTask} onChange={(e)=>setAddTask(e.target.value)}/>
          </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}
