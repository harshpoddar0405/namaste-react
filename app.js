/*
 <div id = "parent">
    <div id = "child1">
        <h1>i am an h1 tag</h1>
        <h2> i am an h2 tag</h2>
    </div>
    <div id = "child2">
        <h1>i am an h1 tag</h1>
        <h2> i am an h2 tag</h2>
    </div>
</div>

ReactElement(Object) => HTML(Browser)
 */


// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   " hello world form react"
// );

import React from "react";
import ReactDOM from "react-dom";  

const parent = React.createElement("div", { id: "parent" }, [
  // First child div
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an harsh tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
  ]),
  // Second child div
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
  ])
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);





// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements
// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     style: {
//       background:"red",
//     },
//     className:"title"
//   },
//   "heading"
// );
// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//   },
//   "heading1"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading, heading1]
// );

// // create root using createRoot
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // passing react element inside root
// root.render(container);


//harsh

