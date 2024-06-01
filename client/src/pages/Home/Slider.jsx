import { Link } from "react-router-dom";


const Slider = ({image,title,text}) => {
    return (
        <div className='relative '>
            <img className="w-full bg-fixed   min-h-[600px] object-cover max-h-[700px] " src={image} alt="img" />
            <div className="h-full bg-black absolute top-0 w-full opacity-70">

            </div>
            <div className='absolute text-center space-y-8 top-1/4 w-full px-4  text-white '>
                <h1 className='lg:text-6xl md:text-4xl text-2xl  font-bold'>{title}</h1>
                <p className="lg:w-1/2 mx-auto mb-8">{text}</p>
              <div className=" relative  lg:w-2/3 md:w-10/12 w-full mx-auto ">
                <input type="search" name="search" className="p-4 w-full  rounded-lg text-black " placeholder="search what you wnat " id="" 
                
                />
                <button className="btn  btn-primary lg:text-2xl text-lg font-bold absolute bg-[#3B82F6] text-white  right-1 top-1"> search</button>
              </div>
               
            </div>
        </div>
    );
};

export default Slider;