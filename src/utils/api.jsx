import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    // headers: {
    //   'X-RapidAPI-Key': '8d43d202c3msh07041a5b9ec792ep16f724jsn20de452e6995',
    //   'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    // }
    headers: {
      'X-RapidAPI-Key': 'dd5363e011msh767a0c94dd79762p1baa7djsn4e571ac78852',
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
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;