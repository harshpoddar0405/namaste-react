import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockdata";
//not using keys in map is not acceptable <<< index  as key<<<<< using unique value as a key is best practice

//if we will not give key then what happens is when we add an element at place the react will not know that which 
//element is unique and it has to re render all the elements and it gives a performance hit

const Body =() =>{
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
         
          {
            resList.map((restaurant) =>(
            <RestaurantCard key={restaurant.info.id} resData ={restaurant} />
          ))}
  
           
  
        </div>
      
      </div>
    );
  };
export default Body;