import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  // SidebarTrigger
} from "@/components/ui/sidebar";
import { Inbox, Calendar, Mail, HomeIcon, LogOut } from "lucide-react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useDispatch, useSelector, shallowEqual} from "react-redux";
import { removeUser } from "@/store/user.slice";

const AppSidebar = () => {  
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user, shallowEqual);


  const handelLogout = () => {
    console.log("user", user);
    console.log("logging out");

    console.log("user", user);

    dispatch(removeUser());
  };

  const mainMenuItems = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: HomeIcon,
    },
    {
      title: "My to-do",
      url: "/dashboard/todo",
      icon: Inbox,
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: Calendar,
    },
    {
      title: "Inbox",
      url: "/inbox",
      icon: Mail,
    },
  ];

  const incomingDeadlinesItems = [
    {
      title: "Mobile app layout",
      url: "/projects/Mobile Development",
      icon: HomeIcon,
    },
    {
      title: "landing page 1",
      url: "/projects/Landing Page",
      icon: Inbox,
    },
    {
      title: "CMS deployment",
      url: "/projects/CMS Development",
      icon: Calendar,
    },
  ];


  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
        <Sidebar className="w-64">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex items-center gap-2 rounded-md border p-2">
                  <img
                    src={`https://ui-avatars.com/api/?name=${user.fullName}&background=121826&color=fff`}
                    alt="avatar"
                    className="h-8 w-8 rounded-md"
                  />
                  <div className="">
                    <p>{user.fullName}</p>
                    <p className="-mt-1 text-sm text-gray-600">{user.email}</p>
                  </div>
                </div>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <div className="rounded-md border">
                  <Input type="text" placeholder="search" />
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>MAIN MENU</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="text-gray-500">
                  {mainMenuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url} className="flex items-center gap-2">
                          <item.icon className="text-black" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>INCOMING DEADLINE</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="text-gray-500">
                  {incomingDeadlinesItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url} className="flex items-center gap-2">
                          <item.icon className="text-black" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="text-gray-500">
                  <SidebarMenuItem key={"logout"}>
                    <SidebarMenuButton asChild>
                      <Button
                        className="flex items-center gap-2"
                        onClick={() => {
                          handelLogout();
                        }}
                      >
                        <LogOut className="text-black" />
                        <span>Logout</span>
                      </Button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1">
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default AppSidebar;
