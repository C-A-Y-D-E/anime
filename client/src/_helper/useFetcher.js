import { useState, useEffect } from "react";
import axios from "axios";
function useFetcher(url) {
  const [animes, setAnimes] = useState(null);

  useEffect(() => {
    async function fetchanime() {
      const res = await axios.get(url);
      setAnimes(res.data.data);
    }
    fetchanime();
  }, [url]);

  return animes;
}

export default useFetcher;
