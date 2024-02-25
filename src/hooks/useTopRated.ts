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

export function useTopRated() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ISectionMovie[]>([]);

  const fetchAPI = useCallback(async () => {
    const url = "https://moviesdatabase.p.rapidapi.com/titles?list=top_rated_lowest_100&limit=5";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "832da64e7cmsh7e2848d430b89a0p19d0f8jsnfa964bcf7380",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
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
