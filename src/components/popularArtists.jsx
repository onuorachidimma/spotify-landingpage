import Card from "./card";
import List from "./list";
import styles from "./main.module.css";
import popularArtist1 from "../assets/images/popularArtist1.jpeg";
import popularArtist2 from "../assets/images/popularArtist2.jpeg";
import popularArtist3 from "../assets/images/popularArtist3.jpeg";
import popularArtist4 from "../assets/images/popularArtist4.jpeg";
import popularArtist5 from "../assets/images/popularArtist5.jpeg";
import popularArtist6 from "../assets/images/popularArtist6.jpeg";
import popularArtist7 from "../assets/images/popularArtist7.jpeg";
import Footer from "./footer";

const artists = [
  { src: popularArtist1, name: "Rema", role: "Artist" },
  { src: popularArtist2, name: "Asake", role: "Artist" },
  { src: popularArtist3, name: "Burna Boy", role: "Artist" },
  { src: popularArtist4, name: "Olamide", role: "Artist" },
  { src: popularArtist5, name: "Victony", role: "Artist" },
  { src: popularArtist6, name: "Young Jonn", role: "Artist" },
  // { src: popularArtist7, name: "Ruger", role: "Artist" },
];

const PopularArtists = () => {
  return <List items={artists} variant="popularArtist" />;
};

export default PopularArtists;
