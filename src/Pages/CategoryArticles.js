import React, { useState } from "react";
import CategoryArticlesComponent from "../Components/CategoryArticles/CategoryArticlesComp";
import ArticlesComp from "../Components/ArticlesComp/ArticlesComp";

const CategoryArticles = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <CategoryArticlesComponent onCategorySelected={setSelectedCategory} />
      {selectedCategory && <ArticlesComp category={selectedCategory} />}
    </div>
  );
};

export default CategoryArticles;
