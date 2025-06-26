import React from "react";
import Heading from "@/components/heading";
import { ProjectForm } from "@/components/forms/project-form";
const CreateProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <Heading>Create Project</Heading>
      <div className="">
        <ProjectForm />
      </div>
    </div>
  );
};

export default CreateProject;

