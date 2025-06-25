import React, { useState } from 'react';
import { Search, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const popularSearches = ['Pasta', 'Chicken', 'Vegetarian', 'Quick meals', 'Desserts'];

  return (
    <div className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-300 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-red-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-300 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Amazing
            <span className="text-orange-500 block">Recipes</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Find the perfect recipe for any occasion. From quick weeknight dinners to impressive weekend feasts.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for recipes, ingredients, or cuisines..."
                className="w-full px-6 py-4 pl-12 text-lg rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <TrendingUp size={16} className="text-gray-500" />
            <span className="text-gray-500 text-sm mr-2">Popular:</span>
            {popularSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => navigate(`/search?q=${encodeURIComponent(search)}`)}
                className="text-sm bg-white hover:bg-orange-50 text-gray-700 px-3 py-1 rounded-full border border-gray-200 hover:border-orange-200 transition-colors"
              >
                {search}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">10K+</div>
              <div className="text-gray-600">Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">50K+</div>
              <div className="text-gray-600">Happy Cooks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
              <div className="text-gray-600">Cuisines</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;