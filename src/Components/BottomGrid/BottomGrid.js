import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '../Table/Table';
import './BottomGrid.css';

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

function BottomGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <div className='bottomStatement'>
            Learn more about wealth inequality at:{'  '}
            <a href='https://inequality.org/facts/wealth-inequality/'>
              inequality.org/facts/wealth-inequality/
            </a>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Table />
        </Grid>
      </Grid>
    </div>
  );
}

export default BottomGrid;
