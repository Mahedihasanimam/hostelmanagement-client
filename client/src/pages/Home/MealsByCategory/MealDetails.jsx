import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const data = useLoaderData();
  console.log(data.data);
  const { title, image, category, rating, price, details } = data.data;

  return (
    <div className="mt-28 ">
      <div className="card lg:card-side bg-base-100 shadow-md">
        <figure className=" rounded-lg m-5 p-4 lg:w-2/5">
          <img className=" rounded-lg" src={image} alt="Album" />
        </figure>
        <div className="card-body lg:w-1/2">
          <div className=" space-y-3">
            <h3 className="font-bold lg:text-4xl md:text-2xl text-xl">
              dishes item-{title}
            </h3>
            <p>Price : {price}</p>
            <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
            <p>{category}</p>
          </div>
          <hr />
          <div>
            <div className="overflow-x-auto">
              <strong>details : </strong>
              <p>{details}</p>
            </div>
          </div>
          {/* <div className="card-actions mt-8">
          <a onClick={()=>handleRead(book)} className="btn bg-transparent text-black border-2 border-gray-300  hover:bg-[#59C6D2] hover:text-white">
            Read
          </a>
          <a onClick={()=>handleWishList(book)} className="btn bg-[#59C6D2] hover:bg-[#59C6D2] text-white ml-2">
            Wishlist
          </a>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
