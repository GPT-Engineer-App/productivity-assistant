import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const nonAlcoholicData = [
  { item: "SYRUP GRAPE", qty: "2 1/2", openingStock: "150 ml", closingStock: "1000 ml", total: "1000 ml" },
  { item: "ELDERFLOWER", qty: "3", openingStock: "3", closingStock: "2100 ml", total: "2100 ml" },
  { item: "ROSE", qty: "2", openingStock: "2", closingStock: "400 ml", total: "400 ml" },
  { item: "PASSIONFRUIT", qty: "2", openingStock: "170 ml", closingStock: "1570 ml", total: "1570 ml" },
  { item: "STRAWBERRY SYRUP", qty: "4 1/2", openingStock: "100 ml", closingStock: "3250 ml", total: "3250 ml" },
  { item: "MANGO", qty: "2", openingStock: "200 ml", closingStock: "1520 ml", total: "1520 ml" },
  { item: "BLUE LAGOON", qty: "3 1/2", openingStock: "150 ml", closingStock: "1750 ml", total: "1750 ml" },
  { item: "LYCHEE", qty: "2", openingStock: "150 ml", closingStock: "3500 ml", total: "3500 ml" },
  { item: "PUREE PEACH", qty: "1 1/2", openingStock: "170 ml", closingStock: "1650 ml", total: "1650 ml" },
  { item: "YUZU", qty: "2", openingStock: "170 ml", closingStock: "1500 ml", total: "1500 ml" },
  { item: "STRAWBERRY PUREE", qty: "4 1/2", openingStock: "150 ml", closingStock: "930 ml", total: "930 ml" },
  { item: "JUICES WATERMELON", qty: "3", openingStock: "50", closingStock: "2300 ml", total: "2300 ml" },
  { item: "PINEAPPLE", qty: "3", openingStock: "500 ml", closingStock: "6500 ml", total: "6500 ml" },
  { item: "ORANGE", qty: "3", openingStock: "500 ml", closingStock: "6500 ml", total: "6500 ml" },
  { item: "LEMON JUICE", qty: "1 1/2", openingStock: "700 ml", closingStock: "1000 ml", total: "1000 ml" },
  { item: "APPLE", qty: "3", openingStock: "3", closingStock: "500 ml", total: "500 ml" },
  { item: "CRANBERRY", qty: "6", openingStock: "500 ml", closingStock: "6800 ml", total: "6800 ml" },
  { item: "SODA", qty: "11", openingStock: "11 can", closingStock: "3 liters", total: "3 liters" },
  { item: "COKE 1 LTR", qty: "3", openingStock: "3 liters", closingStock: "9 liters", total: "9 liters" },
  { item: "COKE LIGHT 1 LTR", qty: "9", openingStock: "9 liters", closingStock: "24 can", total: "24 can" },
  { item: "COKE CAN", qty: "26", openingStock: "24 can", closingStock: "24 can", total: "24 can" },
  { item: "COKE LIGHT CAN", qty: "24", openingStock: "24 can", closingStock: "44 can", total: "44 can" },
  { item: "GINGER ALE", qty: "2 1/2", openingStock: "44 can", closingStock: "52 can", total: "52 can" },
  { item: "TONIC WATER", qty: "5 1/2", openingStock: "52 can", closingStock: "13 can", total: "13 can" },
  { item: "SPRITE", qty: "13", openingStock: "13 can", closingStock: "13 can", total: "13 can" },
  { item: "AGAVE", qty: "2", openingStock: "2", closingStock: "1740 ml", total: "1740 ml" },
];

const alcoholicData = [
  { item: "Baileys", qty: "1", volume: "750 ml" },
  { item: "Chivas", qty: "1", volume: "750 ml" },
  { item: "Chivas (BB)", qty: "1.8", volume: "1800 ml" },
  { item: "Hennessy VS", qty: "1", volume: "700 ml" },
  { item: "Tripple Sec - 0.5", qty: "375 ml" },
  { item: "Tripple Sec BB - 2", qty: "1400 ml" },
  { item: "Vodka BB - 2", qty: "1500 ml" },
  { item: "Rum BB - 4", qty: "3000 ml" },
  { item: "Jameson - 1", qty: "750 ml" },
  { item: "Absinthe - 0.2", qty: "1600 ml" },
  { item: "Sparkling Wine - 1", qty: "750 ml" },
  { item: "Archers - 0.7", qty: "675 ml" },
  { item: "Jack Daniels", qty: "2 BTL" },
  { item: "Alfonso", qty: "1 BTL" },
];

const BarInventory = () => {
  const [nonAlcoholic, setNonAlcoholic] = useState(nonAlcoholicData);
  const [alcoholic, setAlcoholic] = useState(alcoholicData);

  const handleInputChange = (e, index, type) => {
    const { name, value } = e.target;
    if (type === "nonAlcoholic") {
      const updatedData = [...nonAlcoholic];
      updatedData[index][name] = value;
      setNonAlcoholic(updatedData);
    } else {
      const updatedData = [...alcoholic];
      updatedData[index][name] = value;
      setAlcoholic(updatedData);
    }
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Non-Alcoholic Beverages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {nonAlcoholic.map((item, index) => (
              <div key={index} className="grid grid-cols-5 gap-4">
                <div>
                  <Label>Item</Label>
                  <Input
                    name="item"
                    value={item.item}
                    onChange={(e) => handleInputChange(e, index, "nonAlcoholic")}
                  />
                </div>
                <div>
                  <Label>Qty</Label>
                  <Input
                    name="qty"
                    value={item.qty}
                    onChange={(e) => handleInputChange(e, index, "nonAlcoholic")}
                  />
                </div>
                <div>
                  <Label>Opening Stock</Label>
                  <Input
                    name="openingStock"
                    value={item.openingStock}
                    onChange={(e) => handleInputChange(e, index, "nonAlcoholic")}
                  />
                </div>
                <div>
                  <Label>Closing Stock</Label>
                  <Input
                    name="closingStock"
                    value={item.closingStock}
                    onChange={(e) => handleInputChange(e, index, "nonAlcoholic")}
                  />
                </div>
                <div>
                  <Label>Total</Label>
                  <Input
                    name="total"
                    value={item.total}
                    onChange={(e) => handleInputChange(e, index, "nonAlcoholic")}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alcoholic Beverages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alcoholic.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Item</Label>
                  <Input
                    name="item"
                    value={item.item}
                    onChange={(e) => handleInputChange(e, index, "alcoholic")}
                  />
                </div>
                <div>
                  <Label>Qty</Label>
                  <Input
                    name="qty"
                    value={item.qty}
                    onChange={(e) => handleInputChange(e, index, "alcoholic")}
                  />
                </div>
                <div>
                  <Label>Volume</Label>
                  <Input
                    name="volume"
                    value={item.volume}
                    onChange={(e) => handleInputChange(e, index, "alcoholic")}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BarInventory;