import React, { useState, useEffect } from 'react';
import HomeComp from '../Components/Home/HomeComp.js';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  }, []);

  return (
   <HomeComp/>
   
  );
};

export default Home;
