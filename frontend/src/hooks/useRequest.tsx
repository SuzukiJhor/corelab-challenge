import axios from "axios";
import { useState, useEffect } from "react";

export function useRequest<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError("Erro na requisição GET: " + error.message);
      }
    };

    fetchData();
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return { data, refetch, error };
}
