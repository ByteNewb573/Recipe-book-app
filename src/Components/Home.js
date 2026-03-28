

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css";
import bgImage from "../Assets/home4.jpg";  

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate("/View", { state: { searchQuery } });  // ✅ Pass search term as state
    }
  };

  return (
    <div 
      className="home-container"
      style={{
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="Container-text">
        <h1>Welcome to Tasty Treats!</h1>
        <h3>"Discover, Cook, and Savor – Delicious Recipes at Your Fingertips!"</h3>
        <h4>Search for your next favorite dish</h4>
        <hr />
        <div className="Container">
          <input
            className="search"
            type="search"
            placeholder="Search The Recipe"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn" type="button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      
    </div>
  );
};

export default Home;

