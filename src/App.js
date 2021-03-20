import React, { Component } from "react";
import Display from "./components/Display";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { makeStyles } from "@material-ui/core/styles";

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import About from "./components/About";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Hero />
        <About />
        <Display />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
