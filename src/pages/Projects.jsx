import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    { id: 1, name: "Project Alpha", description: "Description for Project Alpha", progress: 70 },
    { id: 2, name: "Project Beta", description: "Description for Project Beta", progress: 40 },
  ];

  return (
    <div className="space-y-4">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button onClick={() => navigate("/projects/new")}>Create New Project</Button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
              <Progress value={project.progress} className="mt-2" />
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline" onClick={() => navigate(`/projects/${project.id}`)}>Edit</Button>
                <Button variant="destructive">Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;