import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import MyButton from "../../../components/MyButton";
import { useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import UseAuth from "../../../hooks/UseAuth";
import useAxiosCommon from "../../../hooks/UseAxiosCommon";

import Swal from "sweetalert2";
import MealReview from "../../../components/mealreview/MealReview";
import ReviewCard from "../../../components/mealreview/ReviewCard";

const MealDetails = () => {
  const { user } = UseAuth();
  const data = useLoaderData();
  const axiosCommon = useAxiosCommon();
  const [mealreview, isLoading, refetch] = MealReview();

  const [likeCount, setLikeCount] = useState(0);
  console.log(likeCount);

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
    _id,
  } = data.data;

  const handlereview = async (e) => {
    e.preventDefault();

    const review = e.target.review.value;
    const reviewId = _id;
    const email = user.email;
    const name = user.displayName;
    const photo = user.photoURL;
    const date = new Date().toLocaleDateString();

    const mealreviewData = {
      likeCount,
      title,
      review,
      email,
      name,
      photo,
      reviewId,
      date,
    };
    console.table(mealreviewData);
    const { data } = await axiosCommon.post("/mealreview", mealreviewData);
    if (data.acknowledged) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "yor feedback added!!",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.review.value = "";
      refetch();
    }
  };
  const handleLikeCount = async () => {
    setLikeCount(likeCount + 1);

    const { data } = await axiosCommon.put(`/meals`, likeCount);
    console.log(data);
  };

  const handlemealreauest = async (e) => {
    const mealReqData={
      like:likeCount,
      email:user?.email,
      e
    }
   
    Swal.fire({
      title: "Are you sure?",
      text: "the mill will be added to request meal!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosCommon.post("/requestmeal", mealReqData);
        if (data.acknowledged) {
          Swal.fire({
            title: "Added!",
            text: "Your meal has been Added.",
            icon: "success",
          });
        }
      }
      
    });
  };
  return (
    <div className="mt-28 ">
      <div className="">
        <div className=" px-4">
          <figure className=" rounded-lg   lg:w-2/5 mx-auto">
            <img className=" rounded-lg w-full" src={image} alt="Album" />
          </figure>
          <div className="card-body lg:w-1/2 mx-auto">
            <div className=" flex justify-between items-center ">
              <strong>category-{category}</strong>
              <strong>
                review count-
                {mealreview.filter((i) => i.reviewId === _id).length}
              </strong>

              <button disabled={!user}>
                <BiLike
                  onClick={() => {
                    handleLikeCount();
                  }}
                  className={`cursor-pointer  lg:mr-8 ${
                    likeCount ? "text-blue-500 disabled" : ""
                  } ${!user && "cursor-not-allowed"}`}
                  size={70}
                />
                <p>Like {likeCount}</p>
                {!user && <p>login first to like this</p>}
              </button>
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
                      <p key={i._id}>
                        <button className="btn btn-xs bg-blue-200 hover:bg-blue-200">
                          {i}
                        </button>
                      </p>
                    ))}
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
              <button
                onClick={() => handlemealreauest(data.data)}
                disabled={!user}
                className="btn bg-blue-500 text-white font-bold mt-4 hover:bg-blue-500"
              >
                Request Meal
              </button>

              <div className="border-2 border-slate-200 m-4 rounded-lg p-4">
                {mealreview
                  .filter((i) => i.reviewId === _id)
                  .map((item) => (
                    <ReviewCard key={item._id} item={item} />
                  ))}

                <form onSubmit={handlereview}>
                  <textarea
                  required
                    className="w-full mt-4 border-2 border-slate-300 rounded-md textarea textarea-info p-4"
                    name="review"
                    id=""
                    cols="10"
                    rows="5"
                    placeholder="write your feedback"
                  ></textarea>
                  {/* <input>
                <MyButton label={'send'}/>
                </input> */}
                  <input
                    className="btn bg-[#5070F3] hover:bg-[#5070F3] text-white font-bold px-8 "
                    type="submit"
                    value="send"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
