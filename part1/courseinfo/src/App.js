import React, { useState } from 'react';


const Header = (props) => {
  return (
  <div>
  <h1>{props.course}</h1>
  </div>
  )
}
const Content = (props) => {
  return(
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}></Part>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}></Part>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}></Part>
    </div>
  )
}
const Part = (props) => {
  return(
    <div>
    <p>{props.part} {props.exercises}</p>
    </div>
  )
}
const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>

    </div>
  )
}

const Display = ({counter}) => {
  console.log("conter:",counter)
  return(
  <div>{counter}</div>
  )
}

const Button = ({handleClick, text}) => 
    <button onClick={handleClick}>
      {text}
    </button>
    


const App = () => {
  let [counter, setCounter ] = useState(0)
 
  const increaseOne = () => setCounter(counter + 1)
  const decreaseOne = () => setCounter(counter - 1)
  const setZero = () => setCounter(0)
  
  
  return (
    <div>
    <Display counter={counter}></Display>
    <Button handleClick={increaseOne} 
    text='plus'/>      
    <Button        
    handleClick={setZero}
            text='zero'
    />           
    <Button        
    handleClick={decreaseOne}
            text='minus'
    />   
    </div>
  )
}



export default App;
