import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [nonAlcoholic, setNonAlcoholic] = useState([
    { item: "SYRUP (GRAPE)", qty: 2, openingStock: "", closingStock: "", total: "" },
    { item: "ELDERFLOWER", qty: 3, openingStock: "", closingStock: "", total: "" },
    { item: "ROSE", qty: 2, openingStock: "", closingStock: "", total: "" },
    { item: "PASSIONFRUIT", qty: 2, openingStock: "", closingStock: "", total: "" },
    { item: "STRAWBERRY (SYRUP)", qty: 4, openingStock: "", closingStock: "", total: "" },
    { item: "MANGO", qty: 2, openingStock: "", closingStock: "", total: "" },
    { item: "BLUE LAGOON", qty: 2, openingStock: "", closingStock: "", total: "" },
    { item: "LYCHEE", qty: 2, openingStock: "", closingStock: "", total: "" },
    { item: "PUREE (PEACH)", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "YUZU", qty: 2, openingStock: "", closingStock: "", total: "" },
    { item: "STRAWBERRY (PUREE)", qty: 2, openingStock: "", closingStock: "", total: "" },
    { item: "JUICES (WATERMELON)", qty: 3, openingStock: "", closingStock: "", total: "" },
    { item: "PINEAPPLE", qty: 2, openingStock: "", closingStock: "", total: "" },
    { item: "ORANGE", qty: 2, openingStock: "", closingStock: "", total: "" },
    { item: "LEMON JUICE", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "APPLE", qty: 3, openingStock: "", closingStock: "", total: "" },
    { item: "CRANBERRY", qty: 6, openingStock: "", closingStock: "", total: "" },
    { item: "SODA", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "COKE 1 LTR", qty: 3, openingStock: "", closingStock: "", total: "" },
    { item: "COKE LIGHT 1 LTR", qty: 9, openingStock: "", closingStock: "", total: "" },
    { item: "COKE CAN", qty: 26, openingStock: "", closingStock: "", total: "" },
    { item: "COKE LIGHT CAN", qty: 24, openingStock: "", closingStock: "", total: "" },
    { item: "GINGER ALE", qty: 2, openingStock: "", closingStock: "", total: "" },
    { item: "TONIC WATER", qty: 5, openingStock: "", closingStock: "", total: "" },
    { item: "SPRITE", qty: 13, openingStock: "", closingStock: "", total: "" },
    { item: "AGAVE", qty: 2, openingStock: "", closingStock: "", total: "" },
  ]);

  const [alcoholic, setAlcoholic] = useState([
    { item: "Baileys", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "Chivas", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "Chivas (BB)", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "Hennessy VS", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "Tripple Sec - 0.5", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "Tripple Sec BB - 2", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "Vodka BB - 2", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "Rum BB - 4", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "Jameson", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "Absinthe - 0.2", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "Sparkling Wine", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "Archers - 0.7", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "Jack Daniels", qty: 2, openingStock: "", closingStock: "", total: "" },
    { item: "Alfonso", qty: 1, openingStock: "", closingStock: "", total: "" },
  ]);

  const [additionalAlcoholic, setAdditionalAlcoholic] = useState([
    { item: "HEINEKEN", qty: 66, openingStock: "", closingStock: "", total: "" },
    { item: "CORONA", qty: 69, openingStock: "", closingStock: "", total: "" },
    { item: "WHISKY", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "JACK DANIELS", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "JACK DANIELS (BB)", qty: 2, openingStock: "", closingStock: "", total: "" },
    { item: "BULLEIT", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "RED LABEL", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "BLACK LABEL", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "DEWARS", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "ALFONSO", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "GORDON", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "BOMBAY SAPPHIRE", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "GIN (BB)", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "STOLICHNAYA", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "GREYGOOSE", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "BACARDI WHITE", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "CAPTAIN MORGAN", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "TAKAMAKA", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "CACHACA", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "VERMOUT ROSSO", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "VERMOUT DRY", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "CAMPARI", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "APEROL", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "SAMBUCA", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "EL JIMADOR", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "TEQUILA (BB)", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "JOSE CUERVO", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "ABSOLUTE VODKA", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "TANQUERAY LND", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "HENDRICKS", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "JAGER MEISTER", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "COINTREAU", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "MALIBU", qty: 1, openingStock: "", closingStock: "", total: "" },
  ]);

  const handleInputChange = (section, index, field, value) => {
    const updateSection = (sectionState, setSectionState) => {
      const updatedItems = [...sectionState];
      updatedItems[index][field] = value;
      setSectionState(updatedItems);
    };

    switch (section) {
      case "nonAlcoholic":
        updateSection(nonAlcoholic, setNonAlcoholic);
        break;
      case "alcoholic":
        updateSection(alcoholic, setAlcoholic);
        break;
      case "additionalAlcoholic":
        updateSection(additionalAlcoholic, setAdditionalAlcoholic);
        break;
      default:
        break;
    }
  };

  const renderSection = (title, items, section) => (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Opening Stock</th>
              <th>Closing Stock</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.item}</td>
                <td>{item.qty}</td>
                <td>
                  <Input
                    value={item.openingStock}
                    onChange={(e) =>
                      handleInputChange(section, index, "openingStock", e.target.value)
                    }
                  />
                </td>
                <td>
                  <Input
                    value={item.closingStock}
                    onChange={(e) =>
                      handleInputChange(section, index, "closingStock", e.target.value)
                    }
                  />
                </td>
                <td>
                  <Input
                    value={item.total}
                    onChange={(e) =>
                      handleInputChange(section, index, "total", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Bar Inventory</h1>
      {renderSection("Non-Alcoholic Beverages", nonAlcoholic, "nonAlcoholic")}
      {renderSection("Alcoholic Beverages", alcoholic, "alcoholic")}
      {renderSection("Additional Alcoholic Beverages", additionalAlcoholic, "additionalAlcoholic")}
      <Button className="mt-4">Save Inventory</Button>
    </div>
  );
};

export default Index;