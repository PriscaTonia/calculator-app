import { useState } from "react";
import { Attribution, Header, Keypad, Screen } from "./components";

function App() {
  const [theme, setTheme] = useState("theme1");

  const handleClick = (e) => {
    const currentTheme = e.target.value;
    setTheme(currentTheme);
  };
 

  return (
    <div className="App">
      <main className={theme}>
        <Header
          handleclick={(e) => {
            handleClick(e);
          }}
        />
        <Screen />
        <Keypad />
        <Attribution />
      </main>
    </div>
  );
}

export default App;
