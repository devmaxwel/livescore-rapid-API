import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react'

function App() {
  const [live, setLive] = useState();



  const options = {
  method: 'GET',
  url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
  params: {Category: 'soccer'},
  headers: {
    'x-rapidapi-host': 'livescore6.p.rapidapi.com',
    'x-rapidapi-key': 'b2e6cc5070mshc415f81e5aea8bcp133181jsnaa4516e7a28d'
  }
};

const fetchLiveGames= async ()=> {
    return await axios.request(options).then(function (response){
       setLive(response.data)
    })
  
}

useEffect(() => {
    fetchLiveGames();
})

console.log(live)


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
