import React, { useEffect, useRef, useState } from "react";
import "../styles/SearchBar.css";
import { IMAGES } from "../utlis/images";
import { useNavigate, useSearchParams } from "react-router-dom";
import useVoiceSearch from "../utlis/useVoiceSearch";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")
  const navigate = useNavigate()

  const { listening, startListening } = useVoiceSearch((transcript) => {
    setSearchTerm(transcript)
    navigate(`/search?q=${encodeURIComponent(transcript)}`)
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
    }
  };

  useEffect(() => {
    if (query) {
      setSearchTerm(query)
    }
  }, [query])

  return (
    <div className="searchbar">
      <form className="search-container" onSubmit={handleSubmit}>
        <img src={IMAGES.SEARCH_ICON} alt="Search Icon" />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="primary-btn">
          Submit
        </button>
      </form>
      <button
        className={`primary-btn mic-btn ${listening ? "listening" : ""}`}
        onClick={startListening}
      >
        <img src={IMAGES.MIC_ICON} alt="Microphone Icon" />
      </button>
    </div>
  );
};

export default SearchBar;
