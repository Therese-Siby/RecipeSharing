import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Recipe Sharing App</h1>
      <Link to="/create-recipe" className="btn btn-success">Create a Recipe</Link>
    </div>
  );
};

export default Home;
