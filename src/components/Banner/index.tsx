import styles from "./Banner.module.sass";

export function Banner() {
  return (
    <div className={styles.banner}>
      <div className="flex justify-center">
        <img
          className={styles.bannerImg}
          src="./photo.webp"
          alt=""
          style={{ width: "308px", height: "462px" }}
        />
      </div>
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerH1}>
          <span>Иван</span>
          <span className="text-primary block pb-2">Меркурьев</span>
        </h1>
        <p className={styles.animation}>Fullstack JavaScript разработчик</p>
      </div>
    </div>
  );
}