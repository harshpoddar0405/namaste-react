import { LOGO_URL } from "../utils/constants";
import { useState, useEffect  } from "react";
import { Link } from "react-router-dom";

const Header =() =>{

    const [btnNameReact, setBtnNameReact]= useState("Login");
    

    
    // If no depenpedency array => everytime header is rendered useEffect is called
    // if dependency array is empty = [] => useEffect is called on initial render (just once)
    //if dependency array is [btnNameReact] => called everytime btnNameReact is updated 
    // useEffect(()=>{

    //   console.log("useEffect called");

    // }, [btnNameReact]);

    return (
      <div className="header">
  
        <div className="logo-container">
  
          <img 
          className="logo" 
          alt="Foodie Fleet"
          src={LOGO_URL}/>
           
        </div>
  
        <div className="nav-items">
  
          <ul>
            <li>
              <Link to ="/">Home</Link></li>
            <li>
              <Link to ="/About">About Us</Link></li>
            <li>
              <Link to= "/Contact">Contact Us</Link></li>
            <li>Cart</li>
            <button
            className="login"
            onClick ={()=>{
              btnNameReact === "Login"?
              setBtnNameReact("Logout"):
              setBtnNameReact("Login");
            }}
            >
              {btnNameReact} 
            </button>
          </ul>  
        </div>
      </div>
    );
  };

  export default Header;