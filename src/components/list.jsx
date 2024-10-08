import Card from "./card";
import styles from "./main.module.css";

const List = ({ items, variant, itemClass }) => {
  return (
    <div className={styles.mainSectionsContainer}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.variantContainer} ${styles[`item${index + 1}`]} ${itemClass}`}
        >
          <Card variant={variant}>
            <img
              src={item.src}
              alt={item.name}
              className={styles.artistsImages}
            />
            <p className={styles.category}>{item.name}</p>
            <p className={styles.categoryName}>{item.role || item.album || item.radio || item.chart || item.playlist}</p>
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
  );
};

export default List;
