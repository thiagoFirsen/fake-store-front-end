import BestSelling from "../../components/BestSelling/BestSelling";
import AboutUs from "../../components/About/About";
import Categories from "../../components/Categories/Categories";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <BestSelling />
      <AboutUs />
      <Categories />
    </div>
  );
};

export default Home;
