import React from "react";
import Header from "./component/Header.js"
import Die from "./component/Die.js"

export default function App() {
  const [dice, setDice] = React.useState(newNum())
  const [tenzie, setTenzie] = React.useState(false)

  React.useEffect(() => {
    const numArray = dice.map(({num,click,id}) => (num))
    const clickArray = dice.map(({num, click, id}) => (click))
    if(numArray.every((currentValue) => (currentValue === numArray[0]))
      && clickArray.every((currentValue) => (currentValue === true))) {
        setTenzie(true)
        console.log("You won!")
    } else {
      setTenzie(false)
    }
  }, [dice])
  function newNum () {
    const newArray = []
    for(let i=0; i<10; i++){
      let die={
        num: Math.floor(Math.random() * (6) + 1),
        click: false,
        id: i+1
      }
      newArray[i] = die
    }
    return newArray
  }
  const diceElement = dice.map((die) => (
    <Die key={die.id} {...die} hold={() => clickHandler(die.id)} />
  ))

  function clickHandler (id) {
/* WHY NOT WORKING?
    setDice(prevDie => {
      for(let i=0;i<prevDie.length;i++){
        if(prevDie[i].id === id){
          return {...prevDie[i], click: !prevDie[i].click}
        } else {return prevDie[i]}
      }
    })
*/
    setDice(prevDice => prevDice.map(die => {
      return (
        die.id === id?
        {...die, click: !die.click}:
        die
      )
    }))
  }
  function rollDie () {
    if(tenzie) {
      return (setDice(newNum))
    } else {
      setDice(prevDice => prevDice.map(die => {
        return (
          !die.click?
          {...die, num: Math.floor(Math.random() * (6) + 1)}:
          die
        )
      }))
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="die-container">
          {diceElement}
        </div>
        <button className="roll-button" onClick={rollDie}>
          {tenzie? "Reset":"Roll"}
        </button>
      </div>
    </div>
  )
}
