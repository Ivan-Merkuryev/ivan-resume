import styles from "./Banner.module.sass";

export function Banner() {
  return (
    <div className={styles.banner}>
      <link rel="preload" href="./photo.webp" as="image" />
      <div className="flex justify-center">
        <img
          className={styles.bannerImg}
          src="./photo.webp"
          alt="Иван Меркурьев"
          style={{ width: "308px", height: "462px" }}
        />
      </div>
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerH1}>
          <span>Иван</span>
          <span className="text-primary block pb-2">Меркурьев</span>
        </h1>
        <span className={styles.bannerContentDescription}>
          Fullstack JavaScript разработчик
        </span>
      </div>
    </div>
  );
}
