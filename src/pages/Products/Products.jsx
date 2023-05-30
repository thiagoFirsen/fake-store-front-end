import { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import { getProducts, getCategories } from "../../services/products";
import Input from "../../components/Input/Input";
import Search from "../../assets/Product/Search.svg";
import noProduct from "../../assets/Product/no-product.png";

import "./styles.css";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Select from "../../components/Select/Select";

const Products = () => {
  const [products, setProducts] = useState();
  const [searchedProduct, setSearchedProduct] = useState();
  const [filteredProducts, setFilteredProducts] = useState();

  const [categories, setCategories] = useState();

  const [categorySelected, setCategorySelected] = useState(
    "Procure por Categoria"
  );

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

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let productsFound;
    if (searchedProduct) {
      const normalizedFilter = searchedProduct?.toLowerCase();
      productsFound = products?.filter((product) => {
        return product.title.toLowerCase().includes(normalizedFilter);
      });
    } else {
      productsFound = products;
    }

    categorySelected === "Procure por Categoria"
      ? setFilteredProducts(productsFound)
      : setFilteredProducts(
          productsFound?.filter(
            (product) => product.category === categorySelected
          )
        );
  }, [categorySelected]);

  const handleSearchInput = (event) => setSearchedProduct(event.target.value);
  const handleSelectChange = (event) => {
    setCategorySelected(event.target.value);
  };

  const handleSearchButton = () => {
    const normalizedFilter = searchedProduct.toLowerCase();
    const productsFound = products?.filter((product) => {
      return product.title.toLowerCase().includes(normalizedFilter);
    });
    categorySelected === "Procure por Categoria"
      ? setFilteredProducts(productsFound)
      : setFilteredProducts(
          productsFound.filter((product) => {
            return product.category === categorySelected;
          })
        );
  };

  const filtredOptionsCategories = categories?.map((category, index) => (
    <option key={index}>{category}</option>
  ));

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
        <Select
          id="selectCategories"
          name="Categories"
          select="Procure por Categoria"
          children={filtredOptionsCategories}
          onChange={handleSelectChange}
        />
      </div>
      <h1>Produtos</h1>

      {filteredProducts?.length === 0 ? (
        <h1 id="imgNoProduct">
          <img src={noProduct} />
        </h1>
      ) : products ? (
        <div className="containerCardProduct main">
          {filteredProducts?.map((product) => {
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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Products;
