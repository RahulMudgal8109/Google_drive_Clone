import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/HomePage/Home.jsx";
import GoogleDrive from "./components/GoogleDrivePage/GoogleDrive.jsx";
import Mydrive from "./components/Sidebar Items/Mydrive.jsx";
import ComputerCom from "./components/Sidebar Items/ComputerCom.jsx";
import StarredComp from "./components/Sidebar Items/StarredComp.jsx";
import RecentCom from "./components/Sidebar Items/RecentCom.jsx";
import ShareWme from "./components/Sidebar Items/ShareWme.jsx";
import SpamCom from "./components/Sidebar Items/SpamCom.jsx";
import BinCom from "./components/Sidebar Items/BinCom.jsx";
import Storage from "./components/Sidebar Items/Storage.jsx";
import Header from "./components/GoogleDrivePage/Header.jsx";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/drive",
    element: (
      <PrivateRoute>
        <GoogleDrive />
      </PrivateRoute>
    ), // Protected route
  },
  {
    path: "/mydrive",
    element: (
      <PrivateRoute>
        <Mydrive />
      </PrivateRoute>
    ),
  },
  {
    path: "/computer",
    element: (
      <PrivateRoute>
        <ComputerCom />
      </PrivateRoute>),
  },
  {
    path: "/starred",
    element: (<PrivateRoute>
      <StarredComp />
      </PrivateRoute>),
  },
  {
    path: "/recent",
    element: (
      <PrivateRoute>
    <RecentCom />
    </PrivateRoute>),
  },
  {
    path: "/shared",
    element: (
      <PrivateRoute>
    <ShareWme />
    </PrivateRoute>),
  },
  {
    path: "/spam",
    element: (<PrivateRoute>
      <SpamCom />
      </PrivateRoute>),
  },
  {
    path: "/bin",
    element: (<PrivateRoute>
    <BinCom />
    </PrivateRoute>),
  },
  {
    path: "/storage",
    element: (<PrivateRoute>
      <Storage />
      </PrivateRoute>),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
