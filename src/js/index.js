//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/home.jsx";

//render your react application
const root = ReactDOM.createRoot(document.getElementById('app'));

const intervalID = setInterval(myCallback, 1000);

let counter = 0
function myCallback() {
    // Your code here
    counter++
    root.render(<SecondsCounter seconds={counter}/>);
 
}
