import { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import { getProducts } from "../../services/products";
import Input from "../../components/Input/Input";
import Search from "../../assets/Product/Search.svg";
import setaPraBaixo from "../../assets/Product/setaPraBaixo.svg";
import "./styles.css";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Products = () => {
  const [products, setProducts] = useState();
  const [productsFilter, setProductsFilter] = useState();
  const [filteredProducts, setFilteredProducts] = useState();

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
        setFilteredProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearchInput = (event) => setProductsFilter(event.target.value);

  const handleSearchButton = () => {
    const normalizedFilter = productsFilter.toLowerCase();
    const productsFound = products.filter((product) => {
      return product.title.toLowerCase().includes(normalizedFilter);
    });
    setFilteredProducts(productsFound);
  };

  return (
    <div className="containerProducts">
      <div className="containerInputs">
        <Input
          type="text"
          placeholder="Procurando por algum produto?"
          img={Search}
          onChange={handleSearchInput}
          onClick={handleSearchButton}
        />
        <Input
          type="text"
          placeholder="Selecione a categoria"
          img={setaPraBaixo}
        />
      </div>
      <h1>Products</h1>
      {products ? (
        <div className="containerCardProduct">
          {filteredProducts?.map((product) => {
            return (
              <Link to={`/Products/${product.id}`}>
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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Products;
