import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";

const Index = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: "", description: "" });

  const handleCreateProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({ title: "", description: "" });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Collaborative Project Space</h1>
      <Tabs defaultValue="projects">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Create New Project</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
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
                  <Button onClick={handleCreateProject}>Create Project</Button>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-2">
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
        <TabsContent value="tasks">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Tasks</h2>
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
          </div>
        </TabsContent>
        <TabsContent value="calendar">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Calendar</h2>
            <CalendarComponent />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;