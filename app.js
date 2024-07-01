import React from "react";
import ReactDOM from "react-dom/client";  


//React element

// React.createElement =>ReactElement-JS Object => HTMLElement(render)

const heading =React.createElement(
  "h1",
  {id: "heading"},
   "Namaste React"
);

console.log(heading);

//JSX is not HTML inside javascript it is HTML/XML like syntax 
//JSX code is transpiled before it reaches the JS engine by parcel using babel(library)
//JSX => React.createElement =>ReactElement-JS Object => HTMLElement(render) using babel
//attributes in jsx are written in camelCase
//If JSX is written in multiple lines in should be wrapped inside round brackets if written in one line brackets are not needed 

const jsxHeading = <h1 className= "head">Namaste React using JSX </h1>

console.log(jsxHeading);  

const  root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
 