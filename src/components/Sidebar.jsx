import React from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaRegFaceGrinSquintTears } from "react-icons/fa6";
import { FaHotjar } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import { IoMdText } from "react-icons/io";
import { GiSmokingFinger } from "react-icons/gi";
import "./Fonts.css";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-orange-100 text-black h-screen w-[13.5rem]">
      <div className="p-4 border-gray-800 mt-4 mb-[-.8rem]">
        <Link
          to="/"
          className="flex items-center space-x-2 poppins-regular text-xl"
        >
          <FaRegFaceGrinSquintTears />
          <span>Memes app</span>
        </Link>
      </div>
      <div className="p-4">
        <hr className="my-0 border-t border-gray-700" />
        <ul className="space-y-2">
          <li className="hover:text-orange-400 hover:drop-shadow-lg flex items-center pt-[1rem] pb-[1rem] text-xl oregano-regular cursor-pointer">
            <Link to="/" className="flex items-center">
              <IoMdHome className="mr-2 text-[2rem] text-orange-400" />
              Home
            </Link>
          </li>
          <li className="hover:text-orange-400 hover:drop-shadow-lg flex items-center pb-[1rem]  text-xl oregano-regular cursor-pointer">
            <Link to="/trending" className="flex items-center">
              <FaHotjar className="mr-2 text-[2rem] text-orange-400" />
              Trending
            </Link>
          </li>
          <li className="hover:text-orange-400 hover:drop-shadow-lg flex items-center pb-[1rem] text-xl oregano-regular cursor-pointer">
            <Link to="/reaction" className="flex items-center">
              <CiFaceSmile className="mr-2 text-[2rem] text-orange-400" />
              Reaction Memes
            </Link>
          </li>
          <li className="hover:text-orange-400 hover:drop-shadow-lg flex items-center pb-[1rem] text-xl oregano-regular cursor-pointer">
            <Link to="/text" className="flex items-center">
              <IoMdText className="mr-2 text-[2rem] text-orange-400" />
              Text Memes
            </Link>
          </li>
          <li className="hover:text-orange-400 hover:drop-shadow-lg flex items-center pb-[1rem] text-xl oregano-regular cursor-pointer">
            <Link to="/political" className="flex items-center">
              <GiSmokingFinger className="mr-2 text-[2rem] text-orange-400" />
              Political Memes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
