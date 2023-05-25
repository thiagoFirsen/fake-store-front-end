import CardProduct from "../../components/CardProduct/CardProduct";
import Line from "./line";
import Details from "./Details";
import "./styles.css";
import { getProduct } from "../../services/products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const [products, setProducts] = useState();

  useEffect(() => {
    getProduct(id)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!id || !products) {
    return <h1 style={{ textAlign: "center" }}>PRODUTO NÃO ENCONTRADO</h1>;
  }
  return (
    <div className="cointanerProduct">
      <div className="coitainerResumeProduct">
        <h1>{products ? products.title : ""}</h1>
        <CardProduct img={products ? products.image : ""} />
      </div>

      <div className="coitainerProductDetails">
        <div>
          <Line />
          <div className="containerInformationsProduct">
            <Details
              title={"Rating"}
              description={products ? products.rating.rate : ""}
            />
            <Details
              title={"Rate"}
              description={products ? products.rating.count : ""}
            />
          </div>
          <Line />
          <div className="containerInformationsProduct">
            <Details
              title={"Preço"}
              description={products ? products.price : ""}
            />
            <Details
              title={"Descrição"}
              description={products ? products.description : ""}
            />
          </div>
          <Line />
          <div className="containerInformationsProduct">
            <Details
              title={"Produto"}
              description={products ? products.title : ""}
            />
            <Details
              title={"Categoria"}
              description={products ? products.category : ""}
            />
          </div>
          <Line />
        </div>
      </div>
    </div>
  );
};

export default Product;
