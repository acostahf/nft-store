import React from "react";

import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "40vh",
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundBlendMode: "overlay",
  },
  container: {
    height: "50vh",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "column",
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "solid",
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
        <Typography className={classes.heading}>Im Fabian,</Typography>
      </Container>
    </div>
  );
};

export default Hero;
