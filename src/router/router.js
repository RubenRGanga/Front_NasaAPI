import { createBrowserRouter } from "react-router-dom";


import PublicLayout from "../components/PublicLayout";
import GetApod from "../components/GetApod";
import Landings from "../components/Landings";
import Neas from "../components/Neas";

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
        element: <Landings/>,
      },
      {
        path: "/neas",
        element: <Neas/>,
      },
    ],
  },
]);

export default router;