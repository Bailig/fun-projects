import debounce from "lodash.debounce";
import { useEffect, useState } from "react";

export const useScrollY = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleWindowScroll = debounce(() => {
      if (window.scrollY >= window.innerHeight / 2) return;
      setScrollY(window.scrollY);
    }, 15);

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return { scrollY };
};
