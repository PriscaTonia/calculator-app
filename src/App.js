import { useState } from "react";
import { Attribution, Header, Keypad, Screen } from "./components";

function App() {
  const [theme, setTheme] = useState("theme1");
  const [value, setValue] = useState("")
  let expression = "";

  const handleClick = (e) => {
    const currentTheme = e.target.value;
    setTheme(currentTheme);
  };
 
  const displayExp = (e)=>{
    console.log(e.target.innerHTML);
  }
  return (
    <div className="App">
      <main className={theme}>
        <Header
          handleclick={(e) => {
            handleClick(e);
          }}
        />
        <Screen />
        <Keypad displayExp = {(e)=>{displayExp(e)}}/>
        <Attribution />
      </main>
    </div>
  );
}

export default App;
