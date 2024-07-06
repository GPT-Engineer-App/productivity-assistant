import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const fetchDataAndSendToWebhook = async () => {
      const sampleData = {
        id: 1,
        name: "Sample Item",
        quantity: 100,
        price: 9.99,
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
          throw new Error(`Error: ${response.statusText}`);
        }

        console.log("Data sent successfully:", sampleData);
      } catch (error) {
        console.error("Failed to send data:", error);
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