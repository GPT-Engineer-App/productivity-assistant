import { useEffect, useState } from "react";
import { subscribeToUpdates } from "@/api/realTimeUpdates";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RealTimeUpdates = ({ listId }) => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeToUpdates(listId, (newUpdate) => {
      setUpdates((prevUpdates) => [newUpdate, ...prevUpdates]);
    });

    return () => unsubscribe();
  }, [listId]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Real-Time Updates</h2>
      <div className="space-y-2">
        {updates.map((update, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{update.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{update.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RealTimeUpdates;