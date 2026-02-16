import { useEffect, useState } from "react"
import recipeData from "../data.json"
import { Link } from "react-router-dom"

function HomePage () {
  const [recipes, setRecipes] = useState ([])

  useEffect(() => {
    setRecipes(recipeData)
  }, [])

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-black text-center">Recipe Collection</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">{recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
           <div
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scalr-105 transform transition duration-300 ease-in-out">
              <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover" 
              />

                <div className="p-5">
                    <h2 className="text-xl font-semibold mb-2 text-black">{recipe.title}
                    </h2>
                    <p className="text-gray-600 text-sm">{recipe.description}</p>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-small mb-1 text-black">{recipe.summary}</h3>
                  </div>
            </div>
      </Link>
        ))}
      </div>
    </div>
  </section>
  )
}

export default HomePage;