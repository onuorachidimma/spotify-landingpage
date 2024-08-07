import Card from "./card";
import List from "./list";
import styles from "./main.module.css";
import popularRadio1 from "../assets/images/popularRadio1.jpeg";
import popularRadio2 from "../assets/images/popularRadio2.jpeg";
import popularRadio3 from "../assets/images/popularRadio3.jpeg";
import popularRadio4 from "../assets/images/popularRadio4.jpeg";
import popularRadio5 from "../assets/images/popularRadio5.jpeg";
import popularRadio6 from "../assets/images/popularRadio6.jpeg";
// import popularRadio7 from "../assets/images/popularRadio7.jpeg";
import Footer from "./footer";

const radio = [
  { src: popularRadio1, name: "Rema", role: "Radio" },
  { src: popularRadio2, name: "Asake", role: "Radio" },
  { src: popularRadio3, name: "Burna Boy", role: "Radio" },
  { src: popularRadio4, name: "Olamide", role: "Radio" },
  { src: popularRadio5, name: "Victony", role: "Radio" },
  { src: popularRadio6, name: "Young Jonn", role: "Radio" },
  // { src: popularRadio7, name: "Ruger", role: "Radio" },
];

const PopularRadio = () => {
  return <List items={radio} variant="NotPopularArtist" />;
};

export default PopularRadio;
