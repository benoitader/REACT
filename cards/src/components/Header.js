import { useContext } from "react";

import { ThemeContext } from "../App";
import Modal from "./Modal";

function Header() {
  const [theme, toggleTheme] = useContext(ThemeContext);
  const button = (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
  return <header>{theme === "dark" ? <Modal>{button}</Modal> : button}</header>;
}

export default Header;
