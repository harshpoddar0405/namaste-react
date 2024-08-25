import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-orange-400 shadow-lg m-2 p-3 rounded-lg">
      <img className="w-20 h-20" alt="Foodie Fleet" src={LOGO_URL} />
      <ul className="flex items-center space-x-6 text-white">
        <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
        <li><Link className="hover:text-orange-200" to="/">Home</Link></li>
        <li><Link className="hover:text-orange-200" to="/About">About Us</Link></li>
        <li><Link className="hover:text-orange-200" to="/Contact">Contact Us</Link></li>
        <li><Link className="hover:text-orange-200" to="/grocery">Grocery</Link></li>
        <li><Link className="hover:text-orange-200" to="/cart">Cart</Link></li>
        <button
          className="px-4 py-2 bg-orange-600 hover:bg-orange-400 text-white rounded-lg"
          onClick={() =>
            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
          }
        >
          {btnNameReact}
        </button>
      </ul>
    </div>
  );
};

export default Header;
