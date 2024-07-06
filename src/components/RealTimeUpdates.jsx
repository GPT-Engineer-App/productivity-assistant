import { useEffect, useState } from "react";
import { toast } from "sonner";

export const RealTimeUpdates = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    // Mock real-time updates
    const interval = setInterval(() => {
      const newUpdate = { id: updates.length + 1, message: "New update!" };
      setUpdates((prev) => [...prev, newUpdate]);
      toast(newUpdate.message);
    }, 5000);

    return () => clearInterval(interval);
  }, [updates]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Real-Time Updates</h2>
      <ul>
        {updates.map((update) => (
          <li key={update.id}>{update.message}</li>
        ))}
      </ul>
    </div>
  );
};