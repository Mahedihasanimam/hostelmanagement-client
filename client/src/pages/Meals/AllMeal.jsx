import React, { useState } from "react";
import UseCard from "../../hooks/UseCard";
import MealCard from "../Home/MealsByCategory/MealCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { ImSpinner9 } from "react-icons/im";
import TapCard from "../Home/MealsByCategory/TapCard";
import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../../hooks/UseAxiosCommon";

const AllMeal = () => {
  const [card, isLoading, fetchNextPage, hasNextPage] = UseCard();

  const [mealcategory, setmealcategory] = useState("allCategory");
  const breakfast = card.filter((item) => item.category === "breakfast");
  const lunch = card.filter((item) => item.category === "lunch");
  const dinner = card.filter((item) => item.category === "dinner");
  const allMeals = card.filter((item) => item.category === "allMeals");
  const allCategory = card;
  const [rangeVal, setRangeVal] = useState(0);
  const [pricerange, setPricerange] = useState(0);
  const withmyprice = card.filter(
    (item) => parseInt(item.price) <= parseInt(pricerange)
  );

  const [search, setSearch] = useState("");
  const [searchdata, setSearchdata] = useState([]);
  console.log(searchdata);

  const handleSort = async (e) => {
    e.preventDefault();
    const category = e.target.category.checked;
    const price = rangeVal;

  
    // Add logic to filter the meals based on category and price range
  };

  if (isLoading && !card.length) {
    return (
      <ImSpinner9
        size={40}
        className=" animate-spin absolute top-1/2 left-1/2 text-[#60A5FA]  "
      />
    );
  }

  const handlecategory = async (e) => {
    e.preventDefault();
    setmealcategory(e.target.value);
  };

  const handlepricereange = async (e) => {
    setPricerange(e.target.value);
  };

  // search functionality
  const handesearch = async (e) => {
    setSearch(e.target.value);
    const { data } = await axiosCommon.get(`/meals/search?search=${search}`);
    setSearchdata(data);
  };

  return (
    <div className="mt-24">
      <div className="p-6 py-16 bg-blue-400 text-white">
        <div className="container mx-auto">
          <h1 className="lg:text-6xl md:text-4xl font-bold text-center">
            Search the meal data
          </h1>
          <label
            onChange={handesearch}
            className="input max-w-4xl mx-auto mt-5 text-blue-700 input-bordered flex items-center gap-2"
          >
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

      <div className="lg:flex">
        <div className="min-w-60 m-4">
          <form onSubmit={handleSort}>
            <div className="shadow-lg p-6 mt-12">
              <h3 className="font-bold mb-2">Filter category meals</h3>
              <div className="flex items-center">
                <form onChange={handlecategory}>
                  <select className="select select-bordered w-full max-w-xs font-bold">
                    <option value="allCategory">AllCategory</option>
                    <option value={"allMeals"}>All Meals</option>
                    <option value={"breakfast"}>Breakfast</option>
                    <option value={"lunch"}>Lunch</option>
                    <option value={"dinner"}>Dinner</option>
                  </select>
                </form>
              </div>
              <h3 className="font-bold mt-6 mb-2">Filter by price range</h3>
              <input
                onChangeCapture={handlepricereange}
                type="range"
                min={0}
                max="1000"
                name="range"
                value={rangeVal}
                onChange={(e) => setRangeVal(e.target.value)}
                className="range range-info"
              />
              <div className="text-right flex justify-between">
                <span>$ 0 </span>${rangeVal}
              </div>

              <button
                disabled
                className="w-full bg-[#3B82F6] font-bold text-white p-1 rounded-lg mt-6"
              >
                Get meal
              </button>
            </div>
          </form>
        </div>
        <InfiniteScroll
          dataLength={card.length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          // loader={<ImSpinner9 className="animate-spin" />}
          endMessage={<p>No more data to load</p>}
        >
          <div className=" px-4 gap-4 my-12">
            {mealcategory === "breakfast" && <TapCard category={breakfast} />}
            {mealcategory === "lunch" && <TapCard category={lunch} />}
            {mealcategory === "dinner" && <TapCard category={dinner} />}
            {mealcategory === "allMeals" && <TapCard category={allMeals} />}
            {withmyprice && <TapCard category={withmyprice} />}
            {searchdata && <TapCard category={searchdata} />}

            {mealcategory === "allCategory" && (
              <TapCard category={allCategory} />
            )}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default AllMeal;
