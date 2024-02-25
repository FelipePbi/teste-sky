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

export function useSectionMovies(keyword: string, showSections: boolean) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ISectionMovie[]>([]);

  const fetchAPI = useCallback(async () => {
    const url = `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${keyword}?info=image&sort=year.decr&limit=15`;

    try {
      setIsLoading(true);
      const response = await fetch(url, optionsAPI);
      const result = await response.json();

      setData(result.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [keyword]);

  useEffect(() => {
    if (showSections) {
      fetchAPI();
    }
  }, [fetchAPI, showSections]);

  return {
    isLoading,
    data,
  };
}
