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

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setSecarchText ] = useState("");

  //whenevr the state variable changes React triggers a reconciliation cycle(re-renders   the component)
  console.log("Body rendered");
  
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
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

  };

  //Conditional Rendering
    return listOfRestaurants.length === 0?<Shimmer/>: (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input 
              type="text" 
              className="search-box" 
              value = {searchText}  
              onChange={(e) => {
                setSecarchText(e.target.value); 
              }}
            />
            <button onClick={()=>{
              //Filter the restaurants and update the UI
              //searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter(

                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurant(filteredRestaurant);

            }}
          >
            Search
          </button>
          </div>
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
            filteredRestaurant.map((restaurant) =>(
            <RestaurantCard key={restaurant.info.id} resData ={restaurant} />
          ))}
  
           
  
        </div>
      
      </div>
    );
  };
export default Body;