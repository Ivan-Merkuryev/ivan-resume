import styles from "./widgets.module.sass";

import { Banner } from "../components/Banner";
import { About } from "../components/About";

export default function BannerWidget() {
  return (
    <section className={styles.section} id="about">
      <Banner />
      <About />
    </section>
  );
}
