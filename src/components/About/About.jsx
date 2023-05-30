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
          title={"Sobre Nós"}
          description={
            "Compre agora e aprecie a beleza da natureza através dos seus produtos de moda e eletrônicos favoritos."
          }
        />
      </div>
      <div className="cointanerCard">
        <CardAbout
          img={plaint}
          title={"Produtos Sustentáveis"}
          description={
            "Oferecemos uma enorme variedade de produtos, além de serem produtos ecológicos."
          }
        />
        <CardAbout
          img={box}
          title={"Frete rápido e gratuito"}
          description={
            "Prazo de entrega de 4 dias ou menos, frete grátis e opção de entrega acelerada."
          }
        />
        <CardAbout
          img={phone}
          title={"24/7 Support"}
          description={
            "Respostas a qualquer consulta relacionada a negócios 24 horas por dia, 7 dias por semana e em tempo real."
          }
        />
      </div>
    </div>
  );
};

export default About;
