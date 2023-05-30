import "./styles.css";
import CardProduct from "../CardProduct/CardProduct";
import { getProductsBestSelling } from "../../services/products";
import ArrowRight from "../../assets/Home/ArrowRight.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BestSelling = () => {
  const [productsBestSelling, setProductsBestSelling] = useState();
  useEffect(() => {
    getProductsBestSelling()
      .then((response) => {
        setProductsBestSelling(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="containerBestSelling">
      <div className="descriptionBestSelling">
        <h1>Produtos Mais vendidos</h1>
        <h2>
          A maneira mais fácil de ter um estilo de vida moderno e tecnológico é
          comprando seus produtos de moda e eletrônicos favoritos.
        </h2>
        <Link to="/products">
          <button>
            Ver Mais
            <img src={ArrowRight} alt="" />
          </button>
        </Link>
      </div>
      <div className="cointainerProductsBestSelling">
        {productsBestSelling?.map((product) => {
          return (
            <Link key={product.id} to={`/Products/${product.id}`}>
              <CardProduct
                key={product.id}
                img={product.image}
                title={product.title}
                price={`R$ ${product.price.toFixed(2)}`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BestSelling;
