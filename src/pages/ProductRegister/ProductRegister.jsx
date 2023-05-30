import "./style.css";
import InputSemBotao from "../../components/InputSemBotao/InputSemBotao";
import Select from "../../components/Select/Select";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { getCategories } from "../../services/products";

const ProductRegister = () => {
  const [categories, setCategories] = useState();
  useState(() => {
    getCategories()
      .then((response) => setCategories(response))
      .catch((error) => console.log(error));
  }, []);
  const filtredOptionsCategories = categories?.map((category, index) => (
    <option key={index}>{category}</option>
  ));

  return (
    <div className=" registerProductCointainer main">
      <h1>Cadastro de novo Produto</h1>
      <form action="" className="formRegisterProduct">
        <InputSemBotao label={"Título"} />
        <InputSemBotao label={"Preço"} />
        <TextArea label={"Descrição"} />
        <label htmlFor="Categoria" className="customizeLabel">
          Categoria
          <Select
            id="Categoria"
            select="Selecione a Categoria"
            children={filtredOptionsCategories}
          />
        </label>
        <InputSemBotao label={"URL imagem"} />
        <div className="coitainerButtons">
          <Button text={"Cancelar"} />
          <Button text={"Cadastrar"} background={"#C1DCDC"} />
        </div>
      </form>
    </div>
  );
};

export default ProductRegister;
