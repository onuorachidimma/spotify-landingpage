import List from "./list";
import styles from "./main.module.css";
import spotifyPlaylists1 from "../assets/images/spotifyPlaylists1.jpeg";
import spotifyPlaylists2 from "../assets/images/spotifyPlaylists2.jpeg";
import spotifyPlaylists3 from "../assets/images/spotifyPlaylists3.jpeg";
import spotifyPlaylists4 from "../assets/images/spotifyPlaylists4.jpeg";
import spotifyPlaylists5 from "../assets/images/spotifyPlaylists5.jpeg";
import spotifyPlaylists6 from "../assets/images/spotifyPlaylists6.jpeg";

const spotify = [
  { src: spotifyPlaylists1, name: "Viral Hits", playlist: "By Spotify" },
  { src: spotifyPlaylists2, name: "ChillHop", playlist: "By Spotify" },
  { src: spotifyPlaylists3, name: "Soft Pop Hits", playlist: "By Spotify" },
  { src: spotifyPlaylists4, name: "PHONK", playlist: "RBy Spotify" },
  { src: spotifyPlaylists5, name: "Jazz in the Background", playlist: "By Spotify" },
  { src: spotifyPlaylists6, name: "RapCaviar", playlist: "By SPotify" },
  // { src: spotifyPlaylists7, name: "Ruger", role: "Radio" },
];

const SpotifyPlaylists = () => {
  return <List items={spotify} variant="NotPopularArtist" />;
};

export default SpotifyPlaylists;
