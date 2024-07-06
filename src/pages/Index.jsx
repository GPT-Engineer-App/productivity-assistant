import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Index = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) {
      toast.error("Please enter a message.");
      return;
    }

    setLoading(true);
    try {
      // Simulate API call to AI assistant
      const simulatedResponse = await new Promise((resolve) =>
        setTimeout(() => resolve("This is a simulated response from the AI assistant."), 1000)
      );
      setResponse(simulatedResponse);
    } catch (error) {
      toast.error("Failed to get response from AI assistant.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>AI Assistant</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Ask me anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          />
          <Button onClick={handleSendMessage} disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </Button>
          {response && (
            <div className="mt-4 p-4 border rounded-lg">
              <h2 className="text-xl font-semibold">Response:</h2>
              <p>{response}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;