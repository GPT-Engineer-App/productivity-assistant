import React, { useEffect } from "react";
import { pushDataToWebhook } from "../utils/pushDataToWebhook";

const Index = () => {
  useEffect(() => {
    const sampleData = {
      barInventory: [
        { item: "Vodka", quantity: 10 },
        { item: "Gin", quantity: 15 },
        { item: "Rum", quantity: 8 },
      ],
    };

    pushDataToWebhook(sampleData);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to the Bar Inventory System</h1>
      <p>Data is being sent to the webhook for configuration.</p>
    </div>
  );
};

export default Index;