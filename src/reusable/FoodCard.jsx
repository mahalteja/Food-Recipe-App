import React from "react";
import "../styles/FoodCard.css";

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
      <p className="food-card-heading">{reduceText(strMeal,40)}</p>
    </div>
  );
};

export default FoodCard;
