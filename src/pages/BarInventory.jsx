import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const schema = z.object({
  itemName: z.string().min(1, "Item name is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  price: z.number().min(0.01, "Price must be at least 0.01"),
});

const BarInventory = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("https://hooks.zapier.com/hooks/catch/16946926/23infqp/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to push data to webhook");
      }

      toast.success("Inventory data pushed successfully!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Bar Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="itemName">Item Name</Label>
              <Input id="itemName" type="text" {...register("itemName")} />
              {errors.itemName && <p className="text-red-500">{errors.itemName.message}</p>}
            </div>
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" type="number" {...register("quantity", { valueAsNumber: true })} />
              {errors.quantity && <p className="text-red-500">{errors.quantity.message}</p>}
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input id="price" type="number" step="0.01" {...register("price", { valueAsNumber: true })} />
              {errors.price && <p className="text-red-500">{errors.price.message}</p>}
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Pushing..." : "Push to Webhook"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BarInventory;