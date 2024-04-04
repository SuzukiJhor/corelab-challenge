import axios from "axios";
import { useState } from "react";

export function useDeleteTask(url: string) {
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const deleteTask = async (taskId: number) => {
    const baseUrl = `${url}/${taskId}`;
    try {
      setIsFetching(true);
      await axios.delete(baseUrl);
      setError(null);
    } catch (error) {
      setError("Erro na requisição DELETE: " + error.message);
    } finally {
      setIsFetching(false);
    }
  };

  const refetch = async () => {
    try {
      setIsFetching(true);
      // Realiza a requisição GET para buscar os dados atualizados
      const response = await axios.get(url);
      setError(null);
      return response.data; // Retorna os dados atualizados
    } catch (error) {
      setError("Erro na requisição GET: " + error.message);
    } finally {
      setIsFetching(false);
    }
  };

  return { error, isFetching, deleteTask, refetch };
}
