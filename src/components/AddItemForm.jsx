import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const AddItemForm = ({ listId }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Item Name</Label>
        <Input id="name" {...register("name")} />
      </div>
      <div>
        <Label htmlFor="quantity">Quantity</Label>
        <Input id="quantity" {...register("quantity")} />
      </div>
      <Button type="submit">Add Item</Button>
    </form>
  );
};