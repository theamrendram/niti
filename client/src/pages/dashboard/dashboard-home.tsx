import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { type ReactNode } from "react";
import { Clock, AlertCircle, CalendarDays } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// Utility function to combine class names
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

type Deadline = {
  id: number;
  title: string;
  description: string;
  priority: "High" | "Low" | "Medium";
  due: string;
};

const deadlines: Deadline[] = [
  {
    id: 1,
    title: "Navbar Responsive Fix",
    description: "Navbar compatibility issues for screens under 400px width",
    priority: "High",
    due: "29-06-2025",
  },
  {
    id: 2,
    title: "Mobile Menu Implementation",
    description: "Add hamburger menu for mobile navigation experience",
    priority: "Medium",
    due: "22-05-2025",
  },
  {
    id: 3,
    title: "Performance Optimization",
    description: "Optimize bundle size and loading performance metrics",
    priority: "High",
    due: "18-05-2025",
  },
  {
    id: 4,
    title: "Documentation Update",
    description: "Update component documentation and usage examples",
    priority: "Low",
    due: "25-07-2025",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Project Dashboard
          </h1>
          <Button>
            <Link to={"/projects/create"}>+ Create Project</Link>
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Deadlines Section */}
          <div className="lg:col-span-2">
            <DashboardCard>
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Upcoming Deadlines
                </h2>
              </div>
              <div className="space-y-4">
                {deadlines.map((deadline: Deadline) => (
                  <DeadlineItem key={deadline.id} deadline={deadline} />
                ))}
              </div>
            </DashboardCard>
          </div>

          {/* Calendar Section */}
          <div className="lg:col-span-1">
            <DashboardCard>
              <div className="flex items-center gap-2 mb-4">
                <CalendarDays className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Calendar
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Calendar className="w-[80%] h-[80%]" />
                <div className="w-full p-3 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <p className="text-sm font-medium">
                      No scheduled tasks for today
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Your schedule is clear!
                  </p>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
}

const DashboardCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "p-6 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300",
        className
      )}>
      {children}
    </div>
  );
};

const DeadlineItem = ({ deadline }: { deadline: Deadline }) => {
  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-50 border-red-200 hover:bg-red-100 hover:border-red-300";
      case "Medium":
        return "bg-orange-50 border-orange-200 hover:bg-orange-100 hover:border-orange-300";
      case "Low":
        return "bg-green-50 border-green-200 hover:bg-green-100 hover:border-green-300";
      default:
        return "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300";
    }
  };

  const getBadgeVariant = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive";
      case "Medium":
        return "secondary";
      case "Low":
        return "outline";
      default:
        return "default";
    }
  };

  // Calculate days until due
  const dueDate = new Date(deadline.due.split("-").reverse().join("-"));
  const today = new Date();
  const diffTime = dueDate.getTime() - today.getTime();
  const daysUntilDue = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const isOverdue = daysUntilDue < 0;
  const isDueSoon = daysUntilDue <= 3 && daysUntilDue >= 0;

  return (
    <div
      className={cn(
        "px-4 py-2 rounded-lg border transition-all duration-200 cursor-pointer group hover:scale-[1.005]",
        getPriorityStyles(deadline.priority),
        isOverdue && "ring-2 ring-red-300 shadow-red-100",
        isDueSoon && "ring-2 ring-yellow-300 shadow-yellow-100"
      )}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-gray-500 bg-white/80 px-2 py-1 rounded-full border shadow-sm">
              #{deadline.id}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
              {deadline.title}
            </h3>
          </div>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed pl-2 border-l-2 border-gray-200">
            {deadline.description}
          </p>
        </div>
        <div className="flex-shrink-0 flex flex-col items-end gap-2">
          <div className="flex items-center gap-1 text-xs bg-white/80 px-2 py-1 rounded-full border shadow-sm">
            <Clock className="w-3 h-3" />
            <span
              className={cn(
                "font-medium",
                isOverdue && "text-red-600",
                isDueSoon && "text-yellow-600"
              )}>
              Due: {formatDistanceToNow(dueDate, { addSuffix: true })}
              {isOverdue && " (Overdue)"}
              {isDueSoon && !isOverdue && " (Due Soon)"}
            </span>
          </div>
          <Badge
            variant={getBadgeVariant(deadline.priority)}
            className="font-medium shadow-sm">
            {deadline.priority}
          </Badge>
        </div>
      </div>
    </div>
  );
};
