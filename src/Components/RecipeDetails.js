

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'; 

// import "../Styles/RecipeDetails.css"; 

// const RecipeDetails = () => {
//   const { index } = useParams();
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const storedRecipes = localStorage.getItem("recipes");
//     if (storedRecipes) {
//       setRecipes(JSON.parse(storedRecipes));
//     }
//   }, []);

//   console.log(" Index received from URL:", index);
//   console.log(" Recipes from localStorage:", recipes);

//   const recipeIndex = Number(index);
//   const recipe = recipes[recipeIndex];

//   if (!recipe) {
//     console.error(`⚠️ Recipe at index ${recipeIndex} not found!`);
//     return <h2 className="error-message">Recipe not found!</h2>;
//   }

//   return (
//     <div className="recipe-details-container">
//       <div className="recipe-card-details">
//         {/* Left Side - Image */}
//         <div className="image-container">
//           <img
//             src={recipe.image}
//             alt={recipe.title}
//             className="details-image"
//           />
//         </div>
        
//         {/* Right Side - Scrollable Details */}
//         <div className="details-text">
//           <h2>{recipe.title}</h2>

//           <h3>Ingredients:</h3>
//           <ul className="ingredients-list">
//             {recipe.ingredients.split("\n").map((ingredient, i) => (
//               <li key={i}>{ingredient.trim()}</li>
//             ))}
//           </ul>

//           <h3>Preparation Steps:</h3>
//           <ul className="instructions-list">
//             {recipe.instructions.split("\n").map((step, i) => (
//               <li key={i}>{step.trim()}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
         
//     </div>
//   );
// };

// export default RecipeDetails;

import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../Styles/RecipeDetails.css"; 
import bgImage from "../Assets/bg3.jpg";

const bgStyle = {
  backgroundImage: `url(${bgImage})`, 
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
};

const RecipeDetails = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;  // ✅ Get the recipe passed via state

  if (!recipe) {
    console.error("⚠️ Recipe data not found!");
    return <h2 className="error-message">Recipe not found!</h2>;
  }

  return (
    <div style={bgStyle}className="recipe-details-container">
      <div className="recipe-card-details">
        {/* Left Side - Image */}
        <div className="image-container">
          {recipe.image && (
            <img
              src={recipe.image}
              alt={recipe.title}
              className="details-image"
            />
          )}
        </div>
        
        {/* Right Side - Scrollable Details */}
        <div className="details-text">
          <h2>{recipe.title}</h2>

          <h3>Ingredients:</h3>
          <ul className="ingredients-list">
            {recipe.ingredients
              ? recipe.ingredients.split("\n").map((ingredient, i) => (
                  <li key={i}>{ingredient.trim()}</li>
                ))
              : <p>No ingredients available.</p>
            }
          </ul>

          <h3>Preparation Steps:</h3>
          <ul className="instructions-list">
            {recipe.instructions
              ? recipe.instructions.split("\n").map((step, i) => (
                  <li key={i}>{step.trim()}</li>
                ))
              : <p>No instructions available.</p>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

