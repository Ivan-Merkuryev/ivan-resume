// import { Contacts } from "../Contacts";
import styles from "./About.module.sass";

export function About() {
  return (
    <div className={styles.about}>
      <p className={styles.p}>
        Привет! Я fullstack-разработчик с более чем двухлетним опытом в создании
        веб-приложений. Я всегда стремлюсь сделать взаимодействие с приложениями
        максимально приятным для пользователей. Ниже представлены мои проекты,
        стек технологий и контакты.
      </p>
      <div>
        <a className={styles.button} href="../photo.webp" download>
          Скачать резюме в pdf
        </a>
      </div>
    </div>
  );
}
