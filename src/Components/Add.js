
import React, { useState } from "react";
import "../Styles/Add.css";
import bgImage from "../Assets/bg1.jpg";  

const bgStyle = {
  backgroundImage: `url(${bgImage})`, 
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
};
const RecipeForm = (props) => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    image: null,
    imagePreview: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate preview URL
      setRecipe({ ...recipe, image: file, imagePreview: imageUrl });
    }
  };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipe.title || !recipe.ingredients || !recipe.instructions) {
      alert("Please fill all fields!");
      return;
    }
    console.log("Submitting Recipe:", recipe);
    
    props.addRecipe(recipe.title,recipe.ingredients,recipe.instructions,recipe.image)

    // Clear the form after submission
    setRecipe({ title: "", ingredients: "", instructions: "", image: null,
    imagePreview:null
    });
  };

  return (
    <div style={bgStyle}className="recipe-form-container">
      <h2>Add a New Recipe</h2>
      <div className="inner-container">
      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="form-group">
          <label>Recipe Title:</label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            placeholder="Enter recipe title"
            required
          />
        </div>

        {/* Ingredients */}
        <div className="form-group">
          <label>Ingredients:</label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            placeholder="List ingredients..."
            required
          />
        </div>

        {/* Instructions */}
        <div className="form-group">
          <label>Instructions:</label>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            placeholder="Write the steps..."
            required
          />
        </div>

        {/* Image Upload */}
        <div className="form-group">
          <label>Upload Recipe Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Add Recipe
        </button>
      </form>
      </div>
    </div>
  );
};

export default RecipeForm;
