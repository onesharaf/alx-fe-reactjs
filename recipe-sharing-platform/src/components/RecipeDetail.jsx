import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import recipesData from "../data.json"

function RecipeDetail() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    const selectedRecipe = recipesData.find(
      (item) => item.id === Number(id)
    )
    setRecipe(selectedRecipe)
  }, [id])

  if (!recipe) {
    return (
      <p className="text-center mt-10 text-gray-600">Recipe not found.</p>
    )
  }

  return (
      <section className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <Link 
            to={`/recipe/${recipe.id}`} key= {recipe.id}>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold">
                  {recipe.title}
                </h2>
              </div>
            </div>
         </Link>

        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-md mt-6"
        />

        <h1 className="text-3xl sm:text-4xl font-bold mt-6 mb-4">
          {recipe.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              Cooking Instructions
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {recipe.instructions}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecipeDetail;