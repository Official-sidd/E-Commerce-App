import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Grid
      className="login"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",

      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "2rem 4rem",
          borderRadius: "8px",
          boxShadow: "0 0 10px grey",
          height: "400px",
          width: "30vw",
          maxHeight: "500px",
          justifyContent:"space-evenly",
          backgroundColor:"white"
        }}
      >
        <h1 style={{fontFamily:"sans-serif",color:"purple"}}>Welcome !</h1>
        <TextField variant="standard" placeholder="Enter Username"></TextField>
        <TextField variant="standard" placeholder="Enter Password"></TextField>
        <Button variant="contained" color="secondary">
          Login
        </Button>
      </form>
    </Grid>
  );
};

export default Login;
