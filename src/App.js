import React, { useState, useRef } from 'react';
import "typeface-roboto";
import './App.css';
  
function App() {

  const [apiResponse, setapiResponse] = useState("");
  
  function shooting_scraper_api() {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res =>   setapiResponse(res));
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
          setTempf("Current: " + completedata.current.temp_f + "\u00B0F")
          setFeelslikef("Feels Like: " + completedata.current.feelslike_f + "\u00B0F")
          setGustmph(completedata.current.gust_mph + "mph")
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
          setCharacter("- " + completedata.character)
          setQuote("\"" + completedata.quote + "\"")
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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Search Submitted')
      SearchName()
    }
  }  
    

    
  return (
    <>
        <div className="centerText"> 
          <p className="App-intro">Most Recent Shooting in USA: {apiResponse}</p>
          <input className="centerText" ref={nameInput} type="text" placeholder="Location" onKeyDown={handleKeyDown}/>
          <button className="centerText" onClick={SearchName}>Search</button>
          <p>
            <img src={icon} alt="" />
          </p>
          
          <p>{curname}</p>
          <p>{condition} </p>
          <p>{temp_f}</p>
          <p>{feelslike_f}</p>
          <p>{gust_mph}</p>
          <p>{localtime}</p>
          <p>{quote} {character}</p>
          <div>{anime}</div>
        </div>
    </>
  );
}

export default App;