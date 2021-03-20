import React from "react";

import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "25vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: "50vh",
    // backgroundColor: "#ffffff",
    padding: 30,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "start",
    flexDirection: "column",
    height: 300,
    width: 1000,
  },
  heading: {
    fontWeight: "bold",
    color: "#ffffff",
  },
  about: {
    fontWeight: "normal",
    color: "#ffffff",
    padding: 60,
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.heading}>
          Welcome to my NFT Store! This is where you can find my NFTs and what
          platform they can be found on.{" "}
        </Typography>
        <Typography variant="h6" className={classes.about}>
          {" "}
          A little about me: Im a artist from Austin who just got involved in
          the NFT space. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Accusamus ratione ea ad tempora beatae rem nesciunt repudiandae
          libero expedita fugit itaque omnis qui excepturi quas quisquam, ipsam
          assumenda at possimus!.{" "}
        </Typography>
      </Container>
    </div>
  );
};

export default About;
