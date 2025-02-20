import React from "react";
import { useLocation } from "react-router-dom";

const ReadLater = () => {
  const location = useLocation();
  const readLaterRecipes = location.state?.readLater || [];

  return (
    <div className="container mt-5">
      <h2 className="text-center">Read Later Recipes 📌</h2>

      {readLaterRecipes.length === 0 ? (
        <p className="text-center">No recipes saved for later yet!</p>
      ) : (
        <div className="row">
          {readLaterRecipes.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">{recipe.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReadLater;
