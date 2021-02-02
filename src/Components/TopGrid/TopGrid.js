import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAppContext } from '../../Context';
import Grid from '@material-ui/core/Grid';
import './TopGrid.css';
import JeffBezospic from './JeffBezoslaughing.png';
import markZuckpic from './markZuckerbergWave.png';
import ElonMuskPic from './ElonMuskPic.png';
import billGatesPic from './bill gates.png';
import JeffBezosOutlined from './JeffBezoslaughingOutlined.png';
import ElonMuskPicOutlined from './ElonMuskPicOutlined.png';
import billGatesPicOutlined from './bill gatesOutlined.png';
import markZuckpicOutlined from './markZuckerbergWaveOutlined.png';

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
  console.log(name);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className='entire'>
            <div className='headers'>
              <h1>BILLIONAIRE TAXER</h1>
              <p className='intro'>
                Since 2015 the world's top 1% has owned more wealth than the
                rest of the population combined.
                <br></br>
                Use the slider to tax a billionaire's wealth and help fund
                social change.
              </p>
              <p className='picker'>Pick your billionaire</p>
              <div className='images'>
                {name !== `Elon Musk's` && (
                  <img
                    src={ElonMuskPic}
                    alt='Elon Musk'
                    className='ElonMusk-img billionaire-img'
                    onClick={() => {
                      setbillionaire(209000000000);
                      setname(`Elon Musk's`);
                      setremainingWealth(209000000000);
                    }}
                  />
                )}

                {name === `Elon Musk's` && (
                  <img
                    src={ElonMuskPicOutlined}
                    alt='Elon Musk'
                    className='ElonMusk-img billionaire-img'
                  />
                )}
                {name !== 'Bill Gates' && (
                  <img
                    src={billGatesPic}
                    alt='Bill Gates'
                    className='BillGates-img billionaire-img'
                    onClick={() => {
                      setbillionaire(134000000000);
                      setname('Bill Gates');
                      setremainingWealth(134000000000);
                    }}
                  />
                )}
                {name === 'Bill Gates' && (
                  <img
                    src={billGatesPicOutlined}
                    alt='Bill Gates'
                    className='BillGates-img billionaire-img'
                  />
                )}
                {name !== 'Jeff Bezos' && (
                  <img
                    src={JeffBezospic}
                    alt='Jeff Bezos'
                    className='JeffBezos-img billionaire-img'
                    onClick={() => {
                      setbillionaire(186000000000);
                      setname('Jeff Bezos');
                      setremainingWealth(186000000000);
                    }}
                  />
                )}
                {name === 'Jeff Bezos' && (
                  <img
                    src={JeffBezosOutlined}
                    alt='Jeff Bezos'
                    className='JeffBezos-img billionaire-img'
                  />
                )}
                {name !== `Mark Zuckerberg's` && (
                  <img
                    src={markZuckpic}
                    alt='Mark Zuckerberg'
                    className='MarkZuckerberg-img billionaire-img'
                    onClick={() => {
                      setbillionaire(101000000000);
                      setname(`Mark Zuckerberg's`);
                      setremainingWealth(101000000000);
                    }}
                  />
                )}
                {name === `Mark Zuckerberg's` && (
                  <img
                    src={markZuckpicOutlined}
                    alt='Mark Zuckerberg'
                    className='MarkZuckerberg-img billionaire-img'
                  />
                )}
              </div>
            </div>
            <h2 className='initialStatement'>
              {name} net worth is{' '}
              <span className='valuepercent'>
                {Math.round((billionaire - usAvgWealth) / usAvgWealth) * 100}%
              </span>{' '}
              above the US average.
            </h2>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default TopGrid;
