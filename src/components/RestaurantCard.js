import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    costForTwo,
    cuisines,
    sla,
  } = resData?.info;

  return (
    <div className="bg-orange-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-64 ">
      <img
        className="w-60 h-36 object-cover rounded-lg mb-4"
        alt="restaurant logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-lg font-semibold text-orange-700 mb-2">{name}</h3>
      <h4 className="text-sm text-gray-600 mb-1">{cuisines.join(", ")}</h4>
      <h4 className="text-sm text-gray-600 mb-1">{avgRating} stars</h4>
      <h4 className="text-sm text-gray-600 mb-1">{costForTwo}</h4>
      <h4 className="text-sm text-gray-600">{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
