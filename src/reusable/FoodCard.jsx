import React from "react";
import "../styles/FoodCard.css";
import { IMAGES } from "../utlis/images";

const FoodCard = ({ idMeal, strMeal, strMealThumb }) => {


  const reduceText = (text, charLimit) => {
    if (text.length <= charLimit) return text
    return text.slice(0, charLimit) + " ..."
  };

  return (
    <div
      className="food-card"
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),
          url(${strMealThumb})
        `,
      }}
    >
      <div className="rating-container">
        <img src={IMAGES.STAR} alt="Star" className="star" />
        <p className="rating">4.0</p>
      </div>
      <div className="card-content">
      <p className="food-card-heading">{reduceText(strMeal,40)}</p>
      <p className="food-card-body">By Chef John</p>
      </div>
    </div>
  );
};

export default FoodCard;
