import { Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
              <SearchBar />
              <FavoritesList />
              <RecommendationsList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};

export default App;
