import React from "react";

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

export default Step5;
