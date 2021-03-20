import React,{useState,useEffect} from 'react';
import axios from 'axios';

import './App.css';
const App = () => {

 const [advice,setAdvice] = useState(''

);



 useEffect(() => {

    fetchAdvice();
    
     
 }, []);

async function fetchAdvice () {

    const {data} = await axios.get('https://api.adviceslip.com/advice');

    setAdvice(data.slip.advice);
    console.log(advice);
}














    return (
        <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
}

export default App;
