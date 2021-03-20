import React,{useState,useEffect} from 'react';
import axios from 'axios';

import './App.css';
const App = () => {

 const [advice,setAdvice] = useState('');



 useEffect(() => {

    fetchAdvice();
    
     
 }, []);

async function fetchAdvice () {

    const {data} = await axios.get('https://api.adviceslip.com/advice');

   
    console.log(data);
}














    return (
        <div>
            <h1>App</h1>
        </div>
    );
}

export default App;
