import { Grid } from "@mui/material";
import React from "react";
import error from "../Images/error.jpg"

const ErrorPage = () => {
  return (
    <Grid style={{ display: "flex", height: "90vh"}}>
      <Grid
        className="message"
        container
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50vw",
          alignItems: "center",
          justifyContent:"center",
          backgroundColor:"purple"
        }}
      >
        <h1 style={{ fontSize: "40vh",color:"white"}}>404</h1>
        <Grid>
          <h1 style={{ fontSize: "10vh",color:"#D7BBF5"}}>Something Went</h1>
          <h1 style={{ fontSize: "10vh",textTransform:"uppercase",color:"white"}}>Wrong</h1>
        </Grid>
      </Grid>
      <Grid
        className="image"
        style={{ width: "50vw",paddingTop:"1rem"}}
      >
        <img src={error} alt="error" style={{ width: "100%", height: "100%", objectFit: "contain" }}></img>
      </Grid>
    </Grid>
  );
};

export default ErrorPage;
