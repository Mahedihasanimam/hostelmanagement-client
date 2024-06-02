import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import MyButton from "../../../components/MyButton";
const MealDetails = () => {
  const data = useLoaderData();
  console.log(data.data);
  const {
    title,
    image,
    category,
    rating,
    price,
    details,
    distributor,
    ingredients,
    post_time,
  } = data.data;

  return (
    <div className="mt-28 ">
      <div className="">
        <div className=" px-4">
          <figure className=" rounded-lg   lg:w-2/5 mx-auto">
            <img className=" rounded-lg w-full" src={image} alt="Album" />
          </figure>
          <div className="card-body lg:w-1/2 mx-auto">
            <div className=" flex justify-between items-center justify-center">
          <strong>category-{category}</strong>

            <div>
                  <BiLike className="cursor-pointer lg:mr-8" size={70} />
                </div>
            </div>
            <div className=" space-y-3">
              <h3 className="font-bold lg:text-4xl md:text-2xl text-xl">
                dishes item-{title}
              </h3>
              <div className="">
                <div>
                  <p>Price : {price}</p>
                  <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
                  <p>AddBy: {distributor}</p>
                  <p>Date-{post_time}</p>
                  <div className="flex flex-wrap gap-2">
                    <strong>ingredients</strong>
                    {ingredients.map((i) => (
                      <p key={i._id}><button className="btn btn-xs bg-blue-200 hover:bg-blue-200">{i}</button></p>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
            <hr />
            <div>
              <div className="overflow-x-auto">
                <p>
                  {" "}
                  <strong>details</strong> : {details}
                </p>
              </div>
              <MyButton label={'Request Meal'}/>
            </div>
          
          </div>
        </div>

      </div>
    </div>
  );
};

export default MealDetails;
