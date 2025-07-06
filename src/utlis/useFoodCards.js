import React, { useEffect, useRef, useState } from "react";

const useFoodCards = (category) => {
  const [mealsData, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const cacheRef = useRef({})

  const fetchMeals = async (cat) => {
    setLoading(true)
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json()
      if (data?.meals?.length) {
         cacheRef.current[cat] = data.meals
        setMeals(data.meals)
      } else {
        cacheRef.current[cat] = []
        setMeals([])
      }
    } catch (err) {
      console.error("Error fetching meals:", err)
    } finally {
      setLoading(false)
    }
  };

  
  useEffect(() => {
    if (!category || category === "All") { 
      setMeals([])
      setLoading(false)
      return;
    }
    if (cacheRef.current[category]) {
      setMeals(cacheRef.current[category])
      setLoading(false)
    } else {
      fetchMeals(category)
    }
  }, [category])

  

  return { mealsData, loading }
}

export default useFoodCards;
