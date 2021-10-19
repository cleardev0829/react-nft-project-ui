import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScrollY } from "src/redux/slices/active";

export default function useOffSetTop(top) {
  const dispatch = useDispatch();

  const [offsetTop, setOffSetTop] = useState(false);
  const isTop = top || 100;

  useEffect(() => {
    window.onscroll = () => {
      dispatch(setScrollY(window.pageYOffset));

      if (window.pageYOffset > isTop) {
        setOffSetTop(true);
      } else {
        setOffSetTop(false);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, [dispatch, isTop]);

  return offsetTop;
}

// Usage
// const offset = useOffSetTop(100);
