import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [nonAlcoholic, setNonAlcoholic] = useState([
    { item: "SYRUP (GRAPE)", qty: 2, openingStock: "", closingStock: "", total: "" },
    { item: "ELDERFLOWER", qty: 3, openingStock: "", closingStock: "", total: "" },
    // Add more items as needed
  ]);

  const [alcoholic, setAlcoholic] = useState([
    { item: "Baileys", qty: 1, openingStock: "", closingStock: "", total: "" },
    { item: "Chivas", qty: 1, openingStock: "", closingStock: "", total: "" },
    // Add more items as needed
  ]);

  const [additionalAlcoholic, setAdditionalAlcoholic] = useState([
    { item: "HEINEKEN", qty: 66, openingStock: "", closingStock: "", total: "" },
    { item: "CORONA", qty: 69, openingStock: "", closingStock: "", total: "" },
    // Add more items as needed
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