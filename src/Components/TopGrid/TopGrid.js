import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAppContext } from "../../Context";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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

function TopGrid() {
  const { setbillionaire, setname, setremainingWealth } = useAppContext();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="entire">
            <div className="headers">
              <h1>BILLIONAIRE KILLER</h1>
              <img
                src="https://pngimg.com/uploads/mark_zuckerberg/mark_zuckerberg_PNG34.png"
                alt="Mark Zuckerberg"
                onClick={() => {
                  setbillionaire(101700000000);
                  setname("Mark Zuckerberg");
                  setremainingWealth(101700000000);
                }}
              />

              <img
                src="https://images-na.ssl-images-amazon.com/images/I/61dJJZtbdNL._AC_SY355_.jpg"
                alt="Jeff Bezos"
                onClick={() => {
                  setbillionaire(183600000000);
                  setname("Jeff Bezos");
                  setremainingWealth(183600000000);
                }}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default TopGrid;
