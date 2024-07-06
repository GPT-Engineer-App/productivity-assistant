import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    id,
    name: "Task 1",
    description: "Description 1",
    assignee: "User 1",
    dueDate: "2023-10-01",
    status: "In Progress",
  });

  const handleEdit = () => {
    navigate(`/tasks/${id}/edit`);
  };

  const handleComplete = () => {
    setTask({ ...task, status: "Completed" });
  };

  return (
    <div className="space-y-4">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{task.name}</h1>
        <Button onClick={handleEdit}>Edit Task</Button>
      </header>
      <section>
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{task.description}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Details</h2>
        <p>Assignee: {task.assignee}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Status: {task.status}</p>
        <Button onClick={handleComplete} disabled={task.status === "Completed"}>
          {task.status === "Completed" ? "Completed" : "Mark as Complete"}
        </Button>
      </section>
    </div>
  );
};

export default TaskDetail;