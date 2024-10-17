











import RestaurantCard, {withNearAndFastLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const RestaurantCardNearAndFast = withNearAndFastLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1 className="text-center text-red-500">Looks like you're offline!! Please check your internet connection</h1>;

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  const handleFilterTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setFilteredRestaurant(filteredList);
  };

  console.log(listOfRestaurants);
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex items-center justify-center p-4 bg-orange-100 rounded-lg shadow-md mb-6">
        <div className="search flex items-center bg-white p-2 rounded-md shadow-sm">
          <input
            type="text"
            className="border border-orange-300 px-4 py-2 w-[200px] rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="ml-2 px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="ml-4 px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onClick={handleFilterTopRated}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>

            {(restaurant.info.sla.deliveryTime <= 30 && restaurant.info.sla.lastMileTravel<=5 ) ? (
              <RestaurantCardNearAndFast resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
