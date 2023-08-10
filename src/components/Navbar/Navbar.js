import React , {useState} from "react";
import Grid from "@mui/material/Grid";
import { Button, Divider, IconButton } from "@mui/material";
import Logo from "../Logo/Logo";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const Navbar = () => {

  const [loggedIn,setLoggedIn] = useState(false)

  return (
    <Grid
      style={{
        height: "10vh",
        display: "flex",
        borderBottom: "1px solid gray",
      }}
    >
      <Grid
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          paddingLeft: "2rem",
        }}
      >
        <Link to={"/"} style={{textDecoration:"none"}}>
        <Logo />
        </Link>
      </Grid>
      <Grid
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* <Divider variant="middle" orientation="vertical" flexItem /> */}
        <Button style={{ color: "gray", fontWeight: 600 , textTransform:"capitalize"}} component={Link} to="/product">Products</Button>
        <Button style={{ color: "gray", fontWeight: 600 , textTransform:"capitalize"}} component={Link} to="/about">About</Button>
        <Button style={{ color: "gray", fontWeight: 600 , textTransform:"capitalize"}} component={Link} to="/contact">Contact</Button>
        {loggedIn ? 
        <Button variant="contained" color="secondary" endIcon={<ShoppingCartIcon/>} style={{fontWeight: 600 }} component={Link} to="/cart">Cart</Button>
        :
        <Button variant="contained" color="secondary" style={{fontWeight: 600 }} component={Link} to="/login" size="large">Login</Button>
      }
      </Grid>
    </Grid>
  );
};

export default Navbar;
