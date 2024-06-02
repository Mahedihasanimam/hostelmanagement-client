import React from 'react';
import { Link } from 'react-router-dom';

const MyButton = ({toLink,withclass,label}) => {
    return (
        <div>
            <Link
            to={toLink}
            className={`px-5 py-2.5 relative rounded group mt-4 text-white font-medium inline-block ${withclass} text-center`}
          >
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-blue-600 to-blue-500"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-blue-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-blue-300 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span className="relative">{label}</span>
          </Link>
        </div>
    );
};

export default MyButton;