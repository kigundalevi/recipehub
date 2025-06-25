import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedRecipes from '../components/home/FeaturedRecipes';
import Categories from '../components/home/Categories';
import { recipes } from '../data/recipes';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedRecipes recipes={recipes} />
      <Categories />
      
      {/* Newsletter Section */}
      <section className="py-16 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Miss a Recipe
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest recipes, cooking tips, and culinary inspiration delivered to your inbox.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-orange-500 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;