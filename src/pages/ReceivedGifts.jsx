import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const ReceivedGifts = () => {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    // Logic to fetch received gifts goes here
    // For now, just simulate fetching gifts
    setTimeout(() => {
      setGifts([
        {
          sender: "john@example.com",
          gift: "Amazon Gift Card",
          message: "Happy Birthday!",
        },
        {
          sender: "jane@example.com",
          gift: "Starbucks Gift Card",
          message: "Enjoy your coffee!",
        },
      ]);
      toast.success("Gifts fetched successfully!");
    }, 2000);
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Received Gifts</h1>
      <div className="space-y-2">
        {gifts.map((gift, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Gift from {gift.sender}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Gift:</strong> {gift.gift}</p>
              <p><strong>Message:</strong> {gift.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReceivedGifts;