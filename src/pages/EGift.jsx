import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useQuery } from "@tanstack/react-query";

const schema = z.object({
  recipientEmail: z.string().email("Invalid email address"),
  gift: z.string().min(1, "Please select a gift"),
  message: z.string().optional(),
});

const EGift = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    // Logic to send e-gift
    toast.success("E-Gift sent successfully!");
    setLoading(false);
  };

  const { data: gifts, isLoading: giftsLoading } = useQuery({
    queryKey: ["gifts"],
    queryFn: async () => {
      // Fetch gifts from online shopping service
      return [];
    },
  });

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Send E-Gift</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="recipientEmail">Recipient's Email</Label>
              <Input id="recipientEmail" type="email" {...register("recipientEmail")} />
              {errors.recipientEmail && <p className="text-red-500">{errors.recipientEmail.message}</p>}
            </div>
            <div>
              <Label htmlFor="gift">Select Gift</Label>
              <Select {...register("gift")}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a gift" />
                </SelectTrigger>
                <SelectContent>
                  {giftsLoading ? (
                    <SelectItem value="" disabled>Loading...</SelectItem>
                  ) : (
                    gifts.map((gift) => (
                      <SelectItem key={gift.id} value={gift.id}>{gift.name}</SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
              {errors.gift && <p className="text-red-500">{errors.gift.message}</p>}
            </div>
            <div>
              <Label htmlFor="message">Personalized Message</Label>
              <Textarea id="message" {...register("message")} />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send E-Gift"}
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Received E-Gifts</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Logic to display received e-gifts */}
          <p>No received e-gifts yet.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EGift;