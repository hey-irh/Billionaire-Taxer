import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/core/styles";
import { useAppContext } from "../../Context";
import Slider from "@material-ui/core/Slider";
import marks from "../../Data/marks";
import "./VerticleSlider.css";

const useStyles = makeStyles({
  root: {
    height: 10000,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function VerticalSlider() {
  const { billionaire, name, setremainingWealth } = useAppContext();
  const [marksList, setmarksList] = useState(marks);
  const classes = useStyles();

  useEffect(() => {
    setmarksList([
      ...marksList,
      {
        value: billionaire,
        label: `${name} current wealth: $${billionaire.toLocaleString()}`,
      },
    ]);
  }, [billionaire]);

  return (
    <React.Fragment>
      <div className="main">
        <StylesProvider injectFirst>
          <div className={classes.root}>
            <Slider
              key={`slider-${billionaire}`}
              className="slider"
              orientation="vertical"
              defaultValue={billionaire}
              onChange={(event, value) => setremainingWealth(value)}
              max={billionaire}
              getAriaValueText={valuetext}
              aria-labelledby="vertical-slider"
              marks={marksList}
              valueLabelDisplay="on"
            />
          </div>
        </StylesProvider>
      </div>
    </React.Fragment>
  );
}
