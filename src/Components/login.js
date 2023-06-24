import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Checkbox,
} from "@mui/material";
import {Link} from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import Header from "./loginsignupheader"
import Footer from "./Loginsignupfooter"

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#24248f" };
  const btnstyle = { margin: "8px 0" };

  return (
    <>
    <Header />
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LoginIcon />
          </Avatar>
          <h2>Log In</h2>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              placeholder="Enter username"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
            />
          </Grid>
        </Grid>

        <Checkbox name="checkedB" color="primary" />
        <label>Remember me</label>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Log in
        </Button>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography>
              <Link href="#">Forgot password ?</Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {" "}
              Do you have an account ?<Link to="/signup">Sign Up</Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
    <Footer />
    </>
  );
};

export default Login;

