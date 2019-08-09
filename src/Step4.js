import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ErrorMessage from "./ErrorMesage";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    display: "block"
  },
  button: {
    margin: theme.spacing(1),
    marginTop: "80px"
  }
}));

function Step4({
  currentStep,
  nextStep,
  childrenNumber,
  handleChildrenNumber,
  childrenNumberHasError
}) {
  const [showError, setShowError] = useState("");
  const classes = useStyles();
  if (currentStep === 4) {
    return (
      <div className="form-group">
        <h1>How many children do you have?</h1>
        {showError && childrenNumberHasError ? (
          <ErrorMessage message="Please enter number of children" />
        ) : null}
        <form>
          <TextField
            error={showError && childrenNumberHasError ? true : false}
            id="children-number"
            label="Number of children"
            name="children-number"
            className={classes.textField}
            value={childrenNumber}
            onChange={handleChildrenNumber}
            margin="normal"
            variant="outlined"
            type="number"
            pattern="\d*"
          />
        </form>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            if (childrenNumberHasError !== true) {
              nextStep(5);
            } else {
              setShowError(true);
            }
          }}
        >
          Complete form
        </Button>
      </div>
    );
  } else {
    return null;
  }
}

export default Step4;
