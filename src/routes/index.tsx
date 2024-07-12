import App from "@/App";
import NotFound from "@/components/shared/404";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import RealtimeDetails from "@/pages/home/RealtimeDetails";
import RealtimeFloodAffectDetection from "@/pages/home/RealtimeFloodAffectDetection";

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
      {
        path: "/realtime-flood-affected-detection",
        element: <RealtimeFloodAffectDetection />,
      },
    ],
  },
]);

export default router;
