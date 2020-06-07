import Landing from './components/Landing.jsx';
import ReactDOM from 'react-dom';
import React from 'react';


const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<Landing />, wrapper) : false;
