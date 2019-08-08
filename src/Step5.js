import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Autorenew from "@material-ui/icons/Autorenew";

const useStyles = makeStyles(theme => ({
  input: {
    display: "none"
  },
  button: {
    marginLeft: theme.spacing(1),
    marginTop: "80px"
  }
}));

function Step5({ currentStep, nextStep, clearForm }) {
  const classes = useStyles;
  if (currentStep === 5) {
    return (
      <div>
        <h1>Thank you</h1>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          onClick={() => {
            nextStep(1);
            clearForm();
          }}
        >
          <Autorenew className={classes.leftIcon} />
          Restart form
        </Button>
      </div>
    );
  } else {
    return null;
  }
}

export default Step5;
