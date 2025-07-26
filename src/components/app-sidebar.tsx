import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "ability",
    url: "/ability",
  },
  {
    title: "Key effect",
    url: "/effect",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <div className="text-center font-bold text-2xl">
        Live <strong className="text-blue-500">Code</strong>
      </div>
      <SidebarContent>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link to={item.url}>{item.title}</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
