import React, { useState } from 'react';
import { Search, Clock, Users, ChefHat } from 'lucide-react';
import styles from './App.module.css';

const RecipeFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      category: 'Italian',
      time: '20 min',
      servings: 4,
      difficulty: 'Easy',
      ingredients: ['400g spaghetti', '200g pancetta', '4 eggs', '100g parmesan', 'Black pepper', 'Salt'],
      instructions: [
        'Cook spaghetti in salted boiling water until al dente',
        'Fry pancetta until crispy',
        'Whisk eggs with grated parmesan',
        'Combine hot pasta with pancetta, then egg mixture',
        'Toss quickly to create creamy sauce',
        'Season with pepper and serve immediately'
      ]
    },
    {
      id: 2,
      name: 'Chicken Tikka Masala',
      category: 'Indian',
      time: '45 min',
      servings: 6,
      difficulty: 'Medium',
      ingredients: ['1kg chicken breast', '400ml coconut milk', '400g canned tomatoes', '2 onions', 'Ginger', 'Garlic', 'Garam masala', 'Turmeric', 'Cumin'],
      instructions: [
        'Marinate chicken in yogurt and spices for 30 minutes',
        'Grill chicken pieces until cooked through',
        'Sauté onions, ginger, and garlic',
        'Add tomatoes and spices, simmer',
        'Stir in coconut milk and grilled chicken',
        'Simmer until sauce thickens, serve with rice'
      ]
    },
    {
      id: 3,
      name: 'Chocolate Chip Cookies',
      category: 'Dessert',
      time: '25 min',
      servings: 24,
      difficulty: 'Easy',
      ingredients: ['250g flour', '200g butter', '150g brown sugar', '100g white sugar', '2 eggs', '300g chocolate chips', 'Vanilla extract', 'Baking soda', 'Salt'],
      instructions: [
        'Preheat oven to 180°C',
        'Cream butter with both sugars',
        'Beat in eggs and vanilla',
        'Mix in flour, baking soda, and salt',
        'Fold in chocolate chips',
        'Drop spoonfuls on baking sheet, bake 10-12 minutes'
      ]
    },
    {
      id: 4,
      name: 'Greek Salad',
      category: 'Mediterranean',
      time: '15 min',
      servings: 4,
      difficulty: 'Easy',
      ingredients: ['4 tomatoes', '1 cucumber', '1 red onion', '200g feta cheese', '100g olives', 'Olive oil', 'Red wine vinegar', 'Oregano', 'Salt', 'Pepper'],
      instructions: [
        'Chop tomatoes and cucumber into chunks',
        'Slice red onion thinly',
        'Combine vegetables in large bowl',
        'Add olives and cubed feta cheese',
        'Whisk olive oil with vinegar and oregano',
        'Dress salad and season to taste'
      ]
    },
    {
      id: 5,
      name: 'Beef Tacos',
      category: 'Mexican',
      time: '30 min',
      servings: 8,
      difficulty: 'Easy',
      ingredients: ['500g ground beef', '8 taco shells', '1 onion', '2 tomatoes', '1 lettuce', '200g cheddar cheese', 'Taco seasoning', 'Sour cream', 'Salsa'],
      instructions: [
        'Brown ground beef with diced onion',
        'Add taco seasoning and cook 5 minutes',
        'Warm taco shells in oven',
        'Dice tomatoes and shred lettuce',
        'Grate cheese',
        'Assemble tacos with beef and toppings'
      ]
    }
  ];

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <div className={styles.headerTitle}>
            <ChefHat className={styles.headerIcon} size={32} />
            <h1 className={styles.title}>Recipe Finder</h1>
          </div>
          <p className={styles.subtitle}>Discover delicious recipes from around the world</p>
        </header>

        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrapper}>
            <Search className={styles.searchIcon} size={20} />
            <input
              type="text"
              placeholder="Search recipes or cuisines..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {selectedRecipe ? (
          <div className={styles.recipeDetailContainer}>
            <button
              onClick={() => setSelectedRecipe(null)}
              className={styles.backButton}
            >
              ← Back to Recipes
            </button>
            
            <div className={styles.recipeDetailCard}>
              <div className={styles.recipeDetailHeader}>
                <h2 className={styles.recipeDetailTitle}>{selectedRecipe.name}</h2>
                <div className={styles.recipeDetailMeta}>
                  <div className={styles.metaItem}>
                    <Clock size={16} />
                    <span>{selectedRecipe.time}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Users size={16} />
                    <span>{selectedRecipe.servings} servings</span>
                  </div>
                  <span className={`${styles.difficultyBadge} ${styles[selectedRecipe.difficulty.toLowerCase()]}`}>
                    {selectedRecipe.difficulty}
                  </span>
                </div>
              </div>

              <div className={styles.recipeDetailContent}>
                <div className={styles.recipeSection}>
                  <h3 className={styles.sectionTitle}>Ingredients</h3>
                  <ul className={styles.ingredientsList}>
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index} className={styles.ingredientItem}>
                        <div className={styles.bulletPoint}></div>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.recipeSection}>
                  <h3 className={styles.sectionTitle}>Instructions</h3>
                  <ol className={styles.instructionsList}>
                    {selectedRecipe.instructions.map((step, index) => (
                      <li key={index} className={styles.instructionItem}>
                        <span className={styles.stepNumber}>{index + 1}</span>
                        <span className={styles.stepText}>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.recipesGrid}>
            {filteredRecipes.map(recipe => (
              <div 
                key={recipe.id} 
                className={styles.recipeCard} 
                onClick={() => setSelectedRecipe(recipe)}
              >
                <div className={styles.recipeCardHeader}>
                  <ChefHat className={styles.recipeCardIcon} size={48} />
                </div>
                
                <div className={styles.recipeCardContent}>
                  <h3 className={styles.recipeCardTitle}>{recipe.name}</h3>
                  <p className={styles.recipeCardCategory}>{recipe.category}</p>
                  
                  <div className={styles.recipeCardMeta}>
                    <div className={styles.metaItem}>
                      <Clock size={14} />
                      <span>{recipe.time}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Users size={14} />
                      <span>{recipe.servings} servings</span>
                    </div>
                  </div>
                  
                  <span className={`${styles.difficultyBadge} ${styles[recipe.difficulty.toLowerCase()]}`}>
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredRecipes.length === 0 && (
          <div className={styles.noResults}>
            <Search size={48} className={styles.noResultsIcon} />
            <h3 className={styles.noResultsTitle}>No recipes found</h3>
            <p className={styles.noResultsText}>Try searching for a different recipe or cuisine type</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeFinder;