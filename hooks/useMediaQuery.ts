import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>();

  useEffect(() => {
    setMatches(window.matchMedia(query).matches);
  }, [query]);

  return matches;
};

export default useMediaQuery;
