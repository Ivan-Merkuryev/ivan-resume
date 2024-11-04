import clsx from "clsx";
import styles from "./Header.module.sass";
import { Link } from "react-scroll";
export function Header({ activeSection }: { activeSection: string }) {
  const menu = [
    { name: "Обо мне", link: "about" },
    { name: "Проекты", link: "projects" },
    { name: "Стек", link: "stack" },
    { name: "Контакты", link: "contacts" },
  ];
  return (
    <header>
      <nav className={styles.nav}>
        <ul className={styles.navUl}>
          {menu.map((el, index) => (
            <li key={index}>
              <Link
                className={clsx(styles.navUlA, {
                  [styles.active]: activeSection === el.link,
                })}
                to={el.link}
                smooth={true}
                duration={300}
              >
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
