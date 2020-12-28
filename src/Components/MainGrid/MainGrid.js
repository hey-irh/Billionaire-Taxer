import React from 'react';
import './MainGrid.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import VerticalSlider from '../VerticleSlider/VerticleSlider';
import Statements from '../Statements/Statements';
import { StatementProvider } from '../../StatementContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <VerticalSlider />
        </Grid>
        <StatementProvider>
          <Grid item xs={8}>
            <Statements />
          </Grid>
        </StatementProvider>
      </Grid>
    </div>
  );
}

export default CenteredGrid;
