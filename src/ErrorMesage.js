import React from "react";
import red from "@material-ui/core/colors/red";

const errorBoxStyle = {
  margin: "24px 8px",
  padding: "4px 24px",
  borderLeft: "5px solid #f44336",
  backgroundColor: red[100]
};

const errorContentStyle = {
  marginTop: "16px"
};

function ErrorMessage({ message }) {
  // const classes = useStyles;

  return (
    <div style={errorBoxStyle}>
      <p style={errorContentStyle}>{message}</p>
    </div>
  );
}

export default ErrorMessage;
