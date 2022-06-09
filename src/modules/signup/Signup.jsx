import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import "./SignupStyle.css";
import UseSignup from "./UseSignup";

export default function Signup() {
  const [ fname,setFirstName,lname,setLastName,email,setEmail, password,setPassword, signupHandler,] = UseSignup();
  // console.log(name, email, father, password);
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
                label="Your Name"
                placeholder="Enter Your Name"
                value={fname}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                label="Father Name"
                placeholder="Enter Father Name"
                value={lname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>

            <Grid className="signup-input">
              <TextField
                label="Email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                label="Password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Button
              variant="outlined"
              color="primary"
              className="signup-btn"
              onClick={signupHandler}
            >
              Create Account
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
