import styles from "./About.module.sass";

export function About() {
  return (
    <div className={styles.about}>
      <p className={styles.p}>
        Привет! Я fullstack-разработчиком с более чем двухлетним опытом создания
        веб-приложений. В своей работе я стремлюсь к тому, чтобы взаимодействие
        пользователя с приложениями было максимально комфортным и эффективным.
        Вот некоторые из моих проектов, используемые технологии и контактная
        информация.
      </p>
      <div>
        <a className={styles.button} href="../ivan_merkurev_resume.pdf" download>
          <svg
            width="28px"
            height="28px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          Сохранить резюме
        </a>
      </div>
    </div>
  );
}