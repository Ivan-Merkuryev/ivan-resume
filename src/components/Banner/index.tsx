import styles from "./Banner.module.sass";

export function Banner() {
  const text = "Fullstack JavaScript разработчик";
  return (
    <div className={styles.banner}>
      <div className="flex justify-center">
        <img className={styles.bannerImg} src="./photo.webp" alt="" />
      </div>
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerH1}>
          <span>Иван</span>
          <span className="text-primary block pb-2">Меркурьев</span>
        </h1>
        <span className="block text-xl">{text}</span>
      </div>
    </div>
  );
}
