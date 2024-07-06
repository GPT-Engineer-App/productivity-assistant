import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InviteUser = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Invite User to Shopping List</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" {...register("email")} />
            </div>
            <Button type="submit">Invite</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default InviteUser;