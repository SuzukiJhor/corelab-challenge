import Header from "./components/header";
import Dashboard from "./pages/Dashboard";
import ListProvider from "./context/listProvider";

function App() {
  return (
    <>
      <ListProvider>
        <Header />
        <Dashboard />
      </ListProvider>
    </>
  );
}

export default App;
