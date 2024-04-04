import { styled } from "styled-components";
import { CreateTask } from "../../components/CreateTask";
import { ListTasks } from "../../components/ListTasks";
import ListProvider from "../../context/listProvider";

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
