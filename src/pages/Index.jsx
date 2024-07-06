import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Index = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");
  const [comments, setComments] = useState({});
  const [attachments, setAttachments] = useState({});

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
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addComment = (taskId, comment) => {
    setComments({ ...comments, [taskId]: comment });
    toast.success("Comment added successfully");
  };

  const addAttachment = (taskId, attachment) => {
    setAttachments({ ...attachments, [taskId]: attachment });
    toast.success("Attachment added successfully");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Daily Routine and Task Management</h1>
      <Tabs defaultValue="tasks" className="w-full">
        <TabsList>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        <TabsContent value="tasks">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New Task"
              />
              <Button onClick={addTask}>Add Task</Button>
            </div>
            <div className="space-y-2">
              {tasks.map((task) => (
                <Card key={task.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Checkbox
                        checked={task.completed}
                        onCheckedChange={() => toggleTaskCompletion(task.id)}
                      />
                      <span>{task.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <Label htmlFor={`comment-${task.id}`}>Comment</Label>
                        <Textarea
                          id={`comment-${task.id}`}
                          value={comments[task.id] || ""}
                          onChange={(e) => addComment(task.id, e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`attachment-${task.id}`}>Attachment</Label>
                        <Input
                          id={`attachment-${task.id}`}
                          type="file"
                          onChange={(e) => addAttachment(task.id, e.target.files[0])}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="calendar">
          <CalendarComponent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;