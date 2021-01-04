import throttle from "lodash.throttle";
import { useEffect } from "react";

export const useScrolledToBottom = (onScrolledToBottom: () => void) => {
  useEffect(() => {
    const handleScrolledToBottom = throttle(() => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000;

      if (scrolledToBottom) {
        onScrolledToBottom();
      }
    }, 500);

    window.addEventListener("scroll", handleScrolledToBottom);
    return () => window.removeEventListener("scroll", handleScrolledToBottom);
  }, [onScrolledToBottom]);
};
