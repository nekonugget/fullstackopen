import React, { Component } from 'react';

const App = () => {
  const now = new Date()
  let currYear = 2023
  const ww1 = 1914
  const ww2 = 1945

  const vesselCost = [
    { name: 'HSwMS Gävle (K22)', sek: 12490000000000 },
    { name: 'F Super Hornet', sek: 6886163031}
  ]
  

  return(
  <div>
    <p>The time is currently {now.toString()}</p>
    <p>World war 1 started {currYear - ww1} years ago.</p>
    <p>World war 2 ended {currYear - ww2} years ago.</p>
    <InfoText title = "WW3"
     name="John"></InfoText>
     <p>{vesselCost[0].name} {vesselCost[0].sek}</p>
     <p>{vesselCost[1].name} {vesselCost[1].sek}</p>
     
  </div>
  )
}



const InfoText = (props) => {
  return (
    <div>
      <h1>{props.title} information</h1>
      <p>Written by: {props.name}</p>
    </div>
  )
}

export default App;
