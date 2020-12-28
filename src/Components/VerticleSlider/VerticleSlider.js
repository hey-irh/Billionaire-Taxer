import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import { useAppContext } from '../../Context';
import Slider from '@material-ui/core/Slider';
import marks from '../../Data/marks';
import './VerticleSlider.css';

const useStyles = makeStyles({
  root: {
    height: 10000,
  },
});

function valuetext(value) {
  return `$${value}`;
}

export default function VerticalSlider(props) {
  const {
    billionaire,
    name,
    setremainingWealth,
    remainingWealth,
    tax,
    setTax,
  } = useAppContext();
  const [marksList, setmarksList] = useState(marks);

  const classes = useStyles();

  function onChangeFunction(event, value) {
    setremainingWealth(value);

    var h = window.innerHeight;
    var y = event.clientY - h / 2;
    window.scrollBy(0, y * 0.1);
  }

  useEffect(() => {
    setmarksList([
      ...marksList,
      {
        value: billionaire,
        label: `${name} current wealth: $${billionaire.toLocaleString()}`,
      },
    ]);
  }, [billionaire]);

  useEffect(() => {
    setTax(Math.round(((billionaire - remainingWealth) / billionaire) * 100));
  });

  return (
    <React.Fragment>
      <div className='main'>
        <StylesProvider injectFirst>
          <div className={classes.root}>
            <Slider
              key={`slider-${billionaire}`}
              className='slider'
              orientation='vertical'
              defaultValue={billionaire}
              onChange={(event, value) => onChangeFunction(event, value)}
              max={billionaire}
              getAriaValueText={valuetext}
              aria-labelledby='vertical-slider'
              marks={marksList}
              valueLabelDisplay='on'
              valueLabelFormat={(value) => (
                <div>
                  {' '}
                  Tax {name} Wealth {tax}% <br></br> <br></br>
                  To reduce his net worth to: ${value.toLocaleString()}
                </div>
              )}
            />
          </div>
        </StylesProvider>
      </div>
    </React.Fragment>
  );
}
