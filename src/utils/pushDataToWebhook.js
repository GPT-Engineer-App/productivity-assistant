export const pushDataToWebhook = async (data) => {
  const webhookUrl = "https://hooks.zapier.com/hooks/catch/16946926/23infqp/";

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Data successfully sent to webhook:", result);
  } catch (error) {
    console.error("Failed to send data to webhook:", error);
  }
};