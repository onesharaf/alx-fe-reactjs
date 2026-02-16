import { useState } from "react"

function AddRecipeForm () {
  const [title, setTitle] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [steps, setSteps] = useState("")
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!title.trim()) {
      newErrors.title = "Recipe title is required"
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "ingredients are required"
    }else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please include at least two ingredients separated by commas"
    } 

    if (!steps.trim()) {
      newErrors.steps = "Preparartion steps are required"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps
    }

    console.log("Form Submitted:", newRecipe)

    setTitle("")
    setIngredients("")
    setSteps("")
    setErrors({})
  }

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounde-2xl shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Add New Recipe</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Recipe Title</label>
            <input
             type="text"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />

            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Ingredients</label>
            <textarea 
              rows="4"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g Rice, Chicken, Salt"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Preparation Steps</label>
            <textarea
               row="5"
               value={steps}
               onChange={(e) => setSteps(e.target.value)}
               className="w-full px-4 py-2 barder rounded-lg focus:ring-2 focus:ring-green-500"
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition">Submit Recipe</button>
        </form>
      </div>
    </section>
  )
}

export default AddRecipeForm;