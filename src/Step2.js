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

function Step2({ currentStep, nextStep, name, handleName }) {
  const classes = useStyles();

  if (currentStep === 2) {
    return (
      <div className="form-group">
        <h1>What is your name?</h1>
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={name}
          onChange={handleName}
          margin="normal"
        />
        {/* <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter name"
          // value is taken from name
          value={name}
          // when there is a change handleName assigns the value to name
          onChange={handleName} // Prop: Puts data into state
        /> */}
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => nextStep(3)}
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
