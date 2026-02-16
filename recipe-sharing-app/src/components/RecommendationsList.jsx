import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(
    (state) => state.recommendations
  );
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <div>
      <h2>Recommended for You</h2>

      <button onClick={generateRecommendations}>
        Generate Recommendations
      </button>

      {recommendations.length === 0 && <p>No recommendations yet.</p>}

      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
