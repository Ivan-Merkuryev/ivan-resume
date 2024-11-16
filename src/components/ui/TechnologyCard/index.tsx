import styles from "./TechnologyCard.module.sass";
interface stack {
  src: string;
  header: string;
  technology: string;
  isActive: boolean;
  onClick: () => void;
}
export function TechnologyCart({
  header,
  technology,
  src,
  isActive,
  onClick,
}: stack) {
  return (
    <div
      className={`${styles.cart} ${isActive ? styles.activeCart : ""}`}
      onClick={onClick}
    >
      <div className={styles.cartContent}>
        <img loading="lazy" className={styles.icon} src={src} alt={header} />
        <p className={styles.cartContentP}>{header}</p>
        <p className={styles.cartContentPS}>{technology}</p>
      </div>
    </div>
  );
}
