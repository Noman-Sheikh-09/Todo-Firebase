import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import "./SignupStyle.css";
export default function Singup() {
  return (
    <>
      <Grid>
        <Paper elevation={10} className="signup-papr">
          <Grid align="center">
            <Typography variant="h3" color="primary">
              Create Your Account
            </Typography>
            <Grid display={"flex"} className="signup-input">
              <TextField
                label="First Name"
                placeholder="Enter First Name"
                required
              />
              <TextField
                label="Last Name"
                placeholder="Enter Last Name"
                required
              />
            </Grid>
            <Grid className="signup-input">
              <TextField
                label="Email"
                placeholder="Enter Email Address"
                required
              />
              <TextField
                label="Date of Birth"
                placeholder="Enter Date of Birth "
                required
              />
            </Grid>
            <Grid className="signup-input">
              <TextField
                label="Password"
                placeholder="Enter Password"
                required
              />
              <TextField
                label="Confirm password"
                placeholder="Enter Confirm password "
                required
              />
            </Grid>
            <Button variant="outlined" color="primary" className="signup-btn" component="a" href="/myday">
              Create Account
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
