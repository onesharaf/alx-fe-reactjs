// src/components/RecipeList.jsx
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  
  const recipes = useRecipeStore((state) => state.recipes || []);

  if (!recipes.length) return <p>No recipes yet</p>;

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
