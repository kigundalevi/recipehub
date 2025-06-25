import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Mediterranean Quinoa Bowl',
    description: 'A healthy and colorful bowl packed with fresh vegetables, quinoa, and a tangy lemon dressing.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cookTime: 25,
    prepTime: 15,
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Mediterranean',
    category: 'Main Course',
    ingredients: [
      '1 cup quinoa',
      '2 cups vegetable broth',
      '1 cucumber, diced',
      '2 tomatoes, chopped',
      '1/2 red onion, thinly sliced',
      '1/2 cup kalamata olives',
      '1/2 cup feta cheese, crumbled',
      '1/4 cup fresh parsley',
      '3 tbsp olive oil',
      '2 tbsp lemon juice',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Rinse quinoa and cook in vegetable broth according to package directions.',
      'Let quinoa cool completely.',
      'In a large bowl, combine cooled quinoa, cucumber, tomatoes, red onion, and olives.',
      'Whisk together olive oil, lemon juice, salt, and pepper.',
      'Pour dressing over quinoa mixture and toss to combine.',
      'Top with feta cheese and fresh parsley before serving.'
    ],
    nutrition: {
      calories: 320,
      protein: 12,
      carbs: 45,
      fat: 14
    },
    rating: 4.8,
    reviews: 156,
    author: {
      name: 'Chef Maria',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    },
    tags: ['healthy', 'vegetarian', 'gluten-free', 'mediterranean'],
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Spicy Thai Basil Chicken',
    description: 'Authentic Thai stir-fry with ground chicken, holy basil, and chilies served over jasmine rice.',
    image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cookTime: 15,
    prepTime: 10,
    servings: 2,
    difficulty: 'Medium',
    cuisine: 'Thai',
    category: 'Main Course',
    ingredients: [
      '1 lb ground chicken',
      '3 cloves garlic, minced',
      '2-3 Thai chilies, sliced',
      '1 cup fresh Thai basil leaves',
      '2 tbsp vegetable oil',
      '2 tbsp fish sauce',
      '1 tbsp soy sauce',
      '1 tsp sugar',
      '2 eggs',
      'Jasmine rice for serving'
    ],
    instructions: [
      'Heat oil in a wok or large skillet over high heat.',
      'Add garlic and chilies, stir-fry for 30 seconds.',
      'Add ground chicken and cook, breaking it up, until no longer pink.',
      'Add fish sauce, soy sauce, and sugar. Stir to combine.',
      'Add basil leaves and stir until wilted.',
      'In a separate pan, fry eggs sunny-side up.',
      'Serve chicken over rice topped with fried egg.'
    ],
    nutrition: {
      calories: 450,
      protein: 35,
      carbs: 25,
      fat: 22
    },
    rating: 4.9,
    reviews: 203,
    author: {
      name: 'Chef Somchai',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    },
    tags: ['spicy', 'thai', 'quick', 'authentic'],
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    title: 'Classic Chocolate Chip Cookies',
    description: 'Perfectly chewy and crispy chocolate chip cookies that are sure to satisfy your sweet tooth.',
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cookTime: 12,
    prepTime: 15,
    servings: 24,
    difficulty: 'Easy',
    cuisine: 'American',
    category: 'Dessert',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 tsp baking soda',
      '1 tsp salt',
      '1 cup butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup brown sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '2 cups chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix flour, baking soda, and salt in a bowl.',
      'Cream butter and both sugars until fluffy.',
      'Beat in eggs and vanilla.',
      'Gradually mix in flour mixture.',
      'Stir in chocolate chips.',
      'Drop rounded tablespoons onto ungreased baking sheets.',
      'Bake 9-11 minutes until golden brown.',
      'Cool on baking sheet for 2 minutes before removing.'
    ],
    nutrition: {
      calories: 180,
      protein: 2,
      carbs: 26,
      fat: 8
    },
    rating: 4.7,
    reviews: 89,
    author: {
      name: 'Baker Sarah',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    },
    tags: ['dessert', 'cookies', 'chocolate', 'classic'],
    createdAt: '2024-01-10'
  },
  {
    id: '4',
    title: 'Creamy Mushroom Risotto',
    description: 'Rich and creamy Italian risotto with mixed mushrooms and parmesan cheese.',
    image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cookTime: 30,
    prepTime: 15,
    servings: 4,
    difficulty: 'Hard',
    cuisine: 'Italian',
    category: 'Main Course',
    ingredients: [
      '1 1/2 cups Arborio rice',
      '6 cups warm chicken broth',
      '1 lb mixed mushrooms, sliced',
      '1 onion, finely chopped',
      '3 cloves garlic, minced',
      '1/2 cup white wine',
      '1/2 cup grated Parmesan',
      '3 tbsp butter',
      '2 tbsp olive oil',
      'Fresh thyme',
      'Salt and pepper'
    ],
    instructions: [
      'Heat olive oil in a large pan and sauté mushrooms until golden.',
      'In another pan, heat 1 tbsp butter and cook onion until soft.',
      'Add garlic and rice, stirring for 2 minutes.',
      'Add wine and stir until absorbed.',
      'Add warm broth one ladle at a time, stirring constantly.',
      'Continue until rice is creamy and tender, about 20 minutes.',
      'Stir in mushrooms, remaining butter, and Parmesan.',
      'Season with salt, pepper, and fresh thyme.'
    ],
    nutrition: {
      calories: 380,
      protein: 14,
      carbs: 58,
      fat: 12
    },
    rating: 4.6,
    reviews: 124,
    author: {
      name: 'Chef Giuseppe',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    },
    tags: ['italian', 'creamy', 'mushrooms', 'comfort-food'],
    createdAt: '2024-01-25'
  },
  {
    id: '5',
    title: 'Fresh Avocado Toast',
    description: 'Simple yet delicious avocado toast topped with cherry tomatoes and a drizzle of olive oil.',
    image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cookTime: 5,
    prepTime: 10,
    servings: 2,
    difficulty: 'Easy',
    cuisine: 'Modern',
    category: 'Breakfast',
    ingredients: [
      '2 slices whole grain bread',
      '1 ripe avocado',
      '1/2 cup cherry tomatoes, halved',
      '2 tbsp olive oil',
      '1 tbsp lemon juice',
      'Salt and pepper',
      'Red pepper flakes',
      'Fresh herbs (optional)'
    ],
    instructions: [
      'Toast bread slices until golden brown.',
      'Mash avocado with lemon juice, salt, and pepper.',
      'Spread avocado mixture on toast.',
      'Top with cherry tomatoes.',
      'Drizzle with olive oil.',
      'Sprinkle with red pepper flakes and herbs.',
      'Serve immediately.'
    ],
    nutrition: {
      calories: 280,
      protein: 8,
      carbs: 32,
      fat: 16
    },
    rating: 4.5,
    reviews: 67,
    author: {
      name: 'Healthy Hannah',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    },
    tags: ['healthy', 'breakfast', 'avocado', 'quick'],
    createdAt: '2024-02-01'
  },
  {
    id: '6',
    title: 'Beef Tacos with Lime Crema',
    description: 'Flavorful ground beef tacos with fresh toppings and a zesty lime crema.',
    image: 'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cookTime: 20,
    prepTime: 15,
    servings: 4,
    difficulty: 'Medium',
    cuisine: 'Mexican',
    category: 'Main Course',
    ingredients: [
      '1 lb ground beef',
      '8 corn tortillas',
      '1 onion, diced',
      '2 cloves garlic, minced',
      '1 tbsp chili powder',
      '1 tsp cumin',
      '1/2 cup sour cream',
      '2 limes, juiced',
      '1 cup lettuce, shredded',
      '1 tomato, diced',
      '1/2 cup cheese, shredded',
      'Cilantro for garnish'
    ],
    instructions: [
      'Cook ground beef with onion and garlic until browned.',
      'Add chili powder and cumin, cook 2 minutes more.',
      'Mix sour cream with lime juice for crema.',
      'Warm tortillas in a dry skillet.',
      'Fill tortillas with beef mixture.',
      'Top with lettuce, tomato, and cheese.',
      'Drizzle with lime crema and garnish with cilantro.'
    ],
    nutrition: {
      calories: 420,
      protein: 28,
      carbs: 35,
      fat: 18
    },
    rating: 4.8,
    reviews: 145,
    author: {
      name: 'Chef Carlos',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    },
    tags: ['mexican', 'beef', 'tacos', 'lime'],
    createdAt: '2024-02-05'
  }
];

export const cuisines = [
  'All Cuisines',
  'Mediterranean',
  'Thai',
  'American',
  'Italian',
  'Mexican',
  'Modern',
  'Indian',
  'Chinese',
  'French'
];

export const categories = [
  'All Categories',
  'Breakfast',
  'Main Course',
  'Dessert',
  'Appetizer',
  'Salad',
  'Soup',
  'Snack'
];

export const difficulties = [
  'All Levels',
  'Easy',
  'Medium',
  'Hard'
];