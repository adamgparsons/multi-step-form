import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  input: {
    display: "none"
  },
  button: {
    marginLeft: theme.spacing(1),
    marginTop: "80px"
  }
}));

function Step1({ currentStep, nextStep }) {
  const classes = useStyles;
  if (currentStep === 1) {
    return (
      <div className="form-group">
        <h1>Let's get started</h1>
        <p>
          This is an example of a conditional form. See below for a display of
          how the data values change
        </p>
        {/* On click next step is ran with the next step being 2 */}
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          classes={classes.button}
          onClick={() => nextStep(2)}
        >
          Start
        </Button>
      </div>
      div
    );
  } else {
    return null;
  }
}

export default Step1;
