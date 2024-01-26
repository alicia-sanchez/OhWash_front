import React, { useState, useEffect } from 'react';
import AxiosPublic from '../../utils/AxiosPublic.js';

const HomeComp = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AxiosPublic.get('/category_articles')
      .then(response => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {categories.map(category => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomeComp;
