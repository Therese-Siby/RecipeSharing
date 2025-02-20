import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe Submitted:", recipe);
    // Later, we'll save this to a database
  };

  return (
    <Container className="mt-5 p-4 bg-light rounded shadow">
      <h2 className="fw-bold text-center text-dark">Create a Recipe</h2>

      <Form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Recipe Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            placeholder="Enter recipe title"
            required
          />
        </Form.Group>

        {/* Ingredients */}
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Ingredients</Form.Label>
          <Form.Control
            as="textarea"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            placeholder="List ingredients..."
            rows={3}
            required
          />
        </Form.Group>

        {/* Instructions */}
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Instructions</Form.Label>
          <Form.Control
            as="textarea"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            placeholder="Step-by-step instructions..."
            rows={5}
            required
          />
        </Form.Group>

        {/* Image Upload */}
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Recipe Image</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={recipe.image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </Form.Group>

        {/* Submit Button */}
        <Button type="submit" className="fw-bold w-100" style={{ backgroundColor: "#17a2b8", border: "none" }}>
          Submit Recipe
        </Button>
      </Form>
    </Container>
  );
};

export default CreateRecipe;
