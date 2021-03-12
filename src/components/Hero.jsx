import React from "react";

import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "40vh",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: "50vh",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "column",
    // borderColor: "red",
    // borderWidth: 1,
    // borderStyle: "solid",
    height: 300,
    width: 1000,
  },
  heading: {
    color: "#fff",
    fontWeight: "bolder",
    fontSize: "90px",
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.heading}>Hello,</Typography>
        <Typography className={classes.heading}>Im Artist_123</Typography>
      </Container>
    </div>
  );
};

export default Hero;
