import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({
    id,
    name: "Project 1",
    description: "Description 1",
    tasks: [
      { id: 1, name: "Task 1", assignee: "User 1", dueDate: "2023-10-01", status: "In Progress" },
      { id: 2, name: "Task 2", assignee: "User 2", dueDate: "2023-10-05", status: "Completed" },
    ],
  });

  const handleEdit = () => {
    navigate(`/projects/${id}/edit`);
  };

  const handleAddTask = () => {
    navigate(`/projects/${id}/tasks/new`);
  };

  return (
    <div className="space-y-4">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <Button onClick={handleEdit}>Edit Project</Button>
      </header>
      <section>
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{project.description}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <Button onClick={handleAddTask}>Add New Task</Button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {project.tasks.map((task) => (
            <Card key={task.id}>
              <CardHeader>
                <CardTitle>{task.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Assignee: {task.assignee}</p>
                <p>Due Date: {task.dueDate}</p>
                <p>Status: {task.status}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;