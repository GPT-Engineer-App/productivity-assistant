import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const Index = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") {
      toast.error("Task title cannot be empty");
      return;
    }
    setTasks([...tasks, { id: tasks.length + 1, title: newTask, completed: false }]);
    setNewTask("");
    toast.success("Task added successfully");
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Daily Routine and Task Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {tasks.map(task => (
                <div key={task.id} className="flex items-center space-x-2">
                  <Checkbox id={`task-${task.id}`} checked={task.completed} onCheckedChange={() => toggleTaskCompletion(task.id)} />
                  <label htmlFor={`task-${task.id}`} className="text-lg">{task.title}</label>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="New Task" />
              <Button onClick={addTask}>Add Task</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <CalendarComponent />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;