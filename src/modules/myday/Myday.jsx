import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Avatar from "../../components/avatar/AvatarProfile";
// import { ExpandMore } from '@mui/icons-material'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Myday() {
  const date = new Date().getDay().toLocaleString();
  return (
    <div className="full">
      <Grid container>
      <Grid item md={3}>
<Sidebar />
      </Grid>
      <Grid item md={9} sm={12} xs={12}>
        <Box>
        <Typography variant="h4" color="initial">
  My Day... 
</Typography>
        </Box>

</Grid>

      
      </Grid>
   
    </div>
  );
}
