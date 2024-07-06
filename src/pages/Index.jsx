import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-3xl font-bold">Welcome to the Calendar and Event Management App</h1>
      <p className="text-lg">Manage your events, schedule video calls, and set reminders with ease.</p>
      <div className="space-x-4">
        <Button onClick={() => handleNavigate("/calendar")}>Go to Calendar</Button>
        <Button onClick={() => handleNavigate("/tasks")}>Go to Tasks</Button>
        <Button onClick={() => handleNavigate("/notes")}>Go to Notes</Button>
      </div>
    </div>
  );
};

export default Index;