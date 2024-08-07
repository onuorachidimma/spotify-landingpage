import List from "./list";
import styles from "./main.module.css";
import spotifyPlaylists1 from "../assets/images/spotifyPlaylists1.jpeg";
import spotifyPlaylists2 from "../assets/images/spotifyPlaylists2.jpeg";
import spotifyPlaylists3 from "../assets/images/spotifyPlaylists3.jpeg";
import spotifyPlaylists4 from "../assets/images/spotifyPlaylists4.jpeg";
import spotifyPlaylists5 from "../assets/images/spotifyPlaylists5.jpeg";
import spotifyPlaylists6 from "../assets/images/spotifyPlaylists6.jpeg";

const spotify = [
  { src: spotifyPlaylists1, name: "Rema", role: "Radio" },
  { src: spotifyPlaylists2, name: "Asake", role: "Radio" },
  { src: spotifyPlaylists3, name: "Burna Boy", role: "Radio" },
  { src: spotifyPlaylists4, name: "Olamide", role: "Radio" },
  { src: spotifyPlaylists5, name: "Victony", role: "Radio" },
  { src: spotifyPlaylists6, name: "Young Jonn", role: "Radio" },
  // { src: spotifyPlaylists7, name: "Ruger", role: "Radio" },
];

const SpotifyPlaylists = () => {
  return <List items={spotify} variant="NotPopularArtist" />;
};

export default SpotifyPlaylists;
