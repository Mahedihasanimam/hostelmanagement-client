import { useState } from "react";
import UseAuth from "../../../../../hooks/UseAuth";
import UseAxiosSecure, {
  AxiosSecure,
} from "../../../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import UseCard from "../../../../../hooks/UseCard";
import axios from "axios";

const UpdateMeal = () => {
  const { user } = UseAuth();
  // const {id}=useParams()
  const navigate=useNavigate()
  const { data } = useLoaderData();
  const {
    title,
    category,
    like,
    price,
    review,
    rating,
    image,
    ingredients,
    details,
    _id
  } = data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const category = data.category;
    const title = data.title;
    const price = data.price;
    const image = data.image[0];
    const rating = parseInt(data.ratings);
    const review = data.reviews;
    const post_time = data.post_time;
    const ingredients = data.ingredients;
    const details = data.details;

    const formData = new FormData();
    formData.append("image", image);

    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_APIKEY
        }`,
        formData
      );
      console.log(data.data.display_url);
      const mealinfo = {
        category,
        title,
        price,
        image: data.data.display_url,
        rating,
        review,
        ingredients,
        details,
        distributor: user?.displayName,
        email: user?.email,
        post_time: new Date().toLocaleDateString(),
      };
      try {
        console.table(mealinfo);
        const { data } = await AxiosSecure.patch(`/updatemeal/${_id}`, mealinfo);
        if (data.acknowledged) {
          navigate('/dashboard/allmeals')
          Swal.fire({
            position: "center",
            icon: "success",
            title: "your meal updated !!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                {...register("title", { required: true })}
                id="title"
                type="text"
                placeholder="Title"
                defaultValue={title}
              />
              {errors.title && (
                <span className="text-red-500">Title is required</span>
              )}
            </div>

            <div className="p-4 bg-white w-full m-auto rounded-lg">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      // defaultValue={image}
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      {...register("image", { required: true })}
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    {errors.image && (
                      <span className="text-red-500">image is required</span>
                    )}
                    <div className="bg-blue-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500">
                      Upload Image
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="category" className="block text-gray-600">
                  Category
                </label>
                <select
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                  {...register("category", { required: true })}
                  defaultValue={category}
                >
                  <option disabled>AllCategory</option>
                  <option value="allMeals">All Meals</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
                {errors.category && (
                  <span className="text-red-500">Category is required</span>
                )}
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="ingredients" className="block text-gray-600">
                  Ingredients
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                  {...register("ingredients", { required: true })}
                  id="ingredients"
                  type="text"
                  placeholder="Ingredients"
                  defaultValue={ingredients}
                />
                {errors.ingredients && (
                  <span className="text-red-500">Ingredients are required</span>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                  {...register("price", { required: true })}
                  id="price"
                  type="number"
                  placeholder="Price"
                  defaultValue={price}
                />
                {errors.price && (
                  <span className="text-red-500">Price is required</span>
                )}
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="ratings" className="block text-gray-600">
                  Ratings
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                  {...register("ratings", { required: true })}
                  id="ratings"
                  type="number"
                  placeholder="Ratings"
                  defaultValue={rating}
                />
                {errors.ratings && (
                  <span className="text-red-500">Ratings are required</span>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="space-y-1 text-sm">
                <label htmlFor=" likes" className="block text-gray-600">
                  likes
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                  {...register(" likes", { required: true })}
                  id=" likes"
                  type="number"
                  placeholder=" likes"
                  defaultValue={like || 0}
                />
                {errors.bedrooms && (
                  <span className="text-red-500">Bedrooms are required</span>
                )}
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="reviews" className="block text-gray-600">
                  Reviews
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                  {...register("reviews", { required: true })}
                  id="reviews"
                  type="text"
                  placeholder="Short Reviews"
                  defaultValue={review}
                />
                {errors.reviews && (
                  <span className="text-red-500">Reviews are required</span>
                )}
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="details" className="block text-gray-600">
                Description
              </label>
              <textarea
                id="details"
                defaultValue={details}
                className="block rounded-md focus:blue-300 w-full h-32 px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500"
                {...register("details", { required: true })}
              ></textarea>
              {errors.details && (
                <span className="text-red-500">Description is required</span>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default UpdateMeal;
