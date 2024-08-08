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
  { src: popularRadio1, name: "Mohbad Radio", radio: "With Zlatan, T.I BLAZE, Bella Shmurda and more" },
  { src: popularRadio2, name: "Omah Lay Radio", radio: "With Victony, Joeboy, Bella Shmurda and more" },
  { src: popularRadio3, name: "Seyi Vibez Radio", radio: "With Balloranking, BhadBoi OML, Barry Jhay and more" },
  { src: popularRadio4, name: "Ayo Maff Radio", radio: "With Rybeena, Cazulee, Muyeez and more" },
  { src: popularRadio5, name: "Asake Radio", radio: "With Seyi Vibez, Young Jonn, Bnxn and more" },
  { src: popularRadio6, name: "Tml Vibez Radio", radio: "With Muyeez, Vibez Inc, Billion Solar and more" },
  // { src: popularRadio7, name: "Ruger", role: "Radio" },
];

const PopularRadio = () => {
  return <List items={radio} variant="NotPopularArtist" />;
};

export default PopularRadio;
