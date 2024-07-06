import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TaskDetail = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const task = {
    id: taskId,
    name: "Task 1",
    description: "Detailed description for Task 1",
    assignee: "John Doe",
    dueDate: "2023-10-01",
    status: "In Progress",
  };

  return (
    <div className="space-y-4">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{task.name}</h1>
        <Button onClick={() => navigate(`/tasks/${task.id}/edit`)}>Edit Task</Button>
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
        <Button className="mt-4" onClick={() => navigate(`/tasks/${task.id}/complete`)}>Mark as Complete</Button>
      </section>
    </div>
  );
};

export default TaskDetail;