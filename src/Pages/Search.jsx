import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import HomeFoodCards from "../components/HomeFoodCards";
import SearchFoodCards from "../components/SearchFoodCards";
import SearchHeader from "../components/SearchHeader";
import useSearchMeals from "../utlis/useSearchMeals";

const Search = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")

  const { searchResults, loading } = useSearchMeals(query)

  return (
    <div className="outlet">
      <SearchHeader />
      <SearchBar  />
      <SearchFoodCards cards={searchResults} loading={loading} />
    </div>
  );
};

export default Search;
