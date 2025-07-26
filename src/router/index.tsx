import EffectPages from "@/pages/Effect";
import Home from "@/pages/Home";
import TablePages from "@/pages/TablePages";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ability",
    element: <TablePages />,
  },
  {
    path: "/effect",
    element: <EffectPages />,
  },
]);
