import React from "react";
import Navbar from "../Navbar";
import "./styles.css";
import Categories from "../Categories";

function Header() {
  return (
    <header>
      <Navbar />
      <Categories />
    </header>
  );
}

export default Header;
