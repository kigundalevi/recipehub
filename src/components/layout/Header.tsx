import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, User, Menu, X, ChefHat } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-900">RecipeHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                isActive('/') ? 'text-orange-500' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/recipes" 
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                isActive('/recipes') ? 'text-orange-500' : 'text-gray-700'
              }`}
            >
              Recipes
            </Link>
            <Link 
              to="/categories" 
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                isActive('/categories') ? 'text-orange-500' : 'text-gray-700'
              }`}
            >
              Categories
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                isActive('/about') ? 'text-orange-500' : 'text-gray-700'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/search" 
              className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <Search size={20} />
            </Link>
            <Link 
              to="/favorites" 
              className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <Heart size={20} />
            </Link>
            <Link 
              to="/profile" 
              className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <User size={20} />
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-orange-500 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/recipes" 
                className="text-gray-700 hover:text-orange-500 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Recipes
              </Link>
              <Link 
                to="/categories" 
                className="text-gray-700 hover:text-orange-500 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-orange-500 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;