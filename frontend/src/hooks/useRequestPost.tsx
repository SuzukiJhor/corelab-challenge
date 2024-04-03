import axios from "axios";
import { useState } from "react";

export function usePostRequest<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sendPostRequest = async (postData: any) => {
    try {
      const response = await axios.post(url, postData);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError("Erro na requisição POST: " + error.message);
    }
  };

  return { data, error, sendPostRequest };
}
