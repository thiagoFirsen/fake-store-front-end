import "./styles.css";
import Title from "../Title/Title";
import CardProduct from "../CardProduct/CardProduct";
import ArrowRight from "../../assets/Home/ArrowRight.svg";
import { useEffect, useState } from "react";
import { getCategories } from "../../services/products";
import { Link } from "react-router-dom";

const Categories = () => {
  const mockCategoriesPictures = [
    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1600721391689-2564bb8055de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=406&q=80",
    "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    "https://plus.unsplash.com/premium_photo-1661777373172-65269ff71d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  ];
  const [categories, setCategories] = useState();
  useEffect(() => {
    getCategories()
      .then((response) => setCategories(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="coitainerCategories">
      <Title
        title={"Categorias"}
        description={"Procure o que você esteja procurando"}
      />
      <div className="cointanerCardCategories">
        {categories?.map((category, index) => {
          return (
            <CardProduct
              key={index}
              img={mockCategoriesPictures[index]}
              title={category}
            />
          );
        })}
      </div>

      <Link to="/Products">
        <button id="buttonCategories">
          Explore <img src={ArrowRight} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default Categories;
