import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams(); // string id
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = recipesData.find((r) => r.id === id);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRecipe(found || null);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-xl text-gray-700">Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6 sm:p-8">
      <Link
        to="/"
        className="inline-block mb-6 text-blue-500 hover:underline"
      >
        &larr; Back to Home
      </Link>

      <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto hover:shadow-xl transition-shadow duration-300">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 sm:h-80 object-cover"
        />

        <div className="p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
