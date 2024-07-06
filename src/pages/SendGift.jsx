import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const SendGift = () => {
  const [recipient, setRecipient] = useState("");
  const [gift, setGift] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendGift = () => {
    setLoading(true);
    // Logic to send gift goes here
    // For now, just simulate a successful send
    setTimeout(() => {
      toast.success("Gift sent successfully!");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Send E-Gift</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="recipient">Recipient's Email</Label>
              <Input
                id="recipient"
                type="email"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="gift">Gift</Label>
              <Input
                id="gift"
                type="text"
                value={gift}
                onChange={(e) => setGift(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="message">Personalized Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button onClick={handleSendGift} disabled={loading}>
              {loading ? "Sending..." : "Send Gift"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SendGift;