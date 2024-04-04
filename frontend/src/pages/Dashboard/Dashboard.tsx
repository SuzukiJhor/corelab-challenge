import { styled } from "styled-components";

import CreateTask from "../../components/createTask";
import ListTasks from "../../components/listTasks";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f2f5;
  height: 100%;

  width: 100%;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <CreateTask />
      <ListTasks />
    </DashboardContainer>
  );
};

export default Dashboard;
