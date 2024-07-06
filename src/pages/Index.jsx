import { useEffect } from "react";
import { sendInventoryDataToWebhook } from "@/utils/webhook";

const Index = () => {
  useEffect(() => {
    sendInventoryDataToWebhook();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl">Your Blank Canvas</h1>
      <p>Chat with the agent to start making edits.</p>
    </div>
  );
};

export default Index;