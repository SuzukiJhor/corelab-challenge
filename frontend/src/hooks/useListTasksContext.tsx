import { useContext } from "react";
import { ListTasksContext } from "../context/listTasksContext";

export default function useListTasksContext() {
  const context = useContext(ListTasksContext);

  if (!context) throw new Error("Nao esta dentro do Contexto!");

  return context;
}
