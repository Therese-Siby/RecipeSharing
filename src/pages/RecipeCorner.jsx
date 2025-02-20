import React, { useState } from "react";

const RecipeCorner = ({ recipes, loading, error }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [readLater, setReadLater] = useState([]);

  // Function to toggle wishlist
  const toggleWishlist = (id) => {
    setWishlist(wishlist.includes(id) ? wishlist.filter((item) => item !== id) : [...wishlist, id]);
  };

  // Function to toggle read later
  const toggleReadLater = (id) => {
    setReadLater(readLater.includes(id) ? readLater.filter((item) => item !== id) : [...readLater, id]);
  };

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center">All Recipes</h2>

      {/* Search Bar */}
      <div className="text-center mb-4">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Show errors if API fails */}
      {error && <p className="text-danger text-center">{error}</p>}

      {/* Show loading indicator */}
      {loading ? (
        <p className="text-center">Loading recipes...</p>
      ) : (
        <div className="row">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">{recipe.description}</p>

                    {/* Wishlist & Read Later Buttons */}
                    <div className="d-flex justify-content-around mt-3">
                      <button
                        className={`btn ${wishlist.includes(recipe.id) ? "btn-danger" : "btn-outline-danger"}`}
                        onClick={() => toggleWishlist(recipe.id)}
                      >
                        <i className="fa-solid fa-heart"></i> {wishlist.includes(recipe.id) ? "Remove" : "Wishlist"}
                      </button>

                      <button
                        className={`btn ${readLater.includes(recipe.id) ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={() => toggleReadLater(recipe.id)}
                      >
                        <i className="fa-solid fa-bookmark"></i> {readLater.includes(recipe.id) ? "Remove" : "Read Later"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No recipes found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeCorner;
