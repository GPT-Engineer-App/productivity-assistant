import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const fetchDataAndSendToWebhook = async () => {
      try {
        const data = {
          id: 1,
          name: "Sample Item",
          quantity: 100,
          price: 9.99,
        };

        const response = await fetch("https://hooks.zapier.com/hooks/catch/16946926/23infqp/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        console.log("Data successfully sent to webhook:", data);
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