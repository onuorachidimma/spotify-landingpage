import Card from "./card";
import styles from "./main.module.css";
import List from "./list";
import popularAlbum1 from "../assets/images/popularAlbum1.jpeg";
import popularAlbum2 from "../assets/images/popularAlbum2.jpeg";
import popularAlbum3 from "../assets/images/popularAlbum3.jpeg";
import popularAlbum4 from "../assets/images/popularAlbum4.jpeg";
import popularAlbum5 from "../assets/images/popularAlbum5.jpeg";
import popularAlbum6 from "../assets/images/popularAlbum6.jpeg";
// import popularAlbum7 from "../assets/images/popularAlbum7.jpeg";
import Footer from "./footer";

const albums = [
  { src: popularAlbum1, name: "Ikigai / 生き甲斐, Vol. 1", album: "Olamide" },
  { src: popularAlbum2, name: "Loseyi Professor", album: "Seyi Vibes" },
  { src: popularAlbum3, name: "HEIS", album: "Rema" },
  { src: popularAlbum4, name: "Jiggy Forever", album: "Young Jonn" },
  { src: popularAlbum5, name: "Work Of Art", album: "Asake" },
  { src: popularAlbum6, name: "Stubborn", album: "Victony" },
  // { src: popularArtist7, name: "Ruger", role: "Artist" },
];

const PopularAlbums = () => {
    return <List items={albums} variant="NotPopularArtist" />;
};

export default PopularAlbums;
