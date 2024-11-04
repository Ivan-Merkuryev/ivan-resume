import { BannerWidget } from "./widgets/banner";
import { Header } from "./components/Header";
import styles from "./Home.module.sass";
import { Element } from "react-scroll";
import { ProjectsWidget } from "./widgets/projects";
import { StackWidget } from "./widgets/stack";
import { ContactsWidget } from "./widgets/contacts";
import { useActiveSection } from "./hooks/useActiveSection";

function App() {
  const activeSection = useActiveSection();
  return (
    <>
      <Header activeSection={activeSection} />
      <main className={styles.main}>
        <Element name="about">
          <BannerWidget />
        </Element>

        <Element name="projects">
          <ProjectsWidget />
        </Element>

        <Element name="stack">
          <StackWidget />
        </Element>

        <Element name="contacts">
          <ContactsWidget />
        </Element>
      </main>
    </>
  );
}
export default App;
