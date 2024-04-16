import { useContext } from "react";
import { ThemeContext } from "./demoUseContext";
import React from "react";

const CustomButton = ({ children }) => {
  const theme = useContext(ThemeContext);
  const className = "button button-" + theme;
  return (
    <button className={className}>
      {children}
      <style jsx>{`
        .button {
          padding: 10px;
          margin: 5px;
          border: none;
        }

        .button-dark {
          background-color: black;
          color: white;
        }

        .button-light {
          color: black;
          background-color: white;
        }
      `}</style>
    </button>
  );
};

export default CustomButton;
