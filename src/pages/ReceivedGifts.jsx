import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReceivedGifts = () => {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    // Fetch received gifts from the server
    const fetchGifts = async () => {
      // Replace with actual API call
      const receivedGifts = [
        {
          sender: "john@example.com",
          gift: "Book",
          message: "Happy Birthday!",
        },
        {
          sender: "jane@example.com",
          gift: "Flowers",
          message: "Congratulations!",
        },
      ];
      setGifts(receivedGifts);
    };

    fetchGifts();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Received Gifts</h1>
      {gifts.map((gift, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>Gift from {gift.sender}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Gift: {gift.gift}</p>
            <p>Message: {gift.message}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ReceivedGifts;