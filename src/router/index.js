import { createBrowserRouter } from "react-router-dom";

// import Navbar from "../components/Navbar";
import PublicLayout from "../components/PublicLayout";
import GetApod from "../components/GetApod";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout/>,
    children: [
      {
        index: true,
        path: "/home",
        element: <GetApod/>,
      },
      {
        path: "/landings",
        element: <></>,
      },
      {
        path: "/neas",
        element: <></>,
      },
    ],
  },
]);

export default router;