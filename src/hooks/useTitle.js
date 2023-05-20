import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `CarToys | ${title}`;
  }, [title]);
};

export default useTitle;
