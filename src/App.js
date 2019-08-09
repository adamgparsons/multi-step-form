import React, { useState, Fragment } from "react";
import "./App.css";

//steps
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

// Material UI
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import lightBlue from "@material-ui/core/colors/lightBlue";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    margin: "0 auto",
    padding: "20px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px"
  },
  cardHeader: {
    fontSize: "16px",
    color: grey[600]
  },
  cardHeaderRoot: {
    paddingLeft: "0px"
  },
  codeSnippet: {
    maxWidth: 500,
    margin: "0 auto",
    padding: "20px",
    backgroundColor: grey[800],
    color: lightBlue[300],
    fontSize: "16px",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px"
  },
  codeSnippetValue: {
    color: "white"
  }
}));

const backButtonStyle = {
  background: "none",
  color: "blue",
  border: "none",
  padding: "0",
  font: "inherit",
  borderBottom: "1px solid blue",
  cursor: "pointer"
};

function MasterForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [nameHasError, setNameHasError] = useState(true);
  const [haveChildren, setHaveChildren] = useState("");
  const [haveChildrenHasError, setHaveChildrenHasError] = useState(true);
  const [childrenNumber, setChildrenNumber] = useState("");
  const [childrenNumberHasError, setChildrenNumberHasError] = useState(true);
  const classes = useStyles();

  // this function determines the next step in the form.
  // It pulls this from the logic placed on button inside the StepX component
  function nextStep(e) {
    // if any field has an error then form has error is marked as true
    // if (formHasError !== true) {
    setCurrentStep(e);
    // }
  }

  function prevStep(e) {
    // if any field has an error then form has error is marked as true
    // if (formHasError !== true) {
    setCurrentStep(currentStep - 1);
    // e.preventDefault();
    // }
  }

  // accepts the name from a text field and assigns it to the name state
  function handleName(e) {
    setName(e.target.value);
    if (e.target.value.length > 0) {
      setNameHasError(false);
    } else {
      setNameHasError(true);
    }
  }

  // accepts the value from radio button
  // this hook is then used in the conditional logic on the button
  function handleHaveChildren(e) {
    setHaveChildren(e.target.value);
    if (e.target.value.length > 0) {
      setHaveChildrenHasError(false);
    } else {
      setHaveChildrenHasError(true);
    }
  }

  // accepts a value from the input & assigns it to the children state
  function handleChildrenNumber(e) {
    setChildrenNumber(e.target.value);
    if (e.target.value.length > 0) {
      setChildrenNumberHasError(false);
    } else {
      setChildrenNumberHasError(true);
    }
  }

  function clearForm() {
    setName("");
    setNameHasError(true);
    setHaveChildren("");
    setHaveChildrenHasError(true);
    setChildrenNumber("");
    setChildrenNumberHasError(true);
  }

  return (
    <Fragment>
      <Card className={classes.card}>
        {/* Each step is listed here with the relevent function passed
      down to the relevant Step
       */}
        <CardHeader
          title="Multi-step form example"
          classes={{
            content: classes.cardHeaderRoot,
            root: classes.cardHeaderRoot,
            title: classes.cardHeader
          }}
        />
        {currentStep === 1 || currentStep === 5 ? null : (
          <button onClick={() => prevStep()} style={backButtonStyle}>
            back
          </button>
        )}
        <Step1 currentStep={currentStep} nextStep={nextStep} />
        <Step2
          currentStep={currentStep}
          nextStep={nextStep}
          name={name}
          handleName={handleName}
          nameHasError={nameHasError}
        />
        <Step3
          currentStep={currentStep}
          nextStep={nextStep}
          handleHaveChildren={handleHaveChildren}
          haveChildren={haveChildren}
          haveChildrenHasError={haveChildrenHasError}
        />
        <Step4
          currentStep={currentStep}
          nextStep={nextStep}
          childrenNumber={childrenNumber}
          handleChildrenNumber={handleChildrenNumber}
          childrenNumberHasError={childrenNumberHasError}
        />
        <Step5
          currentStep={currentStep}
          nextStep={nextStep}
          clearForm={clearForm}
        />
        <br />
        <br />
      </Card>
      <pre className={classes.codeSnippet}>
        Current step:{" "}
        <span className={classes.codeSnippetValue}>{currentStep}</span>
        <br />
        Name: <span className={classes.codeSnippetValue}>{name}</span>
        <br />
        Have children:{" "}
        <span className={classes.codeSnippetValue}>{haveChildren}</span>
        <br />
        Number of children:{" "}
        <span className={classes.codeSnippetValue}>{childrenNumber}</span>
      </pre>
    </Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <MasterForm />
    </div>
  );
}

export default App;
