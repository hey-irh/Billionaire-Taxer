import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAppContext } from '../../Context';
import Grid from '@material-ui/core/Grid';
import './TopGrid.css';
import JeffBezospic from './JeffBezos.png';
import markZuckpic from './markZuckerberg.png';
import bernardArnaultPic from './bernardArnault.png';
import billGatesPic from './bill gates.png';

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
              <p className='picker'>Pick your billionaire</p>
              <div className='images'>
                <img
                  src={billGatesPic}
                  alt='Bill Gates'
                  className='billionaire-img'
                  width='200em'
                  onClick={() => {
                    setbillionaire(120000000000);
                    setname('Bill Gates');
                    setremainingWealth(120000000000);
                  }}
                />
                <img
                  src={markZuckpic}
                  alt='Mark Zuckerberg'
                  className='MarkZuckerberg billionaire-img'
                  onClick={() => {
                    setbillionaire(99900000000);
                    setname('Mark Zuckerberg');
                    setremainingWealth(99900000000);
                  }}
                />

                <img
                  src={JeffBezospic}
                  alt='Jeff Bezos'
                  className='billionaire-img'
                  width='400em'
                  onClick={() => {
                    setbillionaire(191200000000);
                    setname('Jeff Bezos');
                    setremainingWealth(191200000000);
                  }}
                />

                <img
                  src={bernardArnaultPic}
                  alt='Bernard Arnault'
                  className='billionaire-img'
                  width='350em'
                  onClick={() => {
                    setbillionaire(151700000000);
                    setname('Bernard Arnault');
                    setremainingWealth(151700000000);
                  }}
                />
              </div>
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
