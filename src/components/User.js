
import { useEffect, useState } from "react";

const User = (props) =>{

    const [count, setcount] = useState(0);
    const [count2] = useState(1);

    useEffect(() =>{
        //Api Calls
    },[]);
    return(
    <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>  
        <h2>Name : {props.name}  </h2>
        <h3>Location : Kolkata</h3>
        <h4>constact : poddarharsh14@gmail.com</h4>
    </div>
    );
};

export default User;