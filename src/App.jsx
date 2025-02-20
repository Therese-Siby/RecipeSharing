import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateRecipe from "./pages/CreateRecipe";
import RecipeCorner from "./pages/RecipeCorner";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          const formattedRecipes = data.meals
            .filter((meal) => meal.strMeal.toLowerCase() !== "migas") // Remove Migas
            .slice(0, 10)
            .map((meal) => ({
              id: meal.idMeal,
              title: meal.strMeal,
              description: meal.strInstructions.substring(0, 100) + "...",
              image: meal.strMealThumb || "https://via.placeholder.com/300",
            }));

          setRecipes(formattedRecipes);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
        setError("Failed to load recipes. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="main-content container flex-grow-1">
          <Routes>
            <Route path="/" element={<Home recipes={recipes} loading={loading} error={error} />} />
            <Route path="/create" element={<CreateRecipe />} />
            <Route path="/recipes" element={<RecipeCorner recipes={recipes} loading={loading} error={error} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
