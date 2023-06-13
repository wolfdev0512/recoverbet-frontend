import { useEffect, useState } from "react";

const useResize = () => {
  const [offsetWidth, setOffsetWidth] = useState(window.innerWidth);
  const [offsetHeight, setOffsetHeight] = useState(window.innerHeight);

  const resizeFunc = (e) => {
    setOffsetWidth(window.innerWidth);
    setOffsetHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeFunc);

    return () => window.removeEventListener("resize", resizeFunc);
  });

  return [offsetWidth, offsetHeight];
};

export default useResize;
