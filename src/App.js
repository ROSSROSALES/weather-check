import React, { useState, useRef } from 'react';
import "typeface-roboto";
  
function App() {

  const [apiResponse, setapiResponse] = useState("");
  
  function shooting_scraper_api() {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res => setapiResponse(res));
  }
  shooting_scraper_api()

  const [curname, setName] = useState(''); 
  const nameInput = useRef()
  const [icon, seticon] = useState()
  const [condition, setCondition] = useState()
  const [temp_f, setTempf] = useState()
  const [feelslike_f, setFeelslikef] = useState()
  const [gust_mph, setGustmph] = useState()
  const [localtime, setlocaltime] = useState()
  const [anime, setAnime] = useState()
  const [character, setCharacter] = useState()
  const [quote, setQuote] = useState()

  function SearchName() {
    const name = nameInput.current.value
    if (name != '') {
    setName(name)
    }

    function weatherapi() {
      const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': 'cd4262cdfemshad95db473709b99p1bae6bjsn69100feb95ec'
      }
    };
      fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + name, options)
        .then((data) => {
        return data.json()})
        .then((completedata) => {
          console.log(completedata)
          seticon(completedata.current.condition.icon)
          setCondition(completedata.current.condition.text)
          setTempf(completedata.current.temp_f)
          setFeelslikef(completedata.current.feelslike_f)
          setGustmph(completedata.current.gust_mph)
          setlocaltime(completedata.location.localtime)
        });
      }

    function animequote() {
      fetch('https://animechan.vercel.app/api/random')
        .then((data) => {
        return data.json()})
        .then((completedata) => {
          console.log(completedata)
          setAnime(completedata.anime)
          setCharacter(completedata.character)
          setQuote(completedata.quote)
        });
      }
    animequote()

    if (name === '') {
      return
    } else {
      weatherapi()
    }
    nameInput.current.value=null


    }
    
  return (
    <>
    <p className="App-intro">Most Recent Shooting in USA: {apiResponse}</p>
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
    <p>&quot;{quote}&quot; - {character}</p>
    <div>{anime}</div>
    </>
  );
}

export default App;