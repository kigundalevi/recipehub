# RecipeHub

A modern, responsive recipe application built with React, TypeScript, and Supabase. Discover, search, and explore delicious recipes with an elegant user interface.

## 🚀 Features

- 🍽️ Browse a wide variety of recipes
- 🔍 Search functionality to find your favorite dishes
- 📱 Responsive design that works on all devices
- ⚡ Fast and smooth user experience with React 18
- 🔒 User authentication and data storage with Supabase
- 💳 Integrated with Stripe for premium features (if applicable)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Authentication & Database)
- **Payments**: Stripe Integration
- **Icons**: Lucide Icons

## 📦 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account
- (Optional) Stripe account for payment processing

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/recipehub.git
   cd recipehub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   The application will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
│   ├── HomePage.tsx
│   ├── RecipeDetailPage.tsx
│   ├── RecipesPage.tsx
│   └── SearchPage.tsx
├── data/          # Data and API logic
├── types/         # TypeScript type definitions
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview the production build locally

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the blazing fast development experience
- [Supabase](https://supabase.com/) for the amazing backend services
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) for the beautiful icons
