import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = {
    id: projectId,
    name: "Project Alpha",
    description: "Detailed description for Project Alpha",
    tasks: [
      { id: 1, name: "Task 1", assignee: "John Doe", dueDate: "2023-10-01", status: "In Progress" },
      { id: 2, name: "Task 2", assignee: "Jane Smith", dueDate: "2023-10-05", status: "Completed" },
    ],
  };

  return (
    <div className="space-y-4">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <Button onClick={() => navigate(`/projects/${project.id}/edit`)}>Edit Project</Button>
      </header>
      <section>
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{project.description}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <div className="space-y-2">
          {project.tasks.map((task) => (
            <Card key={task.id}>
              <CardHeader>
                <CardTitle>{task.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Assignee: {task.assignee}</p>
                <p>Due Date: {task.dueDate}</p>
                <p>Status: {task.status}</p>
                <div className="flex justify-end space-x-2 mt-4">
                  <Button variant="outline" onClick={() => navigate(`/tasks/${task.id}`)}>Edit</Button>
                  <Button variant="destructive">Delete</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button className="mt-4" onClick={() => navigate(`/projects/${project.id}/tasks/new`)}>Add New Task</Button>
      </section>
    </div>
  );
};

export default ProjectDetail;