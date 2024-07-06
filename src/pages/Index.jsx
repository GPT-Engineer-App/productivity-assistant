import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const initialNonAlcoholicData = [
  { item: "SYRUP", qty: "2 1/2", openingStock: "150 ml", closingStock: "1000 ml" },
  { item: "ELDERFLOWER", qty: "3", openingStock: "3", closingStock: "2100 ml" },
  { item: "ROSE", qty: "2", openingStock: "2", closingStock: "400 ml" },
  { item: "PASSIONFRUIT", qty: "2", openingStock: "170 ml", closingStock: "1570 ml" },
  { item: "STRAWBERRY", qty: "4 1/2", openingStock: "100 ml", closingStock: "3250 ml" },
  { item: "MANGO", qty: "2", openingStock: "200 ml", closingStock: "1520 ml" },
  { item: "BLUE LAGOON", qty: "3 1/2", openingStock: "150 ml", closingStock: "1750 ml" },
  { item: "LYCHEE", qty: "2", openingStock: "200 ml", closingStock: "3500 ml" },
  { item: "PUREE", qty: "1 1/2", openingStock: "170 ml", closingStock: "1650 ml" },
  { item: "YUZU", qty: "2", openingStock: "170 ml", closingStock: "1500 ml" },
  { item: "STRAWBERRY PUREE", qty: "4 1/2", openingStock: "160 ml", closingStock: "930 ml" },
  { item: "JUICES", qty: "3", openingStock: "50", closingStock: "2300 ml" },
  { item: "PINEAPPLE", qty: "3", openingStock: "500 ml", closingStock: "6500 ml" },
  { item: "ORANGE", qty: "3", openingStock: "500 ml", closingStock: "6500 ml" },
  { item: "LEMON JUICE", qty: "1 1/2", openingStock: "700 ml", closingStock: "1000 ml" },
  { item: "APPLE", qty: "3", openingStock: "3", closingStock: "500 ml" },
  { item: "CRANBERRY", qty: "6", openingStock: "500 ml", closingStock: "6800 ml" },
  { item: "SODA", qty: "11", openingStock: "11 can", closingStock: "3 liters" },
  { item: "COKE 1 LTR", qty: "3", openingStock: "3", closingStock: "9 liters" },
  { item: "COKE LIGHT 1 LTR", qty: "9", openingStock: "9", closingStock: "9 liters" },
  { item: "COKE CAN", qty: "26", openingStock: "26 can", closingStock: "26 can" },
  { item: "COKE LIGHT CAN", qty: "24", openingStock: "24 can", closingStock: "24 can" },
  { item: "GINGER ALE", qty: "2 1/2", openingStock: "44 can", closingStock: "44 can" },
  { item: "TONIC WATER", qty: "5 1/2", openingStock: "52 can", closingStock: "52 can" },
  { item: "SPRITE", qty: "13", openingStock: "13 can", closingStock: "13 can" },
  { item: "AGAVE", qty: "2", openingStock: "", closingStock: "1740 ml" },
];

const initialAlcoholicData = [
  { item: "Baileys", qty: "1", volume: "750 ml" },
  { item: "Chivas", qty: "1", volume: "750 ml" },
  { item: "Chivas (BB)", qty: "1.8", volume: "1800 ml" },
  { item: "Hennessy VS", qty: "1", volume: "700 ml" },
  { item: "Tripple Sec - 0.5", qty: "1", volume: "375 ml" },
  { item: "Tripple Sec BB - 2", qty: "1", volume: "1400 ml" },
  { item: "Vodka BB - 2", qty: "1", volume: "1500 ml" },
  { item: "Rum BB - 4", qty: "1", volume: "3000 ml" },
  { item: "Jameson", qty: "1", volume: "750 ml" },
  { item: "Absinthe - 0.2", qty: "1", volume: "1600 ml" },
  { item: "Sparkling Wine", qty: "1", volume: "750 ml" },
  { item: "Archers - 0.7", qty: "1", volume: "675 ml" },
  { item: "Jack Daniels", qty: "2", volume: "BTL" },
  { item: "Alfonso", qty: "1", volume: "BTL" },
];

const Index = () => {
  const [nonAlcoholicData, setNonAlcoholicData] = useState(initialNonAlcoholicData);
  const [alcoholicData, setAlcoholicData] = useState(initialAlcoholicData);

  const handleNonAlcoholicChange = (index, field, value) => {
    const newData = [...nonAlcoholicData];
    newData[index][field] = value;
    setNonAlcoholicData(newData);
  };

  const handleAlcoholicChange = (index, field, value) => {
    const newData = [...alcoholicData];
    newData[index][field] = value;
    setAlcoholicData(newData);
  };

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Non-Alcoholic Beverages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nonAlcoholicData.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.item}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <label className="block text-sm font-medium">Quantity</label>
                    <Input
                      value={item.qty}
                      onChange={(e) => handleNonAlcoholicChange(index, "qty", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Opening Stock</label>
                    <Input
                      value={item.openingStock}
                      onChange={(e) => handleNonAlcoholicChange(index, "openingStock", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Closing Stock</label>
                    <Input
                      value={item.closingStock}
                      onChange={(e) => handleNonAlcoholicChange(index, "closingStock", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Alcoholic Beverages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {alcoholicData.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.item}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <label className="block text-sm font-medium">Quantity</label>
                    <Input
                      value={item.qty}
                      onChange={(e) => handleAlcoholicChange(index, "qty", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Volume</label>
                    <Input
                      value={item.volume}
                      onChange={(e) => handleAlcoholicChange(index, "volume", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;