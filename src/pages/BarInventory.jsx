import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const inventoryData = {
  date: "June 01, 2024",
  inventory: [
    { description: "Heineken", itemsOnHand: "50 BTLS", itemsRequest: "66 BTLS", unitPrice: null, totalPrice: null },
    { description: "Corona", itemsOnHand: "69 BTLS", itemsRequest: null, unitPrice: null, totalPrice: null },
    { description: "Jack Daniels", itemsOnHand: "1", itemsRequest: "750 ML", unitPrice: null, totalPrice: null },
    { description: "Jack Daniels (BB)", itemsOnHand: "2.5", itemsRequest: "2500 ML", unitPrice: null, totalPrice: null },
    { description: "Bulleit", itemsOnHand: "1.9", itemsRequest: "1900 ML", unitPrice: null, totalPrice: null },
    { description: "Red Label", itemsOnHand: "1.3", itemsRequest: "1300 ML", unitPrice: null, totalPrice: null },
    { description: "Black Label", itemsOnHand: "1", itemsRequest: "700 ML", unitPrice: null, totalPrice: null },
    { description: "Dewars", itemsOnHand: "1.8", itemsRequest: "3500 ML", unitPrice: null, totalPrice: null },
    { description: "Alfonso", itemsOnHand: "1.7 + 2.8", itemsRequest: "8000 ML", unitPrice: null, totalPrice: null },
    { description: "Gordon", itemsOnHand: "N/A + 0.7", itemsRequest: null, unitPrice: null, totalPrice: null },
    { description: "Bombay Sapphire", itemsOnHand: "1.7", itemsRequest: "1275 ML", unitPrice: null, totalPrice: null },
    { description: "Gin (BB)", itemsOnHand: "3", itemsRequest: "825 ML", unitPrice: null, totalPrice: null },
    { description: "Stolichnaya", itemsOnHand: "3 + 3", itemsRequest: "3600 ML", unitPrice: null, totalPrice: null },
    { description: "Greygoose", itemsOnHand: "1.9", itemsRequest: "2475 ML", unitPrice: null, totalPrice: null },
    { description: "Bacardi White", itemsOnHand: "2.8", itemsRequest: "2100 ML", unitPrice: null, totalPrice: null },
    { description: "Captain Morgan", itemsOnHand: "2", itemsRequest: "1500 ML", unitPrice: null, totalPrice: null },
    { description: "Takamaka", itemsOnHand: "1.8", itemsRequest: "1350 ML", unitPrice: null, totalPrice: null },
  ],
};

const BarInventory = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Bar Inventory</h1>
      <p className="text-lg">Date: {inventoryData.date}</p>
      <Card>
        <CardHeader>
          <CardTitle>Inventory Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead>Items On Hand</TableHead>
                <TableHead>Items Request</TableHead>
                <TableHead>Unit Price</TableHead>
                <TableHead>Total Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryData.inventory.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.itemsOnHand}</TableCell>
                  <TableCell>{item.itemsRequest}</TableCell>
                  <TableCell>{item.unitPrice || "N/A"}</TableCell>
                  <TableCell>{item.totalPrice || "N/A"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BarInventory;