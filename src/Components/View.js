
// import React from "react";
// import { Link } from "react-router-dom";
// import "../Styles/View.css"; // Ensure this file exists

// const View = ({ recipes }) => {
//   return (
//     <div className="recipe-container">
//       <h2 className="title">Recipe List</h2>
//       <div className="recipe-grid">
//         {recipes.length === 0 ? (
//           <p className="no-recipes">No recipes added yet.</p>
//         ) : (
//           recipes.map((recipe, index) => (
//             <div key={index} className="recipe-card">
//               <h3 className="recipe-title">{recipe.title}</h3>
//               {recipe.image && (
//                 <Link to={`/recipe/${index}`} state={{ recipe }}className="recipe-link">
//                   <img
//                     src={URL.createObjectURL(recipe.image)}
//                     alt={recipe.title}
//                     className="recipe-image"
//                   />
//                 </Link>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default View;
// import React from "react";
// import { Link } from "react-router-dom";
// import "../Styles/View.css";

// const View = ({ recipes }) => {
//   console.log(" Recipes in View:", recipes);

//   return (
//     <div className="recipe-container">
//       <h2 className="title">Recipe List</h2>
//       <div className="recipe-grid">
//         {recipes.length === 0 ? (
//           <p className="no-recipes">No recipes added yet.</p>
//         ) : (
//           recipes.map((recipe, index) => (
//             <div key={index} className="recipe-card">
//               <h3 className="recipe-title">{recipe.title}</h3>
//               {recipe.image && (
//                 <Link 
//                   to={`/recipe/${index}`} 
//                   state={{ recipes }} 
//                   className="recipe-link"
//                   onClick={() => {
//                     console.log("Storing recipes in localStorage before navigation");
//                     localStorage.setItem("recipes", JSON.stringify(recipes));
//                   }}
//                 >
//                   <img
//                     src={recipe.image instanceof File ? URL.createObjectURL(recipe.image) : recipe.image}
//                     alt={recipe.title}
//                     className="recipe-image"
//                   />
//                 </Link>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default View;


// import React from "react";
// import { Link } from "react-router-dom";
// import "../Styles/View.css";

// const View = ({ recipes , onDelete }) => {
//   // console.log(" Recipes in View:", recipes);
//   const [filteredRecipes, setFilteredRecipes] = useState(recipes);

//   useEffect(() => {
//     const searchQuery = localStorage.getItem("searchQuery") || "";
    
//     if (searchQuery.trim() !== "") {
//       const filtered = recipes.filter(recipe =>
//         recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase()) 
//       );
//       setFilteredRecipes(filtered);
//     } else {
//       setFilteredRecipes(recipes);
//     }
//   }, [recipes]); // Runs when recipes change



//   return (
//     <div className="recipe-container">
//       <h2 className="title">Recipe List</h2>
      
//       <div className="recipe-grid">
//         {recipes.length === 0 ? (
//           <p className="no-recipes">No recipes added yet.</p>
//         ) : (
//           recipes.map((recipe, index) => (
//             <div key={index} className="recipe-card">
//               <h3 className="recipe-title">{recipe.title}</h3>
//               {recipe.image && (
//                 <Link 
//                   to={`/recipe/${index}`} 
//                   className="recipe-link"
//                 >
//                   <img
//                     src={recipe.image}  // ✅ Base64 images work directly
//                     alt={recipe.title}
//                     className="recipe-image"
//                   />
//                 </Link>
//               )}
//                <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(recipe)}}>Delete</button>
//             </div>
//           ))
//         )}
       
//       </div>
//     </div>
//   );
// };

// export default View;
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/View.css";
import bgImage from '../Assets/home3.jpg';

const View = ({ recipes, onDelete }) => {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery || "";  // ✅ Get search term from Home.js

  // 🔹 Filter recipes based on searchQuery
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="recipe-container"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center top",
      minHeight: "100vh",
      width: "100%",
    }}>
  
      <h2 className="title">Our Delicious Recipes</h2>

      <div className="recipe-grid">
        {filteredRecipes.length === 0 ? (
          <p className="no-recipes">No matching recipes found.</p>
        ) : (
          filteredRecipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <h3 className="recipe-title">{recipe.title}</h3>
              {recipe.image && (
                <Link 
                  to={`/recipe/${index}`} 
                  state={{recipe}}
                  className="recipe-link"
                >
                  <img
                    src={recipe.image} 
                    alt={recipe.title}
                    className="recipe-image"
                  />
                </Link>
              )}
               <button className="btn btn-sm btn-danger" onClick={() => onDelete(recipe)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default View;
