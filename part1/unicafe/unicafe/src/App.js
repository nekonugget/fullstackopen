import React from 'react'
import { useState } from 'react'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //bit repeaty, everything gets incremented by 1 so i should be able to refactor.
  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  const total = (good+neutral+bad)

  const Button = ({ButtonClick, text, rating, rateval}) => {
  //console.log({rating},{rateval})
  return(
  <div>
    <button onClick={ButtonClick} >
      {text}
    </button>
    </div>)
     
  }

  const Statistics = ({good,neutral,bad}) => {
    console.log()
    let average = good + bad + neutral / 3
    let positive = 100 * good/total
    return(
      <div>
      <h1>Statistics:</h1>
      <div>Good: {good}</div>
      <div>Neutral: {neutral} </div>
      <div>Bad: {bad}</div>
      <div>Average: {average}</div>
      <div>Positive: {positive} </div>
      <div>Total: {total}</div>
      </div>
    )
  }


  return (
    <div>
      <Button ButtonClick={increaseGood}
      text='good :)' rating='good' rateval={good}/>

      <Button ButtonClick={increaseNeutral}
      text='neutral :|' rating='neutral' rateval={neutral}
      />
<Button ButtonClick={increaseBad}
      text='bad :(' rating='bad' rateval={bad}
      />
<div>
<Statistics rating={total} good={good} neutral={neutral} bad={bad}>
      </Statistics>
</div>
      
    </div>
  )
}


export default App;
