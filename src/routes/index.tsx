import App from "@/App";
import NotFound from "@/components/shared/404";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import RealtimeDetails from "@/pages/home/RealtimeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/realtime",
        element: <RealtimeDetails />,
      },
    ],
  },
]);

export default router;
