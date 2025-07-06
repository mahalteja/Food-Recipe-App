import React, { useEffect, useState } from "react";
import "../styles/HomeFoodCards.css";
import FoodCard from "../reusable/FoodCard";
import useFilterData from "../utlis/useFiltersData";
import useFoodCards from "../utlis/useFoodCards";

const HomeFoodCards = () => {
  const { filters, loading: loadingFilters } = useFilterData()
  const [activeFilter, setActiveFilter] = useState({ strCategory: "All" })
  const { mealsData, loading: loadingMeals } = useFoodCards(activeFilter.strCategory)
  const filtersShrimmer = Array(5).fill(0)
  const cardsShrimmer = Array(6).fill(0)

  const handleFilter = (item) => {
    setActiveFilter(item)
  };

  useEffect(() => {
    if (filters.length > 1) {
      setActiveFilter(filters[1])
    }
  }, [filters]);
  return (
    <div className="food-container">
      <ul className="filter-list">
        {loadingFilters
          ? filtersShrimmer.map((_, i) => (<li key={i} className="filter-shimmer shimmer"></li>))
          : filters.map((item) => (
              <li key={item.strCategory} className={`list-items ${item.strCategory === activeFilter.strCategory ? "active" : ""}`} onClick={() => handleFilter(item)}>
                {item.strCategory}
              </li>
            ))}
      </ul>
      <ul className="food-cards-container">
        {loadingMeals
          ? cardsShrimmer.map((_, i) => (
              <li key={i} className="card-shimmer shimmer"></li>
            ))
          : mealsData.length > 0 &&
            mealsData.map((item) => <FoodCard key={item.idMeal} {...item} />)}

            {mealsData.length === 0 && !loadingMeals && <h2>No Data found</h2>}
      </ul>
    </div>
  );
};

export default HomeFoodCards;
