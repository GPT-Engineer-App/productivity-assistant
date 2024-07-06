import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Our App!</h1>
      <p className="text-lg">Get started by exploring our features.</p>
      <Button onClick={() => navigate("/e-gift")}>Go to E-Gift</Button>
    </div>
  );
};

export default Index;