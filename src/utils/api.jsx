import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': '8d43d202c3msh07041a5b9ec792ep16f724jsn20de452e6995',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        setError(response.status);
      }

      setData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;