import { useState } from "react";
import { TechnologyCart } from "../TechnologyCard";
import Markdown from "react-markdown";
import styles from "./Technologies.module.sass";
import { motion } from "framer-motion";

export function Technologies() {
  const tech = [
    {
      src: "./monitor.svg",
      header: "Frontend",
      technology: "Next.js, React, Vue.js, sass, tailwindcss, css, HTML, Figma",
    },
    {
      src: "./back-monitor.svg",
      header: "Backend",
      technology: "NestJS, Express, DB: PostgreSQL, MongoDB, ORM: prisma",
    },
    {
      src: "./code.svg",
      header: "Technologies",
      technology: "TypeScript, JavaScript, git, Docker, Nginx",
    },
  ];

  const front = `\n\n**Next.js:** Умею создавать серверные и клиентские компоненты, оптимизировать SEO, использовать возможности layout и middleware. 
  \n\n**React:** Обладаю опытом разработки веб-приложений. Есть опыт работы управления состоянием с помощью **Redux** и Context. Для общения с бэкендом использую **TanStack Query**, а также fetch и axios.
  \n\n**Vue.js:** Знаком с основами Vue3 и его экосистемой, включая **Vue Router**, **Pinia** и **Vuex**. Умею создавать реактивные интерфейсы и использовать компоненты для организации кода.
  \n\n**Вёрстка:** Использую Sass и tailwindcss для организации стилей. Стараюсь писать чистый и понятный HTML, применяю теги согласно семантике, адаптирую под все устройства и браузеры. Владею Pixel Perfect вёрсткой по макетам. Люблю делать анимации с **framer-motion**. Работал с Библиотеками ui компонентов, такими как **Material-UI**.`;
  const back = `
    \n\n**NestJS:** Умею создавать масштабируемые и модульные приложения используя NestJS, применяя его архитектурные принципы (например, модульность). Использую декораторы, такие как @Controller(), @Get(), @Post().
    \n\n**Express:** Умею создавать маршруты для обработки HTTP-запросов, использовать встроенные и собственные middleware.
    \n\n**DB:** Использую ORM для работы с PostgreSQL — **Prisma**, а для mongoDB — **mongoose**.`;
  const stack = `
    \n\n**TypeScript:** Умею работать с базовыми типами (number, string, boolean и др.) и сложными типами (array, enum). 
    \n\n**JavaScript:** Применяю современные возможности возможности языка (в их числе стрелочные функции, асинхронность, деструктуризация и др.) 
    \n\n**Git:** Использую git для контроля версий и загрузки кода на github.
    \n\n**Docker и Nginx:** Знаком с базовыми настройками.`;

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.technologies}>
        {tech.map((el, index) => (
          <TechnologyCart
            key={index}
            src={el.src}
            header={el.header}
            technology={el.technology}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div className={styles.aboutTech}>
        <p className={styles.aboutTechP}>Подробнее:</p>
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeIndex === 0 && <Markdown>{front}</Markdown>}
          {activeIndex === 1 && <Markdown>{back}</Markdown>}
          {activeIndex === 2 && <Markdown>{stack}</Markdown>}
        </motion.div>
      </div>
    </div>
  );
}
