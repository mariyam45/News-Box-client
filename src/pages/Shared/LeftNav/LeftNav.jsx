import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftEdtInsight from "../LeftEdtInsight/LeftEdtInsight";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="me-2 px-3 bg-body-tertiary">
      <h3>All Category</h3>
      <div className="">
        {categories.map((category) => (
          <h5 key={category.id} className="my-4">
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-secondary 
            "
            >
              {category.name}
            </Link>
          </h5>
        ))}
      </div>

      <LeftEdtInsight></LeftEdtInsight>
    </div>
  );
};

export default LeftNav;
