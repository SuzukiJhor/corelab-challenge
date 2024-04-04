import axios from "axios";
import { useState } from "react";

interface TaskData {
  title: string;
  description: string;
  is_favorite: boolean;
  color: string;
}

export function useUpdateTask(url: string) {
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const updateTask = async (taskId: number, newData: TaskData) => {
    const baseUrl = `${url}/${taskId}`;
    try {
      setIsFetching(true);
      await axios.put(baseUrl, newData);
      setError(null);
    } catch (error) {
      setError("Erro na requisição PUT: " + error.message);
    } finally {
      setIsFetching(false);
    }
  };

  const refetch = async () => {
    try {
      setIsFetching(true);
      const response = await axios.get(url);
      setError(null);
      return response.data;
    } catch (error) {
      setError("Erro na requisição GET: " + error.message);
    } finally {
      setIsFetching(false);
    }
  };

  return { error, isFetching, updateTask, refetch };
}
