import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputBase,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Avatar from "../../components/avatar/AvatarProfile";
// import { ExpandMore } from '@mui/icons-material'
import Sidebar from "../../components/sidebar/Sidebar";
import DehazeIcon from '@mui/icons-material/Dehaze';
export default function Myday() {
  return (
    <div className="full">
      <Grid container>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
      
        <Grid item md={9} sm={12} xs={12}>
      
          <Box sx={{display:'flex'}}>
          <DehazeIcon />
            <Typography variant="h4" color="initial" sx={{ margin:5}}>
              My Day...
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
