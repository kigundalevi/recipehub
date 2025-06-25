export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: number;
  prepTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cuisine: string;
  category: string;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  rating: number;
  reviews: number;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  createdAt: string;
  isFavorite?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role?: string;
}

export interface SearchFilters {
  cuisine?: string;
  category?: string;
  difficulty?: string;
  maxCookTime?: number;
  dietary?: string[];
}