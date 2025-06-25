import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, Heart } from 'lucide-react';
import { Recipe } from '../../types';

interface RecipeCardProps {
  recipe: Recipe;
  onToggleFavorite?: (id: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onToggleFavorite }) => {
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      <Link to={`/recipe/${recipe.id}`} className="block relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Overlay with difficulty badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full text-white ${
            recipe.difficulty === 'Easy' ? 'bg-green-500' :
            recipe.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
          }`}>
            {recipe.difficulty}
          </span>
        </div>

        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            onToggleFavorite?.(recipe.id);
          }}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart 
            size={16} 
            className={`${recipe.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
      </Link>

      <div className="p-4">
        <Link to={`/recipe/${recipe.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-orange-500 transition-colors">
            {recipe.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {recipe.description}
        </p>

        {/* Recipe meta */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{totalTime}m</span>
            </div>
            <div className="flex items-center">
              <Users size={14} className="mr-1" />
              <span>{recipe.servings}</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <Star size={14} className="text-yellow-400 fill-current mr-1" />
            <span className="font-medium">{recipe.rating}</span>
            <span className="text-gray-400 ml-1">({recipe.reviews})</span>
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center">
          <img
            src={recipe.author.avatar}
            alt={recipe.author.name}
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-sm text-gray-600">by {recipe.author.name}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;