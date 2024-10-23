import { Swiper, SwiperSlide } from "swiper/react";
import { Cart } from "../Cart";
import styles from "./Carousel.module.sass";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { SetStateAction, useState } from "react";
import Markdown from "react-markdown";
import { motion } from "framer-motion";
const afData = [
  {
    src: "../festival.webp",
    title: "Сайт фестиваля",
    link: "https://www.rimsky-korsakov-wind.ru/",
    description: `
* Создал сайт, пройдя все этапы разработки вплоть до его размещения на веб-сервере. 
* Реализовал хук, который позволяет отображать изображения с учетом их характеристик, что обеспечивает загрузку фото без скачков при рендеринге страницы.
* Используя разметку Markdown, разрабатываю динамические страницы для участников и афиши, обеспечивая их удобное отображение.`,
    technologies: "Typescript, React, Redux, Framer-motion, sass, tailwindcss",
  },
  {
    src: "../kanban.webp",
    title: "Доска задач",
    link: "https://github.com/Ivan-Merkuryev/kanban",
    description: `
* В качестве фронтенд фреймворка выбрал Next.js. Благодаря нему удобно работал с маршрутизацией и разграничением доступа пользователей с разными ролями.
* JWT обеспечил безопасный механизм авторизации, позволяя пользователям регистрироваться и входить в систему без необходимости хранения сессий на сервере.
* С помощью PostgreSQL реализовал возможность создания задач, их резервирования и написания отчётов к ним. Пользователи также могут оценивать выполнение задач с помошью компонента rating из Material UI.
* Создал UI компонент выбора направления задачи.
* Все формы в приложении находятся под присмотром react-hook-form, с помощью которого происходит проверка введённых данных.
\n [Код проекта](https://github.com/Ivan-Merkuryev/kanban).`,
    technologies:
      "Typescript, Next.js, Redux, sass, tailwindcss, Material UI, NestJS, PostgreSQL, Prisma",
  },
  {
    src: "../art.webp",
    title: "Платформа для художников",
    link: "https://art-ai86.onrender.com/",
    description: `
* Разработал функционал регистрации и авторизации через JWT токен. Это обеспечило безопасный доступ к учетным записям пользователей, улучшив уровень защиты данных и позволив пользователям сохранять свои сессии.
* Создал удобный интерфейс добавления постов и товаров, используя React и axios на клиентской стороне, а на серверной стороне — multer.  
* Интегрировал Framer Motion, React Markdown и Material UI для создания интерактивного и визуально привлекательного пользовательского интерфейса.
\n Это тестовый проект, буду мигрировать его на Next.js и NestJS.
\n Ознакомиться с кодом можно на моём github: [backend](https://github.com/Ivan-Merkuryev/mern-backend), [frontend](https://github.com/Ivan-Merkuryev/mern-client).
    `,
    technologies:
      "JavaScript, React, Material UI, sass, framer-motion, axios, Express, mongoDB, mongoose, multer",
  },
];

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper: {
    realIndex: SetStateAction<number>;
    activeIndex: SetStateAction<number>;
  }) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: "#btnPrev",
          nextEl: "#btnNext",
        }}
        loop={true}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        onSlideChange={handleSlideChange}
      >
        {afData.map((el, index) => (
          <SwiperSlide key={index}>
            <Cart
              link={el.link}
              src={el.src}
              title={el.title}
              technologies={el.technologies}
            ></Cart>
          </SwiperSlide>
        ))}
        <div className={styles.swiperNavCont}>
          <div className="swiper-pagination"></div>
          <button
            className={styles.btnPrev}
            id="btnPrev"
            style={{
              padding: "3px",
              cursor: "pointer",
              position: "relative",
              zIndex: 12,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12"
              />
            </svg>
          </button>
          <button
            className={styles.btnNext}
            id="btnNext"
            style={{
              padding: "3px",
              cursor: "pointer",
              position: "relative",
              zIndex: 12,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12"
              />
            </svg>
          </button>
        </div>
      </Swiper>
      <div className={styles.swiperContent}>
        <p className={styles.swiperContentP}>О проекте:</p>
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Markdown>{afData[activeIndex].description}</Markdown>
        </motion.div>
      </div>
    </div>
  );
}
