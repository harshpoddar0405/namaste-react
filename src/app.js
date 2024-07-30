import React from "react";
import ReactDOM from "react-dom/client";  
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";




const AppLayout = () => { 
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <AppLayout/>,
    children : [
      {
        path : "/",
        element : <Body/>,
      },
      {
        path : "/about",
        element : <About/>,
      },
      {
        path : "/contact",
        element : <Contact/>,
      },
      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu/>,
      },

    ],
    errorElement : <Error/>,

  },
  
])


const  root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router = {appRouter}/>);



  





// config driven UI - the UI depend on the data which comes as a config from backend by API









//Till ep 3 - foundation
 //React element

// React.createElement =>ReactElement-JS Object => HTMLElement(render)

// const heading =React.createElement(
//   "h1",
//   {id: "heading"},
//    "Namaste React"
// );

// console.log(heading);

//JSX is not HTML inside javascript it is HTML/XML like syntax 
//JSX code is transpiled before it reaches the JS engine by parcel using babel(library)
//JSX => React.createElement =>ReactElement-JS Object => HTMLElement(render) using babel
//attributes in jsx are written in camelCase
//If JSX is written in multiple lines in should be wrapped inside round brackets if written in one line brackets are not needed 

//const jsxHeading = <h1 className= "head">Namaste React using JSX </h1>

// console.log(jsxHeading);  

//React Component
//Class Based Components - OLD
//Functional Components  - NEW


// const elem=<span>react element </span>

// const Title =() =>(
  
//   <h1 className="head" tabIndex="5">
//     {elem}
//     Namaste React using JSX
//   </h1>
// );


// //heading component 3 ways

// const HeadingComponent2 = () => {
//   return <h1>Namaste React Functional Component.</h1>;
// };

// //or

// const HeadingComponent = () => (

//   <div id="container">
//     {elem} 
//     <Title></Title>
//     <Title/>
//     {Title()}
//     {"Harsh"}
//     <h1 className="heading">Namaste React Functional Component.</h1>
//     <h2>
//       {/* you can write any piece of ajva script code in here */} 
//     </h2>
//   </div>  
// );

//or

// const fn = () => <h1>Namaste React Functional Component.</h1>;// if one line

 