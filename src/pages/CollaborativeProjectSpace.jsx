import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const CollaborativeProjectSpace = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: "", description: "" });

  const handleCreateProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({ title: "", description: "" });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Collaborative Project Space</h1>
      <Tabs defaultValue="projects">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <div className="space-y-4">
            <Button onClick={() => setNewProject({ title: "", description: "" })}>New Project</Button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="calendar">
          <Calendar />
        </TabsContent>
        <TabsContent value="tasks">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="task-1" />
              <label htmlFor="task-1" className="text-lg">Task 1 - Due Date</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="task-2" />
              <label htmlFor="task-2" className="text-lg">Task 2 - Due Date</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="task-3" />
              <label htmlFor="task-3" className="text-lg">Task 3 - Due Date</label>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Create New Project</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Project</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Project Title"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            />
            <Textarea
              placeholder="Project Description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            />
            <Button onClick={handleCreateProject}>Create</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CollaborativeProjectSpace;