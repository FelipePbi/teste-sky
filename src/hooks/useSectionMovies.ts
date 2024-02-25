import { useCallback, useEffect, useState } from "react";

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
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "832da64e7cmsh7e2848d430b89a0p19d0f8jsnfa964bcf7380",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    try {
      setIsLoading(true);
      const response = await fetch(url, options);
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
