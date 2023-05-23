import "./styles.css";
import CardProduct from "../CardProduct/CardProduct";
import ArrowRight from "../../assets/Home/ArrowRight.svg";

const BestSelling = () => {
  return (
    <div className="containerBestSelling">
      <div className="descriptionBestSelling">
        <h1>Best Selling Plants</h1>
        <h2>Easiest way to healthy life by buying your favorite plants </h2>
        <button>
          See more <img src={ArrowRight} alt="" />{" "}
        </button>
      </div>
      <CardProduct
        img={"Vazio"}
        title={"Natural Plants"}
        price={"₱ 1,400.00"}
      />
      <CardProduct
        img={"Vazio"}
        title={"Natural Plants"}
        price={"₱ 1,400.00"}
      />
      <CardProduct
        img={"Vazio"}
        title={"Natural Plants"}
        price={"₱ 1,400.00"}
      />
    </div>
  );
};

export default BestSelling;
