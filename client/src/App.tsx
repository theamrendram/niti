import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard/dashboard-home";
import Organization from "./pages/dashboard/organization";
import Projects from "@/pages/dashboard/projects";
import ProjectDetail from "@/pages/project/project-detail";
import AppSidebar from "./components/app-sidebar";
import InboxPage from "./pages/dashboard/inbox";
import TodoPage from "./pages/dashboard/to-do";
import { Toaster } from "@/components/ui/sonner";
import CreateProject from "./pages/project/create-project";
import SigninPage from "@/pages/auth/signIn-page";
import SignupPage from "./pages/auth/signup-page";
function App() {
  return (
    <>
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/signin" element={<SigninPage />} />C
          <Route path="/auth/signup" element={<SignupPage />} />C
          <Route path="/dashboard" element={<AppSidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="org" element={<Organization />} />
            <Route path="todo" element={<TodoPage />} />
            <Route path="projects" element={<Projects />} />
          </Route>
          <Route path="/projects" element={<AppSidebar />}>
            <Route index element={<Projects />} />
            <Route path="/projects/create" element={<CreateProject />} />
            <Route path=":projectId" element={<ProjectDetail />} />
          </Route>
          <Route path="/inbox" element={<AppSidebar />}>
            <Route index element={<InboxPage />} />
            <Route path=":chatId" element={<InboxPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
