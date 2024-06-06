const ReviewCard = ({ item }) => {
  const { review, email, name, photo ,date} = item;
  return (
    <div>
      <div className="flex overflow-hidden ">
        <div>
          <img
            className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
            src={photo}
            alt="avatar"
          />
        </div>
        <div className="max-w-2xl px-8 py-4 border-2  rounded-lg shadow-md dark:bg-gray-800 my-8">
          <div className="flex items-center">
            <div>
              <p
                className="font-bold  cursor-pointer dark:text-gray-200"
                tabindex="0"
                role="link"
              >
                {name}
              </p>
              <span className="text-sm font-light  dark:text-gray-400">
                {date}
              </span>
            </div>
          </div>

          <div className="mt-2">
           
            <p className="mt-2 dark:text-gray-300">{review}</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <img
              //   src={recomendProduct}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
