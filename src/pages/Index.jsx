import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl">Welcome to the Calendar and Event Management App</h1>
      <p>Manage your events, schedule video calls, and set reminders with ease.</p>
      <Button onClick={() => navigate("/calendar")}>Go to Calendar</Button>
    </div>
  );
};

export default Index;