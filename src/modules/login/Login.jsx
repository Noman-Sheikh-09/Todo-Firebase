import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import React from "react";
import "./LoginStyle.css";
import GoogleIcon from '@mui/icons-material/Google';

export default function Login() {
  return (
    <>
      <Grid>
        <Paper elevation={10} className="paper">
          <Grid align="center" className="login-box">
            <Avatar className="login-avtr">
              <LockIcon className="login-icon" />
            </Avatar>
            <Typography variant="h3" color="primary">
              Log In
            </Typography>
          </Grid >
          <Grid  align="center" className="login-input">
            <TextField
              label="username"
              placeholder="Enter Username"
              required
              className="feild"
            />
            <TextField
              label="password"
              placeholder="Enter Password"
              required
              className="password-feild"
            />
            <Button variant="contained" className="signin-btn">
              Sign In
            </Button>
          </Grid>
          <Typography variant="body2" color="initial" className="signup-hint">
            Don't Have Any Account?
            <Button variant="text" color="primary" component="a" href="/signup">
              Create Account
            </Button>
          </Typography>
          
        </Paper>
      </Grid>
    </>
  );
}
