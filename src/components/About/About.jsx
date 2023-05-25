import "./styles.css";
import Title from "../Title/Title";
import CardAbout from "./CardAbout";
import box from "../../assets/Home/box.svg";
import plaint from "../../assets/Home/plaint.svg";
import phone from "../../assets/Home/phone.svg";

const About = () => {
  return (
    <div className="cointainerAbout">
      <div className="about">
        <Title
          title={"About us"}
          description={"Order now and appreciate the beauty of nature"}
        />
      </div>
      <div className="cointanerCard">
        <CardAbout
          img={plaint}
          title={"Large Assortment"}
          description={
            "we offer many different types of products with fewer variations in each category."
          }
        />
        <CardAbout
          img={box}
          title={"Fast & Free Shipping"}
          description={
            "4-day or less delivery time, free shipping and an expedited delivery option."
          }
        />
        <CardAbout
          img={phone}
          title={"24/7 Support"}
          description={
            "answers to any business related inquiry 24/7 and in real-time."
          }
        />
      </div>
    </div>
  );
};

export default About;
