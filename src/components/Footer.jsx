import React from "react";

import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "25vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "column",

    height: 300,
    width: 1000,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.heading}>footer</Typography>
        <Typography className={classes.heading}></Typography>
      </Container>
    </div>
  );
};

export default Footer;
