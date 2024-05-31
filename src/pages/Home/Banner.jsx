import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="p-6 py-12  bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between text-white py-4">
                <h2 className="text-center text-6xl tracking-tighter font-bold">Explore All Queries Now!
                </h2>
                <div className="space-x-2 text-center py-2 lg:py-0">
                <p  className=" font-bold lg:text-2xl text-xl text-wrap">
            <span className="text-[#3B82F6]">ALTPRODINFO</span> .COM
          </p>
                </div>
                <Link to={'query'} className="btn rounded-sm px-6 font-bold text-xl text-[#3B82F6]">All Queries</Link>
            </div>
        </div>
    </div>


    );
};

export default Banner;