import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Map,
  Activity,
  AlertTriangle,
  BarChart3,
  Settings,
  Leaf,
  Droplets,
} from "lucide-react";

const navigation = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
      { title: "Crop Health", url: "/dashboard/health", icon: Leaf },
    ],
  },
  {
    title: "Monitoring", 
    items: [
      { title: "Live Alerts", url: "/dashboard/alerts", icon: AlertTriangle },
      { title: "Environmental", url: "/dashboard/environmental", icon: Droplets },
      { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
    ],
  },
  {
    title: "System",
    items: [
      { title: "AI Models", url: "/dashboard/models", icon: Activity },
      { title: "Settings", url: "/dashboard/settings", icon: Settings },
    ],
  },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = !open;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar
      className={collapsed ? "w-14" : "w-64"}
      collapsible="icon"
    >
      <SidebarContent>
        {/* Header */}
        <div className="p-4 border-b">
          {!collapsed ? (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">FarmFIT</h2>
                <p className="text-xs text-muted-foreground">Smart Farming Platform</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        {navigation.map((section, index) => (
          <SidebarGroup key={index} className="px-4 py-2">
            {!collapsed && (
              <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {section.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        end 
                        className={({ isActive }) => getNavCls({ isActive })}
                      >
                        <item.icon className="h-4 w-4" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        {/* Status indicator at bottom */}
        <div className="mt-auto p-4 border-t">
          {!collapsed ? (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">System Status</span>
              <div className="flex items-center text-success">
                <div className="w-2 h-2 bg-success rounded-full mr-1 animate-pulse" />
                <span className="text-xs">Online</span>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            </div>
          )}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}