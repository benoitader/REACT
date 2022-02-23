import { createContext, useState } from "react";

import Card from "./components/Card";
import Input from "./components/Input";
import "./App.css";
import Header from "./components/Header";

const colors = ["♥", "♦", "♣", "♠"];
const themes = ["light", "dark"];

export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");
  const [cards, setCards] = useState([]);
  const onAdd = (value) => {
    const id = (cards[cards.length - 1]?.id || 0) + 1;
    setCards([...cards, { id, value, color: colors[id % colors.length] }]);
  };
  const onDelete = (id) => () => {
    setCards(cards.filter((card) => card.id !== id));
  };
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <div className={["App", `App-${theme}`].join(" ")}>
        <Header />
        <Input onAdd={onAdd} />
        <ul className="App-list">
          {cards.map((card) => (
            <li key={card.id} className="App-item">
              <Card
                value={card.value}
                color={card.color}
                onDelete={onDelete(card.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
