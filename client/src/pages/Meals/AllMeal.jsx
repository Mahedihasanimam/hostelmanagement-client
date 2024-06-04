import { useState } from "react";
import UseCard from "../../hooks/UseCard";
import MealCard from "../Home/MealsByCategory/MealCard";

const AllMeal = () => {
  const [card] = UseCard();
  const [rangeval, setrangeVal] = useState(0);

  const handlesort = async (e) => {
    e.preventDefault()
    const category=e.target.category.value
    const price=e.target.range.value
    
    console.log(category,price);
  };
  return (
    <div className="mt-28">
      <div className="p-6 py-16 bg-blue-400 text-white">
        <div className="container mx-auto">
          <h1 className="lg:text-6xl md:text-4xl font-bold text-center">
            Search the meal data
          </h1>
          <label className="input max-w-4xl mx-auto mt-5 text-blue-700 input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 text-blue-700 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>

      <div className="lg:flex ">
        <div className="min-w-60   m-4 ">
          <form onSubmit={handlesort}>
            <div className="shadow-lg  p-6 mt-12">
              <h3 className="font-bold mb-2">Filter category meals</h3>
              <div className="flex items-center ">
              <input
                className="mr-2 h-6 w-6 cursor-pointer"
                type="checkbox"
                name="category"
                id="category"
              />
              <label htmlFor="category" className="text-xl">Category</label> <br />
              </div>
              <h3 className="font-bold mt-6 mb-2">filter-by-price-range</h3>
              <input
                type="range"
                min={0}
                max="1000"
                name="range"
                //  value={0}
                className="range range-info"
              />

              <button className="w-full bg-[#3B82F6] font-bold text-white p-1 rounded-lg mt-6">get meal</button>
            </div>
          </form>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 gap-4 my-12">
          {card.map((item) => (
            <MealCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMeal;
