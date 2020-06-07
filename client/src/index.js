import Form from "./components/form.js";
import ReactDOM from 'react-dom';
import React from 'react';


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
