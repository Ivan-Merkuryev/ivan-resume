import { useState, useEffect } from "react";
import throttle from 'lodash.throttle';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        if (sectionCenter >= 0 && sectionCenter < window.innerHeight) {
          setActiveSection(section.id);
        }
      });
    };

    const throttledHandleScroll = throttle(handleScroll, 220);
    
    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);
  return activeSection;
}