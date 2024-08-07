import Card from "./card";
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
  return (
    <div>
      <div className={styles.mainSectionsContainer}>
        {artists.map((artist, index) => (
          <div
            key={index}
            className={`${styles.variantContainer} ${
              styles[`item${index + 1}`]
            }`}
          >
            <Card variant="popularArtist">
              <img
                src={artist.src}
                alt={artist.name}
                className={styles.artistsImages}
              />
              <p>{artist.name}</p>
              <p>{artist.role}</p>
              <div className={styles.playIcon}>
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="Svg-sc-ytk21e-0 bneLcE"
                >
                  <path
                    d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"
                    fill="#000"
                  ></path>
                </svg>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PopularArtists;
