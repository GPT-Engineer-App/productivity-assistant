import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

const PerformanceAppraisal = () => {
  const [goals, setGoals] = useState([]);
  const [goalTitle, setGoalTitle] = useState("");
  const [goalDescription, setGoalDescription] = useState("");
  const [goalStartDate, setGoalStartDate] = useState("");
  const [goalEndDate, setGoalEndDate] = useState("");
  const [goalPriority, setGoalPriority] = useState("Low");
  const [feedback, setFeedback] = useState("");

  const handleAddGoal = () => {
    const newGoal = {
      title: goalTitle,
      description: goalDescription,
      startDate: goalStartDate,
      endDate: goalEndDate,
      priority: goalPriority,
      progress: 0,
      feedback: [],
    };
    setGoals([...goals, newGoal]);
    setGoalTitle("");
    setGoalDescription("");
    setGoalStartDate("");
    setGoalEndDate("");
    setGoalPriority("Low");
    toast.success("Goal added successfully!");
  };

  const handleAddFeedback = (index) => {
    const newGoals = [...goals];
    newGoals[index].feedback.push(feedback);
    setGoals(newGoals);
    setFeedback("");
    toast.success("Feedback added successfully!");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Performance Appraisal</h1>
      <Tabs defaultValue="set-goals">
        <TabsList>
          <TabsTrigger value="set-goals">Set Goals</TabsTrigger>
          <TabsTrigger value="track-progress">Track Progress</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>
        <TabsContent value="set-goals">
          <Card>
            <CardHeader>
              <CardTitle>Set Performance Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="goalTitle">Goal Title</Label>
                  <Input id="goalTitle" value={goalTitle} onChange={(e) => setGoalTitle(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="goalDescription">Description</Label>
                  <Textarea id="goalDescription" value={goalDescription} onChange={(e) => setGoalDescription(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="goalStartDate">Start Date</Label>
                  <Input id="goalStartDate" type="date" value={goalStartDate} onChange={(e) => setGoalStartDate(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="goalEndDate">End Date</Label>
                  <Input id="goalEndDate" type="date" value={goalEndDate} onChange={(e) => setGoalEndDate(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="goalPriority">Priority</Label>
                  <select id="goalPriority" value={goalPriority} onChange={(e) => setGoalPriority(e.target.value)} className="w-full p-2 border rounded">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <Button onClick={handleAddGoal}>Add Goal</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="track-progress">
          <div className="space-y-4">
            {goals.map((goal, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{goal.description}</p>
                  <p>Start Date: {goal.startDate}</p>
                  <p>End Date: {goal.endDate}</p>
                  <p>Priority: {goal.priority}</p>
                  <Progress value={goal.progress} />
                  <Button onClick={() => handleAddFeedback(index)}>Add Feedback</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="feedback">
          <div className="space-y-4">
            {goals.map((goal, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {goal.feedback.map((fb, fbIndex) => (
                      <p key={fbIndex}>{fb}</p>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Add Feedback</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add Feedback for {goal.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                        <Button onClick={() => handleAddFeedback(index)}>Submit Feedback</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PerformanceAppraisal;