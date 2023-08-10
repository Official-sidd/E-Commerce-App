import React from "react";
import Navbar from "../Navbar/Navbar";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Grid>
      <Navbar/>
      <Outlet/>
    </Grid>
  );
};

export default Home;
