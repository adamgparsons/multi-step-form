import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Fragment } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import ErrorMessage from "./ErrorMesage";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1),
    marginTop: "80px"
  }
}));

function Step3({
  currentStep,
  nextStep,
  handleHaveChildren,
  haveChildren,
  haveChildrenHasError
}) {
  const [showError, setShowError] = useState("");
  const classes = useStyles();
  if (currentStep === 3) {
    return (
      <Fragment>
        <div className="form-group">
          <h1>Do you have children?</h1>
          {showError && haveChildrenHasError ? (
            <ErrorMessage message="Please select an option" />
          ) : null}
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="children"
              name="children"
              className={classes.group}
              value={haveChildren}
              onChange={handleHaveChildren}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            if (haveChildrenHasError !== true) {
              haveChildren === "yes" ? nextStep(4) : nextStep(5);
              setShowError(false);
            } else {
              setShowError(true);
            }
          }}
        >
          Next
        </Button>
      </Fragment>
    );
  } else {
    return null;
  }
}

export default Step3;
