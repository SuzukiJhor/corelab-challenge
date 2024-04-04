import React, { useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest";
import { ListTasksContext } from "./listTasksContext";

export default function ListProvider({ children }) {
  const [taskData, setTaskData] = useState(null);
  const { data } = useRequest<Task[]>("http://localhost:8000/api/tasks?");

  useEffect(() => {
    if (data) {
      setTaskData(data);
    }
  }, [data]);

  if (!taskData) {
    return <div>Loading...</div>;
  }

  return (
    <ListTasksContext.Provider value={{ data: taskData }}>
      {children}
    </ListTasksContext.Provider>
  );
}
