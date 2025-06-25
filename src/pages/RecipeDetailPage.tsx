import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Star, Heart, Share2, ChefHat, ArrowLeft, Check } from 'lucide-react';
import { recipes } from '../data/recipes';

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isFavorite, setIsFavorite] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Recipe Not Found</h1>
        <Link to="/recipes" className="text-orange-500 hover:text-orange-600">
          ← Back to Recipes
        </Link>
      </div>
    );
  }

  const toggleStep = (stepIndex: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepIndex) 
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex]
    );
  };

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Back Button */}
        <Link
          to="/recipes"
          className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full hover:bg-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="hidden sm:inline">Back to Recipes</span>
        </Link>

        {/* Action Buttons */}
        <div className="absolute top-6 right-6 flex gap-2">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            <Heart 
              size={20} 
              className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-700'}
            />
          </button>
          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <Share2 size={20} className="text-gray-700" />
          </button>
        </div>

        {/* Recipe Title */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {recipe.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{totalTime} min</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={16} />
                <span>{recipe.servings} servings</span>
              </div>
              <div className="flex items-center gap-1">
                <ChefHat size={16} />
                <span>{recipe.difficulty}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star size={16} className="fill-current text-yellow-400" />
                <span>{recipe.rating} ({recipe.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {recipe.description}
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <img
                src={recipe.author.avatar}
                alt={recipe.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900">Recipe by {recipe.author.name}</h3>
                <p className="text-gray-600 text-sm">Published on {new Date(recipe.createdAt).toLocaleDateString()}</p>
              </div>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h2>
              <div className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 p-4 rounded-lg border-2 transition-colors ${
                      completedSteps.includes(index)
                        ? 'bg-green-50 border-green-200'
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <button
                      onClick={() => toggleStep(index)}
                      className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                        completedSteps.includes(index)
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-300 hover:border-orange-500'
                      }`}
                    >
                      {completedSteps.includes(index) ? (
                        <Check size={16} />
                      ) : (
                        <span className="text-sm font-medium">{index + 1}</span>
                      )}
                    </button>
                    <p className={`text-gray-700 leading-relaxed ${
                      completedSteps.includes(index) ? 'line-through text-gray-500' : ''
                    }`}>
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recipe Info Card */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Recipe Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Prep Time:</span>
                  <span className="font-medium">{recipe.prepTime} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cook Time:</span>
                  <span className="font-medium">{recipe.cookTime} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Time:</span>
                  <span className="font-medium">{totalTime} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Servings:</span>
                  <span className="font-medium">{recipe.servings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty:</span>
                  <span className={`font-medium ${
                    recipe.difficulty === 'Easy' ? 'text-green-600' :
                    recipe.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Ingredients</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nutrition */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Nutrition (per serving)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">{recipe.nutrition.calories}</div>
                  <div className="text-sm text-gray-600">Calories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">{recipe.nutrition.protein}g</div>
                  <div className="text-sm text-gray-600">Protein</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">{recipe.nutrition.carbs}g</div>
                  <div className="text-sm text-gray-600">Carbs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500">{recipe.nutrition.fat}g</div>
                  <div className="text-sm text-gray-600">Fat</div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;