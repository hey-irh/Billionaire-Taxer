import React, { useState, useEffect } from "react";
import "./MainGrid.css";
import { makeStyles } from "@material-ui/core/styles";
import { useAppContext } from "../../Context";
import Grid from "@material-ui/core/Grid";
import VerticalSlider from "../VerticleSlider/VerticleSlider";
import Statements from "../Statements/Statements";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function CenteredGrid() {
  const { remainingWealth, name } = useAppContext();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2 className="networth">
            {name} Net Worth: ${remainingWealth.toLocaleString()}
          </h2>
        </Grid>
        <Grid item xs={4}>
          <VerticalSlider />
        </Grid>
        <Grid item xs={8}>
          <Statements />
        </Grid>
        <Grid item xs={12}>
          BOTTOM
        </Grid>
      </Grid>
    </div>
  );
}

export default CenteredGrid;
