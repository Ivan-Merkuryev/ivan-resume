import { lazy } from "react";

import styles from "./Home.module.sass";
import { Element } from "react-scroll";
import { Header } from "./components/Header";
import { useActiveSection } from "./hooks/useActiveSection";

const BannerWidget = lazy(() => import("./widgets/banner"));
const StackWidget = lazy(() => import("./widgets/stack"));
const ProjectsWidget = lazy(() => import("./widgets/projects"));
const ContactsWidget = lazy(() => import("./widgets/contacts"));
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