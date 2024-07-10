import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";
import resList from "../utils/mockdata";

//not using keys in map is not acceptable <<< index  as key<<<<< using unique value as a key is best practice

//if we will not give key then what happens is when we add an element at place the react will not know that which 
//element is unique and it has to re render all the elements and it gives a performance hit

const Body =() =>{

  // Local State Variable - Super powerful variable

  //whenever a state variable changes React will rerender my  component
  const [listOfRestaurants, setlistofRestaurants] = useState(resList);
  

  //Normal JS variable

  let listOfRestaurantsJS = [
  {
    "info":
    {
      "id": "774062",
      "name": "Food Peddler Sandwiches",
      "cloudinaryImageId": "4f549c836372838d45994ed844bb8f32",
      "locality": "VIP Nagar Colony",
      "areaName": "Ruby Area",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Continental",
        "Beverages",
        "Snacks",
        "Salads",
        "Healthy Food",
        "Burgers"
      ],
      "avgRating": 4.5,
      "sla": {
        "deliveryTime": 34,
      
      }
    }
    
  },
  {
    "info": {
      "id": "774063",
      "name": "Dominos",
      "cloudinaryImageId": "4f549c836372838d45994ed844bb8f32",
      "locality": "VIP Nagar Colony",
      "areaName": "Ruby Area",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Continental",
        "Beverages",
        "Snacks",
        "Salads",
        "Healthy Food",
        "Burgers"
      ],
      "avgRating": 3.8,
      "sla": {
        "deliveryTime": 34,
      
      }
    }
    
  },
  {
    "info": {
      "id": "774064",
      "name": "Mc D",
      "cloudinaryImageId": "4f549c836372838d45994ed844bb8f32",
      "locality": "VIP Nagar Colony",
      "areaName": "Ruby Area",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Continental",
        "Beverages",
        "Snacks",
        "Salads",
        "Healthy Food",
        "Burgers"
      ],
      "avgRating": 4.1,
      "sla": {
        "deliveryTime": 34,
      
      }
    }
    
  }

];

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