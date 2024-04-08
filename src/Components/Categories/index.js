import React from "react";
import "./styles.css";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

function Categories() {
  return (
    <div className="header-div flex">
      <div className="location flex">
        <MdLocationOn />
        <div>Mumbai, India</div>
        <IoIosArrowForward />
      </div>
      <div className="categories flex">
        <div>Live shows</div>
        <div>Streams</div>
        <div>Movies</div>
        <div>Plays</div>
        <div>Events</div>
        <div>Sports</div>
        <div>Activities</div>
      </div>
    </div>
  );
}

export default Categories;
