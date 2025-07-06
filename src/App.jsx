import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Search from "./Pages/Search";

const AppRouter = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export const Routes = createBrowserRouter([
  {
    element: <AppRouter />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Search />,
        path: "/search",
      },
    ],
  },
]);

function App() {
  return <AppRouter />;
}

export default App;
