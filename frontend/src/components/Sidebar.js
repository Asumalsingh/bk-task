import React, { useState } from "react";
import { FaUsers, FaBloggerB } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiFillCloseCircle, AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  // console.log(location);
  return (
    <div className="z-30">
      <div className="fixed lg:hidden top-0 left-0 p-3 w-full backdrop-blur-lg">
        <HiMenuAlt2
          size={50}
          className="text-primary-color cursor-pointer"
          onClick={() => {
            setMenu(true);
          }}
        />
      </div>

      <div
        className={` ${
          !menu && "hidden lg:block"
        }  shadow-sm fixed top-0 bottom-0 border-r border-r-gray-300 lg:left-0 p-2 w-[250px] overflow-y-auto bg-white`}
      >
        <AiFillCloseCircle
          className="absolute text-primary-color top-2 right-2 lg:hidden cursor-pointer"
          size={34}
          onClick={() => {
            setMenu(false);
          }}
        />
        <div>
          <div className="mb-5 flex items-center justify-center">
            <h1 className="font-bold text-3xl text-gray-600">DASHBOARD</h1>
          </div>
          {/* <hr className="border border-gray-500 mb-6" /> */}
        </div>
        {/* Links */}
        <div className="font-medium text-gray-700">
          <Link to="/">
            <div
              className={` ${
                location.pathname === "/" ? "bg-blue-300" : "hover:bg-gray-100"
              } flex items-center px-4 py-2 mb-1 rounded-lg`}
            >
              <AiFillHome size={23} className="mr-2 text-gray-700" />
              <h2 className="">Home</h2>
            </div>
          </Link>
          <Link to="/blog">
            <div
              className={` ${
                location.pathname === "/blog"
                  ? "bg-blue-300"
                  : "hover:bg-gray-100"
              } flex items-center px-4 py-2 mb-1 rounded-lg hover:bg-gray-100`}
            >
              <FaBloggerB size={23} className="mr-2 text-gray-700" />
              <h2 className="">Blog</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
