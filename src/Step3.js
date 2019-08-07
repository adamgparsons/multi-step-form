import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Fragment } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1),
    marginTop: "80px"
  }
}));

function Step3({ currentStep, nextStep, handleHaveChildren, haveChildren }) {
  const classes = useStyles();
  if (currentStep === 3) {
    return (
      <Fragment>
        <div className="form-group">
          <h1>Do you have children?</h1>
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
        {/* <form>
          <label>
            <input
              type="radio"
              name="name"
              value="yes"
              onChange={handleHaveChildren}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="name"
              value="no"
              onChange={handleHaveChildren}
            />
            No
          </label>
        </form> */}
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => (haveChildren === "yes" ? nextStep(4) : nextStep(5))}
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
