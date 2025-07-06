import { useEffect, useRef, useState } from "react";

const useSearchMeals = (query) => {
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(true)
   const cacheRef = useRef({})

  const getSearchResults = async () => {
    if (!query) {
      setSearchResults([])
      setLoading(false)
      return;
    }
    const lowerQuery = query.toLowerCase()

    if (cacheRef.current[lowerQuery]) {
      setSearchResults(cacheRef.current[lowerQuery])
      setLoading(false)
      return;
    }
    
    try {
      setLoading(true)
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
          query
        )}`
      )
      const data = await response.json()
      if (data?.meals?.length) {
        cacheRef.current[lowerQuery] = data.meals 
        setSearchResults(data.meals)
      } else {
        cacheRef.current[lowerQuery] = []
        setSearchResults([])
      }
    } catch (error) {
      console.log("Search API error:", error)
      setSearchResults([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getSearchResults()
  }, [query])

  return { searchResults, loading };
};

export default useSearchMeals;
