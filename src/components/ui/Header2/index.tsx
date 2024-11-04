import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./H.module.sass";

export function Header2({ h }: { h: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  
  return (
    <motion.h2
      className={styles.h}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
      ref={ref}
    >
      {h}
    </motion.h2>
  );
}
