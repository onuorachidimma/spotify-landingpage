import PopularArtists from "./popularArtists"
import PopularAlbums from "./popularAlbums"
import PopularRadio from "./popularRadio"
import FeaturedCharts from "./feauturedCharts"
import SpotifyPlaylists from "./spotifyPlaylists"
import Footer from "./footer"
const Main = () => {
    return(
        <div>
            <PopularArtists />
            <PopularAlbums />
            <PopularRadio />
            <FeaturedCharts />
            <SpotifyPlaylists />
            <Footer />
        </div>
    )
}

export default Main