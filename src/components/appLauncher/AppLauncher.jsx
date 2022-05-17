import { Paper } from '@mui/material'
import React from 'react'
import AppsIcon from "@mui/icons-material/Apps";
export default function AppLauncher({launchOpen}) {
  return (
    <>
        <Paper elevation={5} className="app-launcher-wrapper">
 <AppsIcon onClick={()=>launchOpen(false)} />
 <h1>
     This is App launcher
 </h1>
        </Paper>
    </>
  )
}
