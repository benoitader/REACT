import { useContext } from "react";

import { ThemeContext } from "../App";
import "./Button.css";

function Button({ onClick }) {
  const [theme] = useContext(ThemeContext);
  return (
    <button
      className={["Button", `Button-${theme}`].join(" ")}
      onClick={onClick}
    >
      Delete
    </button>
  );
}

export default Button;
