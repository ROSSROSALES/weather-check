// This file has the bulk of the code. It contains major functions, variables, local storage. 

import React, { useState, useRef } from 'react';
//import { NameOrigin } from './NameOrigin';
//import { nametobesearched } from './nametobesearched';



function App() {
  const [curname, setName] = useState(''); //[first, second]: first is current state, second function that allows up to update current state
  const nameInput = useRef() // Uses imported package
  const [icon, seticon] = useState()
  const [condition, setCondition] = useState()
  const [temp_f, setTempf] = useState()
  const [feelslike_f, setFeelslikef] = useState()
  const [gust_mph, setGustmph] = useState()
  const [localtime, setlocaltime] = useState()
  
  

  function SearchName() {
    const name = nameInput.current.value
    setName(name)

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': 'cd4262cdfemshad95db473709b99p1bae6bjsn69100feb95ec'
      }
    };
    
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + name, options)
    .then((data) => {
      return data.json();
    }).then((completedata) => {
        console.log(completedata)
        seticon(completedata.current.condition.icon)
        setCondition(completedata.current.condition.text)
        setTempf(completedata.current.temp_f)
        setFeelslikef(completedata.current.feelslike_f)
        setGustmph(completedata.current.gust_mph)
        setlocaltime(completedata.location.localtime)

        
      });
    

    if (name === '') return /// '===' is used to match both value and data type, '==' matches only value
    console.log(name) //in console.log (inspect webpage)
    nameInput.current.value=null //clears text box
  }
  return (
    <>
    <h1>Weather</h1>
    <input ref={nameInput} type="text"/>
    <button onClick={SearchName}>Search</button>
    <p></p>

    <img src={icon} alt="icon" />
    <p><b>Weather in: </b>{curname}</p>
    
    
    <p><b>Condition: </b>{condition} </p>
    <p><b>Current Temp: </b>{temp_f}<span>&#176;</span>F</p>
    <p><b>Feels Like: </b>{feelslike_f}<span>&#176;</span>F</p>
    <p><b>Winds: </b>{gust_mph}mph</p>
    <p><b>Date/Time: </b>{localtime}</p>
    </>
  )
}

export default App; // this file is exported to index.js, in index.js this file is imported