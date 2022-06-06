import React, { useState, useRef } from 'react';

function App() {
  const [curname, setName] = useState(''); 
  const nameInput = useRef()
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

    if (name === '') return
    console.log(name)
    nameInput.current.value=null
  }
  return (
    <>
    <h1>Weather</h1>
    <input ref={nameInput} type="text"/>
    <button onClick={SearchName}>Search</button>
    <p></p>
    <img src={icon} alt="" />
    <p><b>Weather in: </b>{curname}</p>
    <p><b>Condition: </b>{condition} </p>
    <p><b>Current Temp: </b>{temp_f}<span>&#176;</span>F</p>
    <p><b>Feels Like: </b>{feelslike_f}<span>&#176;</span>F</p>
    <p><b>Winds: </b>{gust_mph}mph</p>
    <p><b>Date/Time: </b>{localtime}</p>
    </>
  )
}

export default App;