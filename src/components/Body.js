import RestaurantCard  from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
//not using keys in map is not acceptable <<< index  as key<<<<< using unique value as a key is best practice

//if we will not give key then what happens is when we add an element at place the react will not know that which 
//element is unique and it has to re render all the elements and it gives a performance hit

const Body =() =>{

  // Local State Variable - Super powerful variable

  //whenever a state variable changes React will rerender my  component
  const [listOfRestaurants, setlistofRestaurants] = useState([]);
  
  useEffect(()=>{

    fetchdata();


  },[]);

  
  const fetchdata = async () =>{
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json= await data.json(); 
    console.log(json);  

    setlistofRestaurants(
      //Optional chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

  };

  if(listOfRestaurants.length === 0){
    return <Shimmer/>;
  } 



    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={()=>{
            //Filter Logic
            const filteredList  = listOfRestaurants.filter(
              (res)=> res.info.avgRating >4
            );
            setlistofRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
         
          {
            listOfRestaurants.map((restaurant) =>(
            <RestaurantCard key={restaurant.info.id} resData ={restaurant} />
          ))}
  
           
  
        </div>
      
      </div>
    );
  };
export default Body;