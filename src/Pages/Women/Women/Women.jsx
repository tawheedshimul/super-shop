// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMeals = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=&p=${page}`);
      if (response.data.meals) {
        setMeals((prevMeals) => [...prevMeals, ...response.data.meals]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMeals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchMeals();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">MealDB React App</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="bg-white p-4 shadow-md rounded">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-32 object-cover" />
            <h2 className="text-xl font-bold mt-4">{meal.strMeal}</h2>
          </div>
        ))}
        {isLoading && <p className="text-center col-span-full">Loading...</p>}
      </div>
    </div>
  );
};

export default App;
