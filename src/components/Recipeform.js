import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const RecipeForm = ({ onSubmit }) => {
  const [recipe, setRecipe] = useState({
    title: "",
    image: null,
    ingredients: "",
    steps: "",
    category: "Vegan",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    setRecipe((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(recipe); // Pass data to parent component
  };

  return (
    <Container className="mt-4">
      <h2>Create a New Recipe</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageUpload} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            placeholder="Enter ingredients separated by commas"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Preparation Steps</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="steps"
            value={recipe.steps}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select name="category" value={recipe.category} onChange={handleChange}>
            <option value="Vegan">Vegan</option>
            <option value="Dessert">Dessert</option>
            <option value="Main Course">Main Course</option>
            <option value="Beverage">Beverage</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">Submit Recipe</Button>
      </Form>
    </Container>
  );
};

export default RecipeForm;
