import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const fetchDataAndSendToWebhook = async () => {
      const data = {
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
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        console.log("Data sent successfully:", data);
      } catch (error) {
        console.error("Failed to send data:", error);
      }
    };

    fetchDataAndSendToWebhook();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to the Inventory Management System</h1>
      <p>Data is being sent to the webhook for testing purposes.</p>
    </div>
  );
};

export default Index;