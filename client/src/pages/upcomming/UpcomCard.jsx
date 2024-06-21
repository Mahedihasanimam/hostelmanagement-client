import { Rating } from "@smastrom/react-rating";
import { BiLike } from "react-icons/bi";
import UseAuth from "../../hooks/UseAuth";
import UseLike from "../../hooks/UseLike";
import { useState } from "react";
import { axiosCommon } from "../../hooks/UseAxiosCommon";


const UpcomCard = ({meal,refetch}) => {
    const {user}=UseAuth()
  
    const {image,title,category,price,distributor,post_time,rating,ingredients,details,_id,like}=meal
    const [bg,setBg]=useState()
    const [likeCount, setLikeCount] = useState(1);

     const handleLikeCount = async (id) => {
    setBg(!bg)
    setLikeCount(+ 1);
    refetch()
    const likedata={
      email:user?.email,
      mealid:_id,
      like:likeCount
    }
   

    const { data } = await axiosCommon.patch(`/upcom/like/${id}`, likedata);
    console.log(data);

  };
    return (
        <div className="mt-28 ">
      <div className=" border-2 rounded-lg border-blue-100 max-w-4xl mx-auto ">
        <div className=" ">
          <figure className=" rounded-lg   mx-auto">
            <img className=" rounded-lg w-full" src={image} alt="Album" />
          </figure>
          <div className="card-body  mx-auto">
            <div className=" flex justify-between items-center ">
              <strong>category-{category}</strong>
              <strong>
                review count-
              
              </strong>

              <button
              onClick={()=>handleLikeCount(_id)}
               disabled={!user || bg}>
                <BiLike
                  
                  className={`cursor-pointer  lg:mr-8 ${
                    bg ? "text-blue-500  " : ""
                  } ${!user && "cursor-not-allowed"}`}
                  size={70}
                />
                <span className="flex gap-1 justify-start">Like {like}</span>
                {!user && <p>login first to like this</p>}
              </button>
            </div>
            <div className=" space-y-3">
              <h3 className="font-bold lg:text-4xl md:text-2xl text-xl">
                dishes item-{title}
              </h3>
              <div className="">
                <div>
                  <p>Price : ${price}</p>
                  <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
                  <p>AddBy: {distributor}</p>
                  <p>Date-{post_time}</p>
                  <div className="flex flex-wrap gap-2">
                    <strong>ingredients</strong>
                    {ingredients}
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="overflow-x-auto">
                <p>
                  <strong>details</strong> : {details}
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default UpcomCard;