import React from "react";
import "../styles/SearchHeader.css";
import { IMAGES } from "../utlis/images";
import { useNavigate } from "react-router-dom";

const SearchHeader = () => {
    const navigate =useNavigate()
  return (
    <div className="search-header">
      <img src={IMAGES.ARROW_LEFT} alt="Arrow left" className="search-header-img" onClick={()=>navigate("/")} />
      <h2 className="search-header-text">Search recipes</h2>
    </div>
  );
};

export default SearchHeader;
