import { useState } from "react";
import { TechnologyCart } from "../TechnologyCard";
import Markdown from "react-markdown";
import styles from "./Technologies.module.sass";

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
      technology: "TypeScript, JavaScript, git",
    },
  ];

  const front =
    "\n\n**Next.js:** Умею создавать серверные и статические приложения, используя возможности маршрутизации и API маршрутов. Знаю, как оптимизировать производительность и использовать статическую генерацию (SSG) и серверный рендеринг (SSR). \n\n**React:** Обладаю опытом разработки компонентов с использованием хуков и контекста. Умею управлять состоянием с помощью Redux или Context API, а также интегрировать сторонние библиотеки. \n\n**Vue.js:** Знаком с основами Vue и его экосистемой, включая Vue Router и Vuex. Умею создавать реактивные интерфейсы и использовать компоненты для организации кода.\n\n**Figma:** Умею разрабатывать прототипы и макеты интерфейсов, работая с компонентами и стилями. Знаю, как взаимодействовать с командой дизайнеров для реализации UX/UI решений.\n\n**Sass:** Использую Sass для организации стилей, включая вложенность, переменные и миксины. Это позволяет мне писать более чистый и поддерживаемый CSS.";
  const back =
    "\n\n**NestJS:** Умею создавать масштабируемые и модульные приложения с использованием NestJS, применяя его архитектурные принципы (например, модульность, инъекцию зависимостей).\n\n**Express** что-то\n\n**DB** Использую Prisma как ORM для работы с PostgreSQL, а mongoose для mongoDB";
  const stack =
    "\n\n**TypeScript:** Использую статическую типизацию. \n\n**JavaScript:** Применяю современные возможности возможности (в их числе стрелочные функции, асинхронность, деструктуризация и др.) \n\n**Git:** Использую git для контроля версий, для загрузки кода на github и деплоя.";
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
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
        {activeIndex === 0 && <Markdown>{front}</Markdown>}
        {activeIndex === 1 && <Markdown>{back}</Markdown>}
        {activeIndex === 2 && <Markdown>{stack}</Markdown>}
      </div>
    </div>
  );
}
