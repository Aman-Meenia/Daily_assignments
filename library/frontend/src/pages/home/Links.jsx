import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link
              to="/donate"
              className="text-black text-lg hover:font-bold hover:text-xl py-4 px-2 border-b-2 border-transparent transition duration-300"
            >
              Best Selling
            </Link>
          </li>
          <span className=" text-2xl text-teal-50"> | </span>
          <li>
            <Link
              to="/donate"
              className="text-black text-lg hover:font-bold hover:text-xl py-4 px-2 border-b-2 border-transparent transition duration-300"
            >
              New Arrival
            </Link>
          </li>
          <span className=" text-2xl text-teal-50"> | </span>
          <li>
            <Link
              to="/donate"
              className="text-black text-lg hover:font-bold hover:text-xl py-4 px-2 border-b-2 border-transparent transition duration-300"
            >
              Genre
            </Link>
          </li>
          <span className=" text-2xl text-teal-50"> | </span>
          <li>
            <Link
              to="/donate"
              className="text-black text-lg hover:font-bold hover:text-xl py-4 px-2 border-b-2 border-transparent transition duration-300"
            >
              Best Selling
            </Link>
          </li>
          <span className=" text-2xl text-teal-50"> | </span>
          <li>
            <Link
              to="/donate"
              className="text-black text-lg hover:font-bold hover:text-xl py-4 px-2 border-b-2 border-transparent transition duration-300"
            >
              Mistreated
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Links;
