import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import MyButton from "../../../components/MyButton";
const MealCard = ({ item }) => {
  const { title, image, category, rating, price, details,_id} = item;
  return (
    <div className="p-4  border-2 border-blue-300 bg-white rounded-lg shadow-md dark:bg-gray-800"data-aos="flip-up"data-aos-duration="2000">
      <div className="flex  items-center justify-between ">
        <div>
          <div className="px-2">
            <h3 className="font-bold text-lg">dishes item-{title}</h3>
            <p>Price : ${price}</p>
            <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
          </div>

          <MyButton toLink={`/details/${_id}`} label={'See Details'}/>
        </div>
        <div className="w-1/2">
          <img className="w-full h-full" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MealCard;
