import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">Welcome to the Shopping List App</h1>
      <p>Manage your shopping lists efficiently and collaboratively.</p>
      <Button as={Link} to="/shopping-lists">
        View Shopping Lists
      </Button>
    </div>
  );
};

export default Index;