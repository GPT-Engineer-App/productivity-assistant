import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const schema = z.object({
  recipientEmail: z.string().email("Invalid email address"),
  gift: z.string().min(1, "Please select a gift"),
  message: z.string().optional(),
});

const SendGift = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    // Logic to send the gift
    toast.success("Gift sent successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Send a Gift</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="recipientEmail">Recipient's Email</Label>
              <Input id="recipientEmail" type="email" {...register("recipientEmail")} />
              {errors.recipientEmail && <p className="text-red-500">{errors.recipientEmail.message}</p>}
            </div>
            <div>
              <Label htmlFor="gift">Gift</Label>
              <Input id="gift" type="text" {...register("gift")} />
              {errors.gift && <p className="text-red-500">{errors.gift.message}</p>}
            </div>
            <div>
              <Label htmlFor="message">Personalized Message</Label>
              <Input id="message" type="text" {...register("message")} />
            </div>
            <Button type="submit">Send Gift</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SendGift;