import { styled } from "styled-components";
import { CreateTask } from "../../components/CreateTask";

const DashboardContainer = styled.div`
  display: flex;

  justify-content: center;
  background: #f0f2f5;
  height: 100vh;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <CreateTask />
    </DashboardContainer>
  );
};

export default Dashboard;
