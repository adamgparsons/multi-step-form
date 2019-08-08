import React from "react";
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

function Step4({
  currentStep,
  nextStep,
  childrenNumber,
  handleChildrenNumber
}) {
  const classes = useStyles();
  if (currentStep === 4) {
    return (
      <div className="form-group">
        <h1>How many children do you have?</h1>
        <form>
          <TextField
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
          {/* <input
            id="children-number"
            name="children-number"
            type="text"
            placeholder="number of children"
            value={childrenNumber} // Prop: The email input data
            onChange={handleChildrenNumber} // Prop: Puts data into state
          /> */}
        </form>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => nextStep(5)}
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
