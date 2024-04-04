import axios from "axios";
import { useState } from "react";

export function useDeleteTask(url: string) {
  const [error, setError] = useState<string | null>(null);

  const deleteTask = async (taskId: number) => {
    const baseUrl = `${url}/${taskId}`;
    try {
      await axios.delete(baseUrl);
      setError(null);
    } catch (error) {
      setError("Erro na requisição DELETE: " + error.message);
    }
  };

  return { error, deleteTask };
}
