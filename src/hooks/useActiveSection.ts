import { useState, useEffect } from "react";
import throttle from 'lodash.throttle';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top + 280 < window.innerHeight) {
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
