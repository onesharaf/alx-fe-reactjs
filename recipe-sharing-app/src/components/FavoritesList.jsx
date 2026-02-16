import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favoritesIds = useRecipeStore(state => state.favorites || []);
  const recipes = useRecipeStore(state => state.recipes || []);

  const favoriteRecipes = favoritesIds
    .map(id => recipes.find(r => r.id === id))
    .filter(Boolean); 

  if (favoriteRecipes.length === 0) return <p>No favorites yet</p>;

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
