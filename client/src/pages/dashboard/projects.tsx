"use client";
import { useState } from "react";
import { MessageCircle, Plus, Search, Calendar, User, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { truncate } from "@/lib/index";
import ProjectForm from "@/components/project-form";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [showProjectForm, setShowProjectForm] = useState(false);

  const data = [
    {
      title: "Mobile App Development",
      description:
        "Develop a mobile app for the company to manage their projects. The app should be able to track the progress of the projects and the tasks associated with them. Handled by John Doe and Jane Doe.",
      status: "In Progress",
      dueDate: "2025-06-21",
      priority: "High",
      assignedTo: "John Doe",
      id: 1,
    },
    {
      title: "Website Development",
      description:
        "Develop a website for the company to manage their projects. The website should be able to track the progress of the projects and the tasks associated with them. Handled by John Smith and Jane Smith.",
      status: "Completed",
      dueDate: "2025-01-01",
      priority: "High",
      assignedTo: "Jane Doe",
      id: 2,
    },
    {
      title: "AI Chatbot Development",
      description:
        "Develop an AI chatbot for the company to manage their projects. The chatbot should be able to track the progress of the projects and the tasks associated with them. Handled by John Doe and Jane Doe.",
      status: "In Progress",
      dueDate: "2025-01-01",
      priority: "Medium",
      assignedTo: "John Smith",
      id: 3,
    },
    {
      title: "AI Image Generation",
      description:
        "Develop an AI image generation for the company to manage their projects. The image generation should be able to track the progress of the projects and the tasks associated with them. Handled by John Smith and Jane Smith.",
      status: "Planning",
      dueDate: "2025-01-01",
      priority: "Low",
      assignedTo: "John Smith",
      id: 4,
    },
    {
      title: "AI Video Generation",
      description:
        "Develop an AI video generation for the company to manage their projects. The video generation should be able to track the progress of the projects and the tasks associated with them. Handled by John Smith and Jane Smith.",
      status: "In Progress",
      dueDate: "2025-01-01",
      priority: "High",
      assignedTo: "John Smith",
      id: 5,
    },
  ];

  // Filter projects based on search and filters
  const filteredProjects = data.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || project.status === statusFilter;
    const matchesPriority =
      priorityFilter === "all" || project.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getPriorityColor = (
    priority: string
  ):
    | "high"
    | "medium"
    | "low"
    | "secondary"
    | "default"
    | "destructive"
    | "outline" => {
    switch (priority) {
      case "High":
        return "high";
      case "Medium":
        return "medium";
      case "Low":
        return "low";
      default:
        return "secondary";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600 mt-1">
              Manage and track your project progress
            </p>
          </div>
          <Button
            onClick={() => setShowProjectForm(true)}
            className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Planning">Planning</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            getPriorityColor={getPriorityColor}
            formatDate={formatDate}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No projects found
          </h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search or filter criteria
          </p>
          <Button onClick={() => setShowProjectForm(true)}>
            Create your first project
          </Button>
        </div>
      )}

      {/* Project Form */}
      <ProjectForm
        showSheet={showProjectForm}
        setShowSheet={setShowProjectForm}
      />
    </div>
  );
}

type ProjectCardProps = {
  project: any;
  getPriorityColor: (
    priority: string
  ) =>
    | "high"
    | "medium"
    | "low"
    | "secondary"
    | "default"
    | "destructive"
    | "outline";
  formatDate: (date: string) => string;
};

const ProjectCard = ({
  project,
  getPriorityColor,
  formatDate,
}: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {truncate(project.title, 15)}
          </h3>
          <Badge variant={getPriorityColor(project.priority)}>
            {project.priority}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {truncate(project.description, 120)}
        </p>

        {/* Status */}
        <div className="flex items-center gap-2 mb-4">
          <Badge
            variant={
              project.status === "Completed"
                ? "default"
                : project.status === "In Progress"
                ? "medium"
                : project.status === "Planning"
                ? "low"
                : "secondary"
            }>
            {project.status}
          </Badge>
        </div>

        {/* Project Details */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <User className="h-4 w-4" />
            <span>{project.assignedTo}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>Due: {formatDate(project.dueDate)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => navigate(`/projects/${project.id}`)}>
            <Eye className="h-4 w-4 mr-2" />
            View
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(`/projects/${project.id}`)}>
            <MessageCircle className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
