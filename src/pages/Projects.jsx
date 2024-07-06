import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project 1", description: "Description 1", progress: 50 },
    { id: 2, name: "Project 2", description: "Description 2", progress: 75 },
  ]);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/projects/${id}/edit`);
  };

  const handleDelete = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div className="space-y-4">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button onClick={() => navigate("/projects/new")}>Create New Project</Button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
              <Progress value={project.progress} />
              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={() => handleEdit(project.id)}>Edit</Button>
                <Button variant="destructive" onClick={() => handleDelete(project.id)}>Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;