import React, { useEffect, useState } from "react";
import "./styles.css";
import { BiMenu } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiSolidHeart } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";

function Navbar() {

  let [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {width > 700 ? (
        <nav className="flex">
          <div className="logo">BookUsNow</div>
          <div className="drop flex">
            <BiMenu />
            <div>Categories</div>
          </div>
          <div className="search flex">
            <input placeholder="DJI phantom" />
            <BiSearch />
          </div>
          <div className="fav flex">
            <BiSolidHeart />
            <div>Favorites</div>
          </div>
          <div className="signin">Sign In</div>
        </nav>
      ) : (
        <nav className="flex">
          <div className="logo">BookUsNow</div>
          <div className="icons flex">
            <BiSearch />
            <BiSolidHeart />
            <BsPersonFill />
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
