import { useState } from 'react'
import { Attribution, Header, Keypad, Screen } from './components'

function App() {
  // States and their initial values...
  const [theme, setTheme] = useState('theme1')
  const [currentExpression, setCurrentExpression] = useState('0')
  const [check, setCheck] = useState(false)
  const [operator, setOperator] = useState(null)
  const [memory, setMemory] = useState(null)

  // Handling Theme Buttons to set theme...
  const handleClick = e => {
    const currentTheme = e.target.value
    setTheme(currentTheme)
  }

  // handling Key press for Calculator Buttons
  const handleKeyPress = e => {
    // Get the current key pressed, set the action values and set the limit of value to be displayed.
    let expLimit = 9
    const activeKeyValue = e.target.innerHTML.toLowerCase()
    const actionKeys = ['del', 'reset', '+', '=', '-', '/', 'x']

    // Set the active key to display on the screen
    if (check) {
      setCurrentExpression('')
      setCheck(false)
    }

    setCurrentExpression(expression => {
      // set the expression if a period(.) is pressed
      if (!expression && activeKeyValue === '.') {
        return '0.'
      }

      if (expression.includes('.')) {
        expLimit = 10
        if (activeKeyValue === '.') {
          return expression
        }
      }
      // set the expression if a number that is pressed.
      return expression.length === expLimit ? expression : (expression += activeKeyValue)
    })

    // Action Keys!
    if (actionKeys.includes(activeKeyValue)) {
      const [del, reset, plus, equalTo, minus, divide, multiply] = actionKeys

      const operationFunctions = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        x: (a, b) => a * b,
        '/': (a, b) => a / b,
      }

      //  This is for the delete function
      if (activeKeyValue === del) {
        console.log(currentExpression)
        setCurrentExpression(currentExpression.slice(0, currentExpression.length - 1))
        console.log(memory, operator, currentExpression)
        return
      }

      // This is for the reset function
      if (activeKeyValue === reset) {
        setCurrentExpression('')
        setMemory(null)
        setOperator(null)
        setCheck(false)
        return
      }

      // Plus Operator
      if (activeKeyValue === plus) {
        setCurrentExpression(currentExpression)

        if (operator && operator !== plus && currentExpression) {
          let result = operationFunctions[operator](memory, parseFloat(currentExpression))
          setCurrentExpression('')
          setMemory(result)
          setOperator(plus)
          return
        }

        if (operator && operator !== minus && !currentExpression) {
          setOperator(plus)
          setCurrentExpression('')
          return
        }

        if (operator !== null) {
          let result = operationFunctions[operator](memory, parseFloat(currentExpression))
          setCurrentExpression(result.toString())
          setMemory(result)
        } else {
          currentExpression === '0' || !currentExpression ? setMemory(0) : setMemory(parseFloat(currentExpression))
        }

        setOperator(plus)
        setCurrentExpression('')
        return
      }

      // Minus Operator
      if (activeKeyValue === minus) {
        setCurrentExpression(currentExpression)

        if (operator && operator !== minus && currentExpression) {
          let result = operationFunctions[operator](memory, parseFloat(currentExpression))
          setCurrentExpression('')
          setMemory(result)
          setOperator(minus)
          return
        }

        if (operator && operator !== minus && !currentExpression) {
          setOperator(minus)
          setCurrentExpression('')
          return
        }

        if (operator !== null) {
          let result = operationFunctions[operator](memory, parseFloat(currentExpression))
          setCurrentExpression(result.toString())
          setMemory(result)
        } else {
          currentExpression === '0' || !currentExpression ? setMemory(0) : setMemory(parseFloat(currentExpression))
        }

        setOperator(minus)
        setCurrentExpression('')
        return
      }

      // Divide Operator
      if (activeKeyValue === divide) {
        if (operator && operator !== divide && currentExpression) {
          let result = operationFunctions[operator](memory, parseFloat(currentExpression))
          setCurrentExpression('')
          setMemory(result)
          setOperator(divide)
          return
        }

        if (operator && operator !== divide && !currentExpression) {
          setOperator(divide)
          setCurrentExpression('')
          return
        }

        if (operator !== null) {
          let result = operationFunctions[operator](memory, parseFloat(currentExpression))
          setCurrentExpression(result.toString())
          setMemory(result)
        } else {
          currentExpression === '0' || !currentExpression ? setMemory(0) : setMemory(parseFloat(currentExpression))
        }
        setOperator(divide)
        setCurrentExpression('')
        return
      }

      // Multiply Operator
      if (activeKeyValue === multiply) {
        if (operator && operator !== multiply && currentExpression) {
          let result = operationFunctions[operator](memory, parseFloat(currentExpression))
          setCurrentExpression('')
          setMemory(result)
          setOperator(multiply)
          return
        }

        if (operator && operator !== multiply && !currentExpression) {
          setOperator(multiply)
          setCurrentExpression('')
          return
        }

        if (operator !== null) {
          let result = operationFunctions[operator](memory, parseFloat(currentExpression))
          setCurrentExpression(result.toString())
          setMemory(result)
        } else {
          currentExpression === '0' || !currentExpression ? setMemory(0) : setMemory(parseFloat(currentExpression))
        }
        setOperator(multiply)
        setCurrentExpression('')
        return
      }

      //EqualTo
      if (activeKeyValue === equalTo) {
        if (!currentExpression || currentExpression === '0') {
          setCurrentExpression('')
          return
        }

        if (!operator) {
          setCurrentExpression(currentExpression)
          return
        }
        if (operator === '+') {
          let result = memory + parseFloat(currentExpression)
          setCurrentExpression(result.toString())
          setCheck(true)
          setMemory(null)
          setOperator(null)
          return
        } else if (operator === '-') {
          let result = memory - parseFloat(currentExpression)
          setCurrentExpression(result.toString())
          setCheck(true)
          setMemory(null)
          setOperator(null)
          return
        } else if (operator === '/') {
          let result = memory / parseFloat(currentExpression)
          setCurrentExpression(result.toString())
          setCheck(true)
          setMemory(null)
          setOperator(null)
          return
        } else if (operator === 'x') {
          let result = memory * parseFloat(currentExpression)
          setCurrentExpression(result.toString())
          setCheck(true)
          setMemory(null)
          setOperator(null)
          return
        }
      }
    }
  }

  return (
    <div className="App">
      <main className={theme}>
        <Header handleclick={handleClick} />
        <Screen screenText={currentExpression || memory} />
        <Keypad handleKeyPress={handleKeyPress} />
        <Attribution />
      </main>
    </div>
  )
}

export default App
