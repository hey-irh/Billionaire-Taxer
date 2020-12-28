import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAppContext } from '../../Context';
import Grid from '@material-ui/core/Grid';
import './TopGrid.css';

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

let usAvgWealth = 65904;

function TopGrid() {
  const {
    setbillionaire,
    setname,
    setremainingWealth,
    name,
    billionaire,
  } = useAppContext();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className='entire'>
            <div className='headers'>
              <h1>BILLIONAIRE TAXER</h1>
              <img
                src='https://pngimg.com/uploads/mark_zuckerberg/mark_zuckerberg_PNG34.png'
                alt='Mark Zuckerberg'
                onClick={() => {
                  setbillionaire(101700000000);
                  setname('Mark Zuckerberg');
                  setremainingWealth(101700000000);
                }}
              />

              <img
                src='https://images-na.ssl-images-amazon.com/images/I/61dJJZtbdNL._AC_SY355_.jpg'
                alt='Jeff Bezos'
                onClick={() => {
                  setbillionaire(183600000000);
                  setname('Jeff Bezos');
                  setremainingWealth(183600000000);
                }}
              />
            </div>
            <h2 className='initialStatement'>
              {name} net worth is{' '}
              {Math.round((billionaire - usAvgWealth) / usAvgWealth) * 100}%
              above the US average. <p></p>Use the slider to tax his wealth and
              help fund .....{' '}
            </h2>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default TopGrid;
