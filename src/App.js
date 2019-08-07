import React, { useState } from "react";
import "./App.css";

function MasterForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [haveChildren, setHaveChildren] = useState("");
  const [childrenNumber, setChildrenNumber] = useState("");

  function nextStep(e) {
    setCurrentStep(e);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleHaveChildren(e) {
    setHaveChildren(e.target.value);
  }

  function handleChildrenNumber(e) {
    setChildrenNumber(e.target.value);
  }

  return (
    <div>
      <Step1 currentStep={currentStep} nextStep={nextStep} />
      <Step2
        currentStep={currentStep}
        nextStep={nextStep}
        name={name}
        handleName={handleName}
      />
      <Step3
        currentStep={currentStep}
        nextStep={nextStep}
        handleHaveChildren={handleHaveChildren}
        haveChildren={haveChildren}
      />
      <Step4
        currentStep={currentStep}
        nextStep={nextStep}
        childrenNumber={childrenNumber}
        handleChildrenNumber={handleChildrenNumber}
      />
      <Step5 currentStep={currentStep} />
      <br />
      <br />
      Current step is {currentStep}
      <br />
      Name is {name}
      <br />
      Have children? {haveChildren}
      <br />
      Number of children? {childrenNumber}
    </div>
  );
}

function Step1({ currentStep, nextStep }) {
  if (currentStep === 1) {
    return (
      <div className="form-group">
        <h1>Let's get started</h1>

        <button onClick={() => nextStep(2)}>Start</button>
      </div>
    );
  } else {
    return null;
  }
}

function Step2({ currentStep, nextStep, name, handleName }) {
  if (currentStep === 2) {
    return (
      <div className="form-group">
        <h1>What is your name?</h1>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter name"
          value={name} // Prop: The email input data
          onChange={handleName} // Prop: Puts data into state
        />
        <button onClick={() => nextStep(3)}>Next</button>
      </div>
    );
  } else {
    return null;
  }
}

function Step3({ currentStep, nextStep, handleHaveChildren, haveChildren }) {
  if (currentStep === 3) {
    return (
      <div className="form-group">
        <h1>Do you have children?</h1>
        <form>
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
        </form>
        <button
          onClick={() => (haveChildren === "yes" ? nextStep(4) : nextStep(5))}
        >
          Next
        </button>
      </div>
    );
  } else {
    return null;
  }
}

function Step4({
  currentStep,
  nextStep,
  childrenNumber,
  handleChildrenNumber
}) {
  if (currentStep === 4) {
    return (
      <div className="form-group">
        <h1>How many children do you have?</h1>
        <form>
          <input
            id="children-number"
            name="children-number"
            type="text"
            placeholder="number of children"
            value={childrenNumber} // Prop: The email input data
            onChange={handleChildrenNumber} // Prop: Puts data into state
          />
        </form>
        <button onClick={() => nextStep(5)}>Next</button>
      </div>
    );
  } else {
    return null;
  }
}

function Step5({ currentStep }) {
  if (currentStep === 5) {
    return (
      <div className="form-group">
        <h1>Thank you</h1>
      </div>
    );
  } else {
    return null;
  }
}

function App() {
  return (
    <div className="App">
      <MasterForm />
    </div>
  );
}

export default App;
