import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import RecipeDetail from './components/RecipeDetail.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-gray-50'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path='/add' element={<AddRecipeForm />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;