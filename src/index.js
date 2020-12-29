import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';


/*
The root here is referencing the root class which we will use to add the elements to the react page 
params are : ( what we want to render, what we want to render it too )
*/ 
ReactDOM.render(<App/>,  document.getElementById('root'));

