import styles from "./widgets.module.sass";

import { Carousel } from "../components/Carousel";
import { Header2 } from "../components/ui/Header2";

export default function ProjectsWidget() {
  return (
    <section className={styles.section} id="projects">
      <Header2 h="Мои проекты" />
      <Carousel />
    </section>
  );
}
