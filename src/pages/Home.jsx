import React from "react";
import { Link } from "react-router-dom";

const Home = ({ recipes }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Welcome to Recipe Sharing</h2>
      <p className="text-center">Discover new and exciting recipes!</p>

      <div className="row">
        {recipes.slice(0, 2).map((recipe) => (
          <div key={recipe.id} className="col-md-6 mb-4">
            <div className="card">
              <img src={recipe.image} className="card-img-top" alt={recipe.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Link to="/recipes" className="btn btn-primary">
          View More Recipes
        </Link>
      </div>
    </div>
  );
};

export default Home;
