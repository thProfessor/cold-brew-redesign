import React from "react";
import "./Header.css";
import { RiMenu4Line } from "react-icons/ri";
import { BsPerson, BsBag } from "react-icons/bs";

function Header() {
  return (
    <div className="header mt-3">
      <div className="mr-auto ml-5">
        <RiMenu4Line className="icon__header" />
      </div>
      <div className="">
        <BsPerson className="icon__header" />
      </div>
      <div className="mx-4">
        <BsBag className="icon__header" />
      </div>
    </div>
  );
}

export default Header;
