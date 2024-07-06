import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const nonAlcoholicBeverages = [
  { item: "SYRUP GRAPE", qty: "2 1/2", openingStock: "150 ml", closingStock: "1000 ml" },
  { item: "ELDERFLOWER", qty: "3", openingStock: "3", closingStock: "2100 ml" },
  // Add more items here based on the image data
];

const alcoholicBeverages = [
  { item: "Baileys", qty: "1", openingStock: "750 ml", closingStock: "" },
  { item: "Chivas", qty: "1", openingStock: "750 ml", closingStock: "" },
  // Add more items here based on the image data
];

const BarInventory = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      nonAlcoholic: nonAlcoholicBeverages,
      alcoholic: alcoholicBeverages,
    },
  });

  const { fields: nonAlcoholicFields } = useFieldArray({
    control,
    name: "nonAlcoholic",
  });

  const { fields: alcoholicFields } = useFieldArray({
    control,
    name: "alcoholic",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Bar Inventory</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Non-Alcoholic Beverages</CardTitle>
          </CardHeader>
          <CardContent>
            {nonAlcoholicFields.map((field, index) => (
              <div key={field.id} className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <Label>Item</Label>
                  <Input {...register(`nonAlcoholic.${index}.item`)} defaultValue={field.item} />
                </div>
                <div>
                  <Label>Qty</Label>
                  <Input {...register(`nonAlcoholic.${index}.qty`)} defaultValue={field.qty} />
                </div>
                <div>
                  <Label>Opening Stock</Label>
                  <Input {...register(`nonAlcoholic.${index}.openingStock`)} defaultValue={field.openingStock} />
                </div>
                <div>
                  <Label>Closing Stock</Label>
                  <Input {...register(`nonAlcoholic.${index}.closingStock`)} defaultValue={field.closingStock} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alcoholic Beverages</CardTitle>
          </CardHeader>
          <CardContent>
            {alcoholicFields.map((field, index) => (
              <div key={field.id} className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <Label>Item</Label>
                  <Input {...register(`alcoholic.${index}.item`)} defaultValue={field.item} />
                </div>
                <div>
                  <Label>Qty</Label>
                  <Input {...register(`alcoholic.${index}.qty`)} defaultValue={field.qty} />
                </div>
                <div>
                  <Label>Opening Stock</Label>
                  <Input {...register(`alcoholic.${index}.openingStock`)} defaultValue={field.openingStock} />
                </div>
                <div>
                  <Label>Closing Stock</Label>
                  <Input {...register(`alcoholic.${index}.closingStock`)} defaultValue={field.closingStock} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default BarInventory;