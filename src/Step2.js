import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

function Step2({
  currentStep,
  nextStep,
  name,
  handleName,
  nameHasError,
  setFormHasError
}) {
  const [showError, setShowError] = useState("");
  const classes = useStyles();

  console.log("showError:", showError);

  if (currentStep === 2) {
    return (
      <div className="form-group">
        <h1>What is your name?</h1>
        <TextField
          error={showError && nameHasError ? true : false}
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={name}
          onChange={handleName}
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            if (nameHasError !== true) {
              nextStep(3);
            } else {
              setShowError(true);
            }

            // checkError();
          }}
        >
          Next
        </Button>
      </div>
    );
  } else {
    return null;
  }
}

export default Step2;
