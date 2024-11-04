import { useRef } from "react";
import styles from "./Cart.module.sass";
import { motion, useScroll } from "framer-motion";

interface IProject {
  src: string;
  title: string;
  link: string;
  technologies: string;
}

export function Cart({ src, title, link, technologies }: IProject) {

  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["-3 1", "1 1"]
  })

  return (
    <motion.div ref={ref} style={{scale: scrollYProgress, opacity: scrollYProgress}} className={styles.cart}>
      <a href={link} target="_blank">
        <div>
          <img src={src} className={styles.bg} alt="" />
        </div>
        <div className={styles.content}>
          <p className={styles.name}>{title}</p>
          <p>{technologies}</p>
        </div>
      </a>
    </motion.div>
  );
}
