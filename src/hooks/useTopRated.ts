import { useCallback, useEffect, useState } from "react";
import { optionsAPI } from "./constants";

interface ISectionMovie {
  id: string;
  primaryImage: {
    url: string;
    caption: {
      plainText: string;
    };
  };
}

export function useTopRated() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ISectionMovie[]>([]);

  const fetchAPI = useCallback(async () => {
    const url = "https://moviesdatabase.p.rapidapi.com/titles?limit=5&sort=year.decr&endYear=2022";

    try {
      const response = await fetch(url, optionsAPI);
      const result = await response.json();

      setData(result.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAPI();
  }, []);

  return {
    isLoading,
    data,
  };
}
