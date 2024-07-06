import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { inviteToShoppingList } from "@/api/shoppingLists";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router-dom";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

const InviteToShoppingList = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation(inviteToShoppingList, {
    onSuccess: () => {
      queryClient.invalidateQueries(["shoppingList", id]);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate({ listId: id, email: data.email });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Invite to Shopping List</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" {...register("email")} />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <Button type="submit" disabled={mutation.isLoading}>
              {mutation.isLoading ? "Inviting..." : "Invite"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default InviteToShoppingList;