const MealCard = ({item}) => {
    const {title,image,category,rating,price,details}=item
  return (
    <div className=" px-4 py-2 border-2 border-blue-300 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between ">
        <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p>Price : {price}</p>
            <p>{rating}</p>
        </div>
        <div className="w-1/2">
            <img className="w-full h-full" src={image} alt="" />
        </div>
      </div>

     
    </div>
  );
};

export default MealCard;
