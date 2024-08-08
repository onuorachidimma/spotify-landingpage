import List from "./list";
import styles from "./main.module.css";
import featuredCharts1 from "../assets/images/featuredCharts1.jpg";
import featuredCharts2 from "../assets/images/featuredCharts2.jpg";
import featuredCharts3 from "../assets/images/featuredCharts3.jpg";
import featuredCharts4 from "../assets/images/featuredCharts4.jpg";
import featuredCharts5 from "../assets/images/featuredCharts5.jpg";
import featuredCharts6 from "../assets/images/featuredCharts6.jpg";

const charts = [
  { src: featuredCharts1, name: "Top Songs - Global", chart: "Your weekly update of the most played tracks right now - Global." },
  { src: featuredCharts2, name: "Top Songs - USA", chart: "Your weekly update of the most played tracks right now - USA." },
  { src: featuredCharts3, name: "Top 50 - Global", chart: "Your daily update of the most played tracks right now - Global." },
  { src: featuredCharts4, name: "Top 50 - USA", chart: "Your daily update of the most played tracks right now - USA." },
  { src: featuredCharts5, name: "Viral 50 - Global", chart: "Your daily update of the most viral tracks right now - Global." },
  { src: featuredCharts6, name: "Viral 50 - USA", chart: "Your daily update of the most viral tracks right now - USA." },
  // { src: featuredCharts7, name: "Ruger", role: "Radio" },
];

const FeaturedCharts = () => {
  return <List items={charts} variant="NotPopularArtist" />;
};

export default FeaturedCharts;
