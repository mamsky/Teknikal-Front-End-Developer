import EffectPages from "@/pages/Effect";
import Home from "@/pages/Home";
import SidebarLayout from "@/pages/layout/SidebarLayout";
import TablePages from "@/pages/TablePages";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    Component: SidebarLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/ability", Component: TablePages },
      { path: "/effect", Component: EffectPages },
    ],
  },
]);
