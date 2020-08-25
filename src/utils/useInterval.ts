import React, { useRef, useEffect } from "react";

// From Dan Abramov https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useInterval = (callback: any, delay: number) => {
  const savedCallback = useRef(null);

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    function tick() {
      // @ts-ignore
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
