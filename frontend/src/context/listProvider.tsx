import React, { useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest";
import { ListTasksContext } from "./listTasksContext";

export default function ListProvider({ children }) {
  const [taskData, setTaskData] = useState([]);
  const { data } = useRequest<Task[]>("http://localhost:8000/api/tasks?");

  useEffect(() => {
    if (data && data.length > 0) {
      setTaskData(data);
    }
  }, [data]);

  // if (!data || taskData.length === 0) {
  //   data = [];
  // }

  return (
    <ListTasksContext.Provider value={{ data: taskData, setTaskData }}>
      {children}
    </ListTasksContext.Provider>
  );
}
