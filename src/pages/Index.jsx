import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const goalSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  startDate: z.string().min(1, "Start Date is required"),
  endDate: z.string().min(1, "End Date is required"),
  priority: z.string().min(1, "Priority is required"),
});

const Index = () => {
  const [goals, setGoals] = useState([]);
  const [progress, setProgress] = useState({});
  const [feedback, setFeedback] = useState({});
  const [selectedGoal, setSelectedGoal] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(goalSchema),
  });

  const onSubmit = (data) => {
    setGoals([...goals, data]);
    toast.success("Goal added successfully!");
  };

  const handleProgressChange = (goalTitle, value) => {
    setProgress({ ...progress, [goalTitle]: value });
  };

  const handleFeedbackChange = (goalTitle, feedbackText) => {
    setFeedback({ ...feedback, [goalTitle]: feedbackText });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Performance Appraisal</h1>
      <Card>
        <CardHeader>
          <CardTitle>Set Performance Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="title">Goal Title</Label>
              <Input id="title" {...register("title")} />
              {errors.title && <p className="text-red-500">{errors.title.message}</p>}
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Input id="description" {...register("description")} />
              {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            </div>
            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <Input id="startDate" type="date" {...register("startDate")} />
              {errors.startDate && <p className="text-red-500">{errors.startDate.message}</p>}
            </div>
            <div>
              <Label htmlFor="endDate">End Date</Label>
              <Input id="endDate" type="date" {...register("endDate")} />
              {errors.endDate && <p className="text-red-500">{errors.endDate.message}</p>}
            </div>
            <div>
              <Label htmlFor="priority">Priority</Label>
              <Input id="priority" {...register("priority")} />
              {errors.priority && <p className="text-red-500">{errors.priority.message}</p>}
            </div>
            <Button type="submit">Add Goal</Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Track Progress and Provide Feedback</h2>
        {goals.map((goal, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{goal.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{goal.description}</p>
              <div className="mt-4">
                <Label htmlFor={`progress-${index}`}>Progress</Label>
                <Progress value={progress[goal.title] || 0} />
                <Input
                  id={`progress-${index}`}
                  type="range"
                  min="0"
                  max="100"
                  value={progress[goal.title] || 0}
                  onChange={(e) => handleProgressChange(goal.title, e.target.value)}
                />
              </div>
              <div className="mt-4">
                <Label htmlFor={`feedback-${index}`}>Feedback</Label>
                <Input
                  id={`feedback-${index}`}
                  value={feedback[goal.title] || ""}
                  onChange={(e) => handleFeedbackChange(goal.title, e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Calendar</h2>
        <Calendar />
      </div>
    </div>
  );
};

export default Index;