import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Index = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");
  const [comments, setComments] = useState("");
  const [attachments, setAttachments] = useState(null);

  const handleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      toast.error("Task title cannot be empty");
      return;
    }

    const newTaskObj = {
      id: tasks.length + 1,
      title: newTask,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTaskObj]);
    setNewTask("");
    toast.success("Task added successfully");
  };

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const handleAttachmentChange = (e) => {
    setAttachments(e.target.files[0]);
  };

  return (
    <div className="p-4">
      <Tabs defaultValue="tasks" className="w-full">
        <TabsList>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        <TabsContent value="tasks">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Daily Routines and Tasks</h1>
            <div className="space-y-2">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`task-${task.id}`}
                    checked={task.completed}
                    onCheckedChange={() => handleTaskCompletion(task.id)}
                  />
                  <label htmlFor={`task-${task.id}`} className="text-lg">
                    {task.title}
                  </label>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New Task"
              />
              <Button onClick={handleAddTask}>Add Task</Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="calendar">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Calendar View</h1>
            <Calendar />
          </div>
        </TabsContent>
      </Tabs>
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Task Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="comments">Comments</Label>
                <Textarea
                  id="comments"
                  value={comments}
                  onChange={handleCommentChange}
                  placeholder="Add your comments here"
                />
              </div>
              <div>
                <Label htmlFor="attachments">Attachments</Label>
                <Input
                  id="attachments"
                  type="file"
                  onChange={handleAttachmentChange}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;