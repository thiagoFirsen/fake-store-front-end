import { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import { getProducts } from "../../services/products";
import Input from "../../components/Input/Input";
import Search from "../../assets/Product/Search.svg";
import setaPraBaixo from "../../assets/Product/setaPraBaixo.svg";
import "./styles.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="containerProducts">
      <div className="containerInputs">
        <Input
          type="text"
          placeholder="Procurando por algum produto?"
          img={Search}
        />
        <Input
          type="text"
          placeholder="Selecione a categoria"
          img={setaPraBaixo}
        />
      </div>
      <h1>Products</h1>
      <div className="containerCardProduct">
        {products?.map((product) => {
          return (
            <Link to={`/Products/${product.id}`}>
              <CardProduct
                key={product.id}
                img={product.image}
                title={product.title}
                price={product.price}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
