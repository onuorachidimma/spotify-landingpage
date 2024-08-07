import List from "./list";
import styles from "./main.module.css";
import featuredCharts1 from "../assets/images/featuredCharts1.jpg";
import featuredCharts2 from "../assets/images/featuredCharts2.jpg";
import featuredCharts3 from "../assets/images/featuredCharts3.jpg";
import featuredCharts4 from "../assets/images/featuredCharts4.jpg";
import featuredCharts5 from "../assets/images/featuredCharts5.jpg";
import featuredCharts6 from "../assets/images/featuredCharts6.jpg";

const charts = [
  { src: featuredCharts1, name: "Rema", role: "Radio" },
  { src: featuredCharts2, name: "Asake", role: "Radio" },
  { src: featuredCharts3, name: "Burna Boy", role: "Radio" },
  { src: featuredCharts4, name: "Olamide", role: "Radio" },
  { src: featuredCharts5, name: "Victony", role: "Radio" },
  { src: featuredCharts6, name: "Young Jonn", role: "Radio" },
  // { src: featuredCharts7, name: "Ruger", role: "Radio" },
];

const FeaturedCharts = () => {
  return <List items={charts} variant="NotPopularArtist" />;
};

export default FeaturedCharts;
