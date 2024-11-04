import styles from "./widgets.module.sass";

import { Header2 } from "../components/ui/Header2";
import { Technologies } from "../components/Technologies";

export default function StackWidget() {
  return (
    <section className={styles.section} id="stack">
      <Header2 h="Стек технологий" />
      <Technologies />
    </section>
  );
}
