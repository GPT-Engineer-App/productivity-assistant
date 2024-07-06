import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const fetchDataAndSendToWebhook = async () => {
      const sampleData = {
        id: 1,
        name: "Sample Item",
        quantity: 10,
        price: 100,
      };

      try {
        const response = await fetch("https://hooks.zapier.com/hooks/catch/16946926/23infqp/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sampleData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        console.log("Data successfully sent to webhook");
      } catch (error) {
        console.error("Failed to send data to webhook:", error);
      }
    };

    fetchDataAndSendToWebhook();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl">Your Blank Canvas</h1>
      <p>Chat with the agent to start making edits.</p>
    </div>
  );
};

export default Index;
