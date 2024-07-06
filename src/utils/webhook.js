export const sendInventoryDataToWebhook = async () => {
  const webhookUrl = "https://hooks.zapier.com/hooks/catch/16946926/23infqp/";
  const inventoryData = {
    items: [
      { id: 1, name: "Item A", quantity: 100 },
      { id: 2, name: "Item B", quantity: 200 },
      { id: 3, name: "Item C", quantity: 300 },
    ],
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inventoryData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    console.log("Data successfully sent to webhook:", await response.json());
  } catch (error) {
    console.error("Failed to send data to webhook:", error);
  }
};