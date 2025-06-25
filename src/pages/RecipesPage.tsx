import React, { useState, useEffect } from 'react';
import { Filter, Search, X } from 'lucide-react';
import RecipeGrid from '../components/recipe/RecipeGrid';
import { recipes, cuisines, categories, difficulties } from '../data/recipes';
import { Recipe, SearchFilters } from '../types';

const RecipesPage: React.FC = () => {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let result = [...recipes];

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(recipe =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query)) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply filters
    if (filters.cuisine && filters.cuisine !== 'All Cuisines') {
      result = result.filter(recipe => recipe.cuisine === filters.cuisine);
    }

    if (filters.category && filters.category !== 'All Categories') {
      result = result.filter(recipe => recipe.category === filters.category);
    }

    if (filters.difficulty && filters.difficulty !== 'All Levels') {
      result = result.filter(recipe => recipe.difficulty === filters.difficulty);
    }

    if (filters.maxCookTime) {
      result = result.filter(recipe => (recipe.prepTime + recipe.cookTime) <= filters.maxCookTime);
    }

    setFilteredRecipes(result);
  }, [searchQuery, filters]);

  const clearFilters = () => {
    setFilters({});
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">All Recipes</h1>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search recipes, ingredients, or cuisines..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4"
            >
              <Filter size={20} />
              Filters
            </button>

            {/* Filters */}
            <div className={`bg-white rounded-lg p-6 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-orange-500 hover:text-orange-600"
                >
                  Clear All
                </button>
              </div>

              {/* Cuisine Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cuisine
                </label>
                <select
                  value={filters.cuisine || 'All Cuisines'}
                  onChange={(e) => setFilters({ ...filters, cuisine: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {cuisines.map(cuisine => (
                    <option key={cuisine} value={cuisine}>{cuisine}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={filters.category || 'All Categories'}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty
                </label>
                <select
                  value={filters.difficulty || 'All Levels'}
                  onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>

              {/* Cook Time Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Cook Time: {filters.maxCookTime || 120} minutes
                </label>
                <input
                  type="range"
                  min="15"
                  max="120"
                  step="15"
                  value={filters.maxCookTime || 120}
                  onChange={(e) => setFilters({ ...filters, maxCookTime: parseInt(e.target.value) })}
                  className="w-full accent-orange-500"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {filteredRecipes.length} of {recipes.length} recipes
              </p>
              
              <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Sort by: Featured</option>
                <option>Sort by: Newest</option>
                <option>Sort by: Rating</option>
                <option>Sort by: Cook Time</option>
              </select>
            </div>

            <RecipeGrid recipes={filteredRecipes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;