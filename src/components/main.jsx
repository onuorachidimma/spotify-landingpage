import PopularArtists from "./popularArtists";
import PopularAlbums from "./popularAlbums";
import PopularRadio from "./popularRadio";
import FeaturedCharts from "./feauturedCharts";
import SpotifyPlaylists from "./spotifyPlaylists";
import Footer from "./footer";
import NavBar from "./navbar";
import Headings from "./headings";
const Main = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Headings heading="Popular artists" showAll="Show all" />

        <PopularArtists />
      </div>
      <div>
        <Headings heading="Popular albums" showAll="Show all" />

        <PopularAlbums />
      </div>
      <div>
        <Headings heading="Popular radio" showAll="Show all" />

        <PopularRadio />
      </div>
      <div>
        <Headings heading="Featured Charts" showAll="Show all" />

        <FeaturedCharts />
      </div>
      <div>
        <Headings heading="Spotify Playlists" showAll="Show all" />

        <SpotifyPlaylists />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
