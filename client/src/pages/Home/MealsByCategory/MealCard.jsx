import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const MealCard = ({ item }) => {
  const { title, image, category, rating, price, details,_id} = item;
  return (
    <div className="p-4  border-2 border-blue-300 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between ">
        <div>
          <div className="px-2">
            <h3 className="font-bold text-lg">dishes item-{title}</h3>
            <p>Price : {price}</p>
            <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
          </div>

          <Link
            to={`/details/${_id}`}
            className="px-5 py-2.5 relative rounded group mt-4 text-white font-medium inline-block"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-blue-600 to-blue-500"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-blue-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-blue-300 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span className="relative">See details</span>
          </Link>
        </div>
        <div className="w-1/2">
          <img className="w-full h-full" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MealCard;
