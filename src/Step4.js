import React from "react";

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

export default Step4;
