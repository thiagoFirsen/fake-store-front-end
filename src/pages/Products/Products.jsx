import { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import { getProducts, getCategories } from "../../services/products";
import Input from "../../components/Input/Input";
import Search from "../../assets/Product/Search.svg";
import "./styles.css";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Select from "../../components/Select/Select";

const Products = () => {
  const [products, setProducts] = useState();
  const [productsFilter, setProductsFilter] = useState();
  const [filteredProducts, setFilteredProducts] = useState();

  const [categories, setCategories] = useState();
  const [categoriesFilter, setCategoriesFilter] = useState();
  const [filteredCategories, setFilteredCategories] = useState();

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
    if (categoriesFilter === "Procure por Categoria") {
      setFilteredProducts(products);
    } else if (categoriesFilter) {
      const productsFound = products.filter((product) => {
        return product.category === categoriesFilter;
      });
      setFilteredProducts(productsFound);
    }
  }, [categoriesFilter]);

  const handleSearchInput = (event) => setProductsFilter(event.target.value);
  const handleSelectChange = (event) => {
    setCategoriesFilter(event.target.value);
    setFilteredCategories(categoriesFilter);
  };

  const handleSearchButton = () => {
    const normalizedFilter = productsFilter.toLowerCase();
    const productsFound = products.filter((product) => {
      return product.title.toLowerCase().includes(normalizedFilter);
    });
    setFilteredProducts(productsFound);
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
      <h1>Products</h1>
      {products ? (
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
