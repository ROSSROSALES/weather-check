// This file is used for API
import App, { hello } from './App';

async function NameOrigin() {
 // var temp = null;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      'X-RapidAPI-Key': 'cd4262cdfemshad95db473709b99p1bae6bjsn69100feb95ec'
    }
  };
  
  const response = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + {hello}, options);

  //const data = response.text();
  console.log(response);
//    .then(response => temp = response.json()) // When data is retrieved, method 'then' handles the argument response
//    .then(response => console.log(response))
//    .catch(err => console.error(err))
//
  return console.log(response)
}

export {NameOrigin};