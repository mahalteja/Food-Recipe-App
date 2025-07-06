import { useEffect, useState } from "react";

const useFilterData = () => {
  const [filters, setFilters] = useState([{ strCategory: "All" }])
  const [loading, setLoading] = useState(true)

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      const data = await response.json()
      if (data?.meals?.length) {
        setFilters(data.meals)
      }
    } catch (err) {
      console.log("Error fetching categories:", err)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchCategories()
  }, [])

  return { filters, loading };
};

export default useFilterData;
