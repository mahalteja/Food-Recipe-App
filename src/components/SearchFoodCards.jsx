import React from "react";
import FoodCard from "../reusable/FoodCard";
import "../styles/SearchFoodCards.css";
import { useSearchParams } from "react-router-dom";

const SearchFoodCards = ({ cards, loading }) => {
  const [searchParams] = useSearchParams()
  const shrimmerCards = Array(6).fill(0)
  const query = searchParams.get("q")
  
  return (
    <div className="search-results-container">
      <div className="search-results-top-container">
        <h3 className="search-top-heading">{`Search Results For ${query}`}</h3>
        <p className="search-results-body">{cards.length + " results"}</p>
      </div>
      {cards.length === 0 && !loading && <h2>No results found</h2>}

      <ul className="search-cards-container">
        {loading
          ? shrimmerCards.map((_, i) => (
              <li key={i} className="card-shimmer shimmer"></li>
            ))
          : cards.length > 0 &&
            cards.map((item) => <FoodCard key={item.idMeal} {...item} />)}
      </ul>
    </div>
  );
};

export default SearchFoodCards;
