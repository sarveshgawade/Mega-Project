import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { DiDrupal } from "react-icons/di";
import { Link } from "react-router-dom";

function Navbar() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Clubs", link: "/" },
    { name: "T&P", link: "/" },
    { name: "Contact us", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div>
      <div className="shadow-xl w-full  top-0 left-0  md:shadow-none backdrop-blur-3xl fixed  bg-white md:bg-nav">
        <div className="md:flex items-center justify-between bgv py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center  
      text-gray-800 md:text-white"
          >
            <span className="text-4xl text-black md:text-white mr-1 pt-1">
              <DiDrupal />
            </span>
            EventSpectra
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <GiHamburgerMenu name={open ? "close" : "menu"}></GiHamburgerMenu>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white backdrop-blur-xl md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-900 md:text-white hover:text-purple-800 lg:hover:text-purple-300 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Link
              to="/l"
              type="submit"
              className="border bg-purple-700 hover:bg-purple-900 rounded-full shadow-md  text-white block md:ml-8 px-6 py-2 md:mx-auto"
            >
              Login
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
