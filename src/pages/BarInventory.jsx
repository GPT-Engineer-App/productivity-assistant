import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    { description: "Cachaca", itemsOnHand: "1.7", itemsRequest: "1275 ML", unitPrice: null, totalPrice: null },
    { description: "Vermout Rosso", itemsOnHand: "0.9", itemsRequest: "940 ML", unitPrice: null, totalPrice: null },
    { description: "Vermout Dry", itemsOnHand: "0.7", itemsRequest: "1000 ML", unitPrice: null, totalPrice: null },
    { description: "Campari", itemsOnHand: "0.5 + 1", itemsRequest: "1300 ML", unitPrice: null, totalPrice: null },
    { description: "Aperol", itemsOnHand: "1", itemsRequest: "700 ML", unitPrice: null, totalPrice: null },
    { description: "Sambuca", itemsOnHand: "1", itemsRequest: "700 ML", unitPrice: null, totalPrice: null },
    { description: "El Jimador", itemsOnHand: "0.9", itemsRequest: "675 ML", unitPrice: null, totalPrice: null },
    { description: "Tequila (BB)", itemsOnHand: "1.15", itemsRequest: "1150 ML", unitPrice: null, totalPrice: null },
    { description: "Jose Cuervo", itemsOnHand: "1.7", itemsRequest: "1370 ML", unitPrice: null, totalPrice: null },
    { description: "Absolute Vodka", itemsOnHand: "1.9", itemsRequest: "1440 ML", unitPrice: null, totalPrice: null },
    { description: "Tanqueray LND", itemsOnHand: "1", itemsRequest: "700 ML", unitPrice: null, totalPrice: null },
    { description: "Hendricks", itemsOnHand: "1", itemsRequest: "700 ML", unitPrice: null, totalPrice: null },
    { description: "Jagermeister", itemsOnHand: "7.9", itemsRequest: "640 ML", unitPrice: null, totalPrice: null },
    { description: "Cointreau", itemsOnHand: "1", itemsRequest: "700 ML", unitPrice: null, totalPrice: null },
    { description: "Malibu", itemsOnHand: "2", itemsRequest: "1500 ML", unitPrice: null, totalPrice: null },
    { description: "Grape Syrup", itemsOnHand: "2.5", itemsRequest: "1500 ML", unitPrice: null, totalPrice: null },
    { description: "Elderflower", itemsOnHand: "3", itemsRequest: "2100 ML", unitPrice: null, totalPrice: null },
    { description: "Rose", itemsOnHand: "2", itemsRequest: "4900 ML", unitPrice: null, totalPrice: null },
    { description: "Passionfruit", itemsOnHand: "2", itemsRequest: "1570 ML", unitPrice: null, totalPrice: null },
    { description: "Strawberry Syrup", itemsOnHand: "4.7", itemsRequest: "3250 ML", unitPrice: null, totalPrice: null },
    { description: "Mango", itemsOnHand: "1", itemsRequest: "2000 ML", unitPrice: null, totalPrice: null },
    { description: "Blue Lagoon", itemsOnHand: "2 + 3", itemsRequest: "3500 ML", unitPrice: null, totalPrice: null },
    { description: "Lychee", itemsOnHand: "2", itemsRequest: "1750 ML", unitPrice: null, totalPrice: null },
    { description: "Almond Puree", itemsOnHand: "1 + 1", itemsRequest: "1650 ML", unitPrice: null, totalPrice: null },
    { description: "Peach Puree", itemsOnHand: "1.7", itemsRequest: "1500 ML", unitPrice: null, totalPrice: null },
    { description: "Yuzu", itemsOnHand: "1", itemsRequest: "930 ML", unitPrice: null, totalPrice: null },
    { description: "Strawberry Puree", itemsOnHand: "4.7", itemsRequest: "3250 ML", unitPrice: null, totalPrice: null },
    { description: "Watermelon Juice", itemsOnHand: "3", itemsRequest: "2300 ML", unitPrice: null, totalPrice: null },
    { description: "Pineapple Juice", itemsOnHand: "3", itemsRequest: "6500 ML", unitPrice: null, totalPrice: null },
    { description: "Orange Juice", itemsOnHand: "6", itemsRequest: "6800 ML", unitPrice: null, totalPrice: null },
    { description: "Lemon Juice", itemsOnHand: "1.9", itemsRequest: "1200 ML", unitPrice: null, totalPrice: null },
    { description: "Apple Juice", itemsOnHand: "3", itemsRequest: "500 ML", unitPrice: null, totalPrice: null },
    { description: "Cranberry Juice", itemsOnHand: "6", itemsRequest: "6800 ML", unitPrice: null, totalPrice: null },
    { description: "Coke 1 LTR", itemsOnHand: "3", itemsRequest: "3 LITERS", unitPrice: null, totalPrice: null },
    { description: "Coke Light 1 LTR", itemsOnHand: "9", itemsRequest: "9 LITERS", unitPrice: null, totalPrice: null },
    { description: "Coke Can", itemsOnHand: "26", itemsRequest: "26 CANS", unitPrice: null, totalPrice: null },
    { description: "Coke Light Can", itemsOnHand: "24", itemsRequest: "24 CANS", unitPrice: null, totalPrice: null },
    { description: "Ginger Ale", itemsOnHand: "24", itemsRequest: "24 CANS", unitPrice: null, totalPrice: null },
    { description: "Tonic Water", itemsOnHand: "52", itemsRequest: "52 CANS", unitPrice: null, totalPrice: null },
    { description: "Sprite", itemsOnHand: "13", itemsRequest: "13 CANS", unitPrice: null, totalPrice: null },
    { description: "Agave", itemsOnHand: "2", itemsRequest: "1700 ML", unitPrice: null, totalPrice: null },
  ],
};

const BarInventory = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Bar Inventory - {inventoryData.date}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead>Items On Hand</TableHead>
                <TableHead>Items Requested</TableHead>
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