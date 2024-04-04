import { styled } from "styled-components";

import ListProvider from "../../context/listProvider";
import CreateTask from "../../components/createTask";
import ListTasks from "../../components/listTasks";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f2f5;
  height: 100%;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <ListProvider>
        <CreateTask />
        <ListTasks />
      </ListProvider>
    </DashboardContainer>
  );
};

export default Dashboard;
