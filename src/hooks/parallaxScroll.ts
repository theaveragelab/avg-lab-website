import { useEffect } from "react";

export default function useParallaxScroll(rate: number) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const background = document.querySelector(
        ".homeBackground"
      ) as HTMLElement;
      background.style.backgroundPositionY = `${-scrollValue * rate}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [rate]);
}
