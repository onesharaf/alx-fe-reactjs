import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  if (recommendations.length === 0) return null;

  return (
    <div>
      <h2>Recommended for You 🌟</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id}><h4>{recipe.title}</h4></div>
      ))}
    </div>
  );
};
export default RecommendationsList;