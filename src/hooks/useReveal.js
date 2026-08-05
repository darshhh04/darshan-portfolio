import { useEffect, useRef, useState } from "react";

// A small hook that tells a component whether it has scrolled into view yet.
// Usage: const [ref, isVisible] = useReveal();
// Attach `ref` to the element you want to watch, then use `isVisible`
// to switch between "hidden" and "visible" Tailwind classes.
function useReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // only need to trigger this once
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

export default useReveal;
