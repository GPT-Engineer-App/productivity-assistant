import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete Assignment", completed: false, comments: [], attachments: [] },
    { id: 2, title: "Prepare Presentation", completed: false, comments: [], attachments: [] },
  ]);

  const toggleCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addComment = (id, comment) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, comments: [...task.comments, comment] } : task
      )
    );
  };

  const addAttachment = (id, attachment) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, attachments: [...task.attachments, attachment] } : task
      )
    );
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Task Management</h1>
      <div className="space-y-2">
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <CardTitle>{task.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onCheckedChange={() => toggleCompletion(task.id)}
                />
                <label htmlFor={`task-${task.id}`} className="text-lg">
                  {task.title}
                </label>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Comments</h2>
                {task.comments.map((comment, index) => (
                  <p key={index}>{comment}</p>
                ))}
                <Textarea
                  placeholder="Add a comment"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addComment(task.id, e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Attachments</h2>
                {task.attachments.map((attachment, index) => (
                  <p key={index}>{attachment}</p>
                ))}
                <Input
                  type="file"
                  onChange={(e) => {
                    addAttachment(task.id, e.target.files[0].name);
                  }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TaskManagement;