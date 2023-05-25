import CardProduct from "../../components/CardProduct/CardProduct";
import Line from "./line";
import Details from "./Details";
import "./styles.css";
import { getProduct } from "../../services/products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import stars from "../../assets/Product/stars.svg";

const Product = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const calculateStars = (response) => {
    const width = 100 - response.rating.rate * 20;
    return width;
  };

  return (
    <div className="cointanerProduct">
      {product ? (
        <div className="coitainerResumeProduct">
          <h1>{product.title}</h1>
          <CardProduct img={product.image} />
        </div>
      ) : (
        <Loader />
      )}

      {product && (
        <div className="coitainerProductDetails">
          <Line />
          <div className="containerInformationsProduct">
            <Details title={"Produto"} description={product.title} />
            <Details title={"Categoria"} description={product.category} />
          </div>
          <Line />
          <div className="containerInformationsProduct bigTitle">
            <Details description={`R$ ${product.price.toFixed(2)}`} />
            <Details title={"Descrição"} description={product.description} />
          </div>
          <Line />
          <div className="containerInformationsProduct displayRow">
            <div className="starsContainer">
              <img src={stars} alt="Estrelinhas" />
              <div
                className="cover"
                style={product && { width: `${calculateStars(product)}%` }}
              ></div>
            </div>

            <Details
              description={`${product.rating.count} avalições de clientes`}
            />
          </div>
          <Line />
        </div>
      )}
    </div>
  );
};

export default Product;
