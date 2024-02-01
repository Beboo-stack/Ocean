import React from "react";

const Button = ({ variant = "primary", isFullsize, children }) => {
  return (
    <button
      className={`btn  ${
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : "btn-outline"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
