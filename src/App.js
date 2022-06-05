// This file has the bulk of the code. It contains major functions, variables, local storage. 

import React, { useState, useRef, useEffect} from 'react';
import NameOrigin from './NameOrigin';



function App() {
  const nameInput = useRef() // Uses imported package
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      'X-RapidAPI-Key': 'cd4262cdfemshad95db473709b99p1bae6bjsn69100feb95ec'
    }
  };
  
  fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Brooklyn', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))

  function SearchName() {
    const name = nameInput.current.value
    if (name === '') return /// '===' is used to match both value and data type, '==' matches only value
    console.log(name) //in console.log (inspect webpage)
    nameInput.current.value=null //clears text box
  }

  return (
    <>
    <NameOrigin/> 
    <div>Name Origin</div>
    <input ref={nameInput} type="text"/>
    <button onClick={SearchName}>Search Name</button>
    <div>{}</div>
    </>
  )
}

export default App;
