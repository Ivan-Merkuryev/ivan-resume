import styles from "./Cart.module.sass";

interface IProject {
  src: string;
  title: string;
  // link: string;
  // description: string;
  technologies: string;
}

export function Cart({ src, title, technologies }: IProject) {
  return (
    <div className={styles.cart}>
      <div>
        <img src={src} className={styles.bg} alt="" />
      </div>
      <div className={styles.content}>
        <p className={styles.name}>{title}</p>
        <p>{technologies}</p>
      </div>
    </div>
  );
}
