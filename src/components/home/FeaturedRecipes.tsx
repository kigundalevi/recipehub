import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import RecipeGrid from '../recipe/RecipeGrid';
import { Recipe } from '../../types';

interface FeaturedRecipesProps {
  recipes: Recipe[];
}

const FeaturedRecipes: React.FC<FeaturedRecipesProps> = ({ recipes }) => {
  const featuredRecipes = recipes.slice(0, 8);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Featured Recipes
            </h2>
            <p className="text-gray-600">
              Hand-picked recipes that our community loves
            </p>
          </div>
          <Link
            to="/recipes"
            className="hidden md:flex items-center text-orange-500 hover:text-orange-600 font-medium"
          >
            View All Recipes
            <ArrowRight size={20} className="ml-1" />
          </Link>
        </div>

        <RecipeGrid recipes={featuredRecipes} />

        <div className="text-center mt-8 md:hidden">
          <Link
            to="/recipes"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            View All Recipes
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;