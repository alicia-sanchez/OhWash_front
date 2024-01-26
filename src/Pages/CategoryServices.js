import React, { useState, useEffect } from "react";
import CategoryServicesComp from "../Components/CategoryServices/CategoryServicesComp.js";

const CatServices = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  return <CategoryServicesComp />;
};

export default CatServices;
