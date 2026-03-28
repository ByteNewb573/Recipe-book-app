

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Add from "./Components/Add";
import View from "./Components/View";
import RecipeDetails from "./Components/RecipeDetails";
import Contact from "./Components/Contact";

function App() {
  // Load recipes from localStorage
  const [recipes, setRecipes] = useState(() => {
    const storedRecipes = localStorage.getItem("recipes");
    return storedRecipes ? JSON.parse(storedRecipes) : [];
  });

  // 🔹 Search Query State
  const [searchQuery, setSearchQuery] = useState("");

  // 🔹 Function to Filter Recipes
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 🔹 Delete a Recipe
  const onDelete = (recipeToDelete) => {
    console.log("Deleting recipe:", recipeToDelete);
    
    // Remove the selected recipe
    const updatedRecipes = recipes.filter(recipe => recipe !== recipeToDelete);
    setRecipes(updatedRecipes);

    // Update localStorage
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  // 🔹 Convert Image File to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // 🔹 Add a New Recipe
  const addRecipe = async (title, ingredients, instructions, image) => {
    let imageBase64 = image;
    
    if (image instanceof File) {
      imageBase64 = await convertToBase64(image);
    }

    const newRecipe = { title, ingredients, instructions, image: imageBase64 };
    
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    
    console.log("Recipe added:", newRecipe);
  };

  return (
    <Router>
      <Header title="Tasty Treats"s/>
      <Routes>

        <Route path="/" element={<Home setSearchQuery={setSearchQuery}/>}/>

         <Route path="/Contact" element={<Contact />} />
       
        <Route path="/Add" element={<Add addRecipe={addRecipe} />} />

        <Route 
          path="/View" 
          element={<View recipes={filteredRecipes} onDelete={onDelete} />} 
        />

        <Route path="/recipe/:index" element={<RecipeDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

