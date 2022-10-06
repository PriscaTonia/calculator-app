import { useState } from "react";
import { Attribution, Header, Keypad, Screen } from "./components";

function App() {
  const [theme, setTheme] = useState("theme1");
  const [currentExpression, setCurrentExpression] = useState("");
  const [result, setResult] = useState();


  // Handling Theme Buttons to set theme
  const handleClick = (e) => {
    const currentTheme = e.target.value;
    setTheme(currentTheme);
  };

  // Handling Key Button Press for All the buttons
  const handleKeyPress = (e) => {

    // This handles all the actions that takes place when a key is pressed.
    let expLimit = 9;
    const activeKeyValue = e.target.innerHTML.toLowerCase();
    const actionKeys = ["del", "reset", "+", "="];

    if (actionKeys.includes(activeKeyValue)) {   
      const [del, reset, plus, equalTo] = actionKeys;

      // This is for the delete function
      if (activeKeyValue === del) {
        setCurrentExpression((expression) =>
          expression.slice(0, expression.length - 1)
        );
        return;
      }

      // This is for the reset function
      if(activeKeyValue === reset){
        setCurrentExpression("");
        return;
      }
      
      // This is for the plus operator
      if(activeKeyValue === plus){
        
        setCurrentExpression(currentExpression);
        setResult((exp)=>{ 
          return exp = parseInt(currentExpression)
        });
        setCurrentExpression("");
       
        return;
      }


      // for the equalto
      if(activeKeyValue === equalTo){
        setResult((exp)=>{
           exp = exp + parseInt(currentExpression);
           setCurrentExpression(exp)
           return exp
        })
        setCurrentExpression()
        return;
      }
    
    }

    setCurrentExpression((expression) =>{

      if(!expression && activeKeyValue === "."){
        return "0."
      }

      if(expression.includes('.') ){ 
        expLimit = 10
        if(activeKeyValue === ".") return expression
      }
      
      return expression.length === expLimit ? expression : (expression += activeKeyValue)}
    );
  };
  console.log(currentExpression);
  console.log(result);

  return (
    <div className="App">
      <main className={theme}>
        <Header handleclick={handleClick} />
        <Screen screenText={currentExpression} />
        <Keypad handleKeyPress={handleKeyPress} />
        <Attribution />
      </main>
    </div>
  );
}

export default App;
