import { Swiper, SwiperSlide } from "swiper/react";
import { Cart } from "../Cart";
// import isTouchDevice from "is-touch-device";
// import afData from "../../afData.json";
import styles from "./Carousel.module.sass";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { SetStateAction, useState } from "react";
import Markdown from "react-markdown";
const afData = [
  {
    src: "../festival.webp",
    title: "Сайт фестиваля",
    link: "#",
    description:
      "**Первая сложность:** отображение динамических страниц участников - фотографии разного размера, текст с разными особенностями. \n\n**Решение** - использование markdown разметки. Создание кастомного хука для вычислния ширины и высоты фотографии для корректной отрисовки без «скачков».",
    technologies: "Typescript, React, Framer-motion, sass, tailwindcss",
  },
  {
    src: "../art.webp",
    title: "Платформа для художников",
    link: "#",
    // description: "Описание",
    technologies: "Typescript, React, Framer-motion, sass, tailwindcss",
  },
  // {
  //   src: "https://avatars.mds.yandex.net/i?id=c77d01c5f4104fcacb6940f5968cc700_l-5291751-images-thumbs&n=13",
  //   title: "Фестиваль",
  //   link: "#",
  //   // description: "Описание",
  //   technologies: "Typescript, React, Framer-motion, sass, tailwindcss",
  // },

  // {
  //   src: "https://avatars.mds.yandex.net/i?id=c77d01c5f4104fcacb6940f5968cc700_l-5291751-images-thumbs&n=13",
  //   title: "Фестиваль",
  //   link: "#",
  //   // description: "Описание",
  //   technologies: "Typescript, React, Framer-motion, sass, tailwindcss",
  // },
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
    <div>
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
            // className="btnPrev"
            id="btnPrev"
            style={{
              padding: "3px",
              // backgroundColor: "#ccc",
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
        <p className={styles.swiperContentP}>Сложности, с которыми я столкнулся и мои решения:</p>
        <Markdown>{afData[activeIndex].description}</Markdown>
      </div>
    </div>
  );
}
