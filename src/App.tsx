import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Carousel } from "./components/Carousel";
import { Contacts } from "./components/Contacts";
import { Header } from "./components/Header";
import { Technologies } from "./components/Technologies";
import styles from "./Home.module.sass";
import { Element } from "react-scroll";
import debounce from "lodash.debounce";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = debounce(() => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
          setActiveSection(section.id);
        }
      });
    }, 0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header activeSection={activeSection} />
      <main className={styles.main}>
        <Element name="about">
          <section id="about">
            <Banner />
            <About />
          </section>
        </Element>

        <Element name="projects">
          <section id="projects">
            <h2 className={styles.h2}>Мои проекты</h2>
            <Carousel />
          </section>
        </Element>

        <Element name="stack">
          <section id="stack">
            <h2 className={styles.h2}>Стек технологий</h2>
            <Technologies />
          </section>
        </Element>

        <Element name="contacts">
          <section id="contacts">
            <h2 className={styles.h2}>Контакты</h2>
            <Contacts />
          </section>
        </Element>
      </main>
    </>
  );
}
export default App;
