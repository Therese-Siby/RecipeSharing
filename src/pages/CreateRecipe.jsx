import React, { useState } from "react";

const CreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!title.trim() || !ingredients.trim() || !instructions.trim()) {
      setError("All fields are required.");
      return;
    }

    console.log({ title, ingredients, instructions });
    setSuccess(true);
    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="container mt-5">
      <h2>Create Recipe</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">Recipe submitted successfully!</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Recipe Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          <textarea
            className="form-control"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Instructions</label>
          <textarea
            className="form-control"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
