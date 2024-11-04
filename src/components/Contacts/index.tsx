import { useRef } from "react";
import styles from "./Contacts.module.sass";
import { motion, useInView } from "framer-motion";

export function Contacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const contactsArr = [
    { icon: "./IconAddress.svg", value: "Санкт-Петербург" },
    {
      icon: "./IconGit.svg",
      value: "Ivan-Merkuryev",
      link: "https://github.com/Ivan-Merkuryev",
    },
    {
      icon: "./IconEmail.svg",
      value: "merkuryevii@yandex.ru",
      link: "mailto:merkuryevii@yandex.ru",
    },
    {
      icon: "./IconTelegram.svg",
      value: "@m_e_r_k_u_r_y_i",
      link: "https://t.me/m_e_r_k_u_r_y_i",
    },
  ];

  return (
    <address className={styles.contacts}>
      {contactsArr.map((el, index) => (
        <motion.div
          key={index}
          className={styles.contact}
          style={{
            transform: isInView ? "none" : "translateX(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          ref={ref}
        >
          <a href={el.link} target="_blank" className={styles.link}>
            <img src={el.icon} alt="" />
            <p>{el.value}</p>
          </a>
        </motion.div>
      ))}
    </address>
  );
}
