import "./styles.css";
import Title from "../Title/Title";
import CardProduct from "../CardProduct/CardProduct";
import ArrowRight from "../../assets/Home/ArrowRight.svg";

const Categories = () => {
  return (
    <div className="coitainerCategories">
      <Title
        title={"Categories"}
        description={"Find what you are looking for"}
      />
      <div className="cointanerCardCategories">
        <CardProduct img={"Teste"} title={"Natural Plants"} />
        <CardProduct
          img={"Teste"}
          title={"Plant Accessories"}
          price={"Horem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <CardProduct img={"Teste"} title={"Artificial Plants"} />
      </div>
      <button id="buttonCategories">
        Explore <img src={ArrowRight} alt="" />
      </button>
    </div>
  );
};

export default Categories;
