import React, { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    const fetchDataAndSendToWebhook = async () => {
      try {
        // Fetch data from the provided JSON
        const data = {
          "date": "July 3, 2024",
          "items": [
            {
              "description": "Alfonso",
              "outsideQuantity": 18,
              "hotelQuantity": 3,
              "outsideTaken": 3,
              "hotelTaken": 1,
              "outsideOpening": 15,
              "hotelOpening": 0,
              "outsideClosing": 0,
              "hotelClosing": 0,
              "reorderRequired": 0
            }
          ]
        };

        // Send the formatted data via a POST request to the webhook URL
        const response = await fetch('https://hooks.zapier.com/hooks/catch/16946926/23infqp/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log('Data successfully sent to webhook:', responseData);
      } catch (error) {
        console.error('Error sending data to webhook:', error);
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
