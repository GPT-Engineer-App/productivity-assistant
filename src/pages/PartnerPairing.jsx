import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const schema = z.object({
  partnerEmail: z.string().email("Invalid email address"),
});

const PartnerPairing = () => {
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
    const { partnerEmail } = data;
    const user = supabase.auth.user();

    const { data: partner, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("email", partnerEmail)
      .single();

    if (error) {
      toast.error("Partner not found");
      setLoading(false);
      return;
    }

    const { error: pairingError } = await supabase
      .from("partners")
      .insert([{ user_id: user.id, partner_id: partner.id }]);

    if (pairingError) {
      toast.error(pairingError.message);
      setLoading(false);
      return;
    }

    toast.success("Partner paired successfully!");
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Pair with Partner</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="partnerEmail">Partner's Email</Label>
              <Input id="partnerEmail" type="email" {...register("partnerEmail")} />
              {errors.partnerEmail && <p className="text-red-500">{errors.partnerEmail.message}</p>}
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Pairing..." : "Pair with Partner"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PartnerPairing;