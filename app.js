import React from "react";
import ReactDOM from "react-dom/client";  


//React element

// React.createElement => Object => HTMLElement(render)

const heading =React.createElement(
  "h1",
  {id: "heading"},
   "Namaste React"
);

console.log(heading);

//JSX is not HTML inside javascript it is HTML/XML like syntax 

const jsxHeading = <h1 id="heading">Namaste React using JSX </h1>

console.log(jsxHeading);  



const  root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
