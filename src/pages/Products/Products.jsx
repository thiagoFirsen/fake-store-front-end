import { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import fetchData from "../../services/api";
import Input from "../../components/Input/Input";
import Search from "../../assets/Product/Search.svg";
import setaPraBaixo from "../../assets/Product/setaPraBaixo.svg";
import "./styles.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchData();
        setProducts(data);
      } catch (error) {
        console.error(`Erro ao buscar os produtos: ${error}`);
      }
    };
    fetchProducts();
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
        {products.map((product) => {
          return (
            <CardProduct
              key={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
