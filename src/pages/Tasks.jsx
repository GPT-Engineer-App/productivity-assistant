import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", assignee: "User 1", dueDate: "2023-10-01", status: "In Progress" },
    { id: 2, name: "Task 2", assignee: "User 2", dueDate: "2023-10-05", status: "Completed" },
  ]);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/tasks/${id}/edit`);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="space-y-4">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <Button onClick={() => navigate("/tasks/new")}>Create New Task</Button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <CardTitle>{task.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Assignee: {task.assignee}</p>
              <p>Due Date: {task.dueDate}</p>
              <p>Status: {task.status}</p>
              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={() => handleEdit(task.id)}>Edit</Button>
                <Button variant="destructive" onClick={() => handleDelete(task.id)}>Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tasks;