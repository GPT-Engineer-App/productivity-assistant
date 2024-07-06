const Index = () => {
  const inventoryData = [
    { description: "Heineken", itemsOnHand: "50 BTLS", itemsRequest: "66 BTLS" },
    { description: "Corona", itemsOnHand: "69 BTLS", itemsRequest: null },
    { description: "Jack Daniels", itemsOnHand: "1", itemsRequest: "750 ML" },
    { description: "Jack Daniels (BB)", itemsOnHand: "2.5", itemsRequest: "2500 ML" },
    { description: "Bulleit", itemsOnHand: "1.9", itemsRequest: "1900 ML" },
    { description: "Red Label", itemsOnHand: "1.3", itemsRequest: "1300 ML" },
    { description: "Black Label", itemsOnHand: "1", itemsRequest: "700 ML" },
    { description: "Dewars", itemsOnHand: "1.8", itemsRequest: "3500 ML" },
    { description: "Alfonso", itemsOnHand: "1.7 + 2.8", itemsRequest: "8000 ML" },
    { description: "Gordon", itemsOnHand: "N/A + 0.7", itemsRequest: null },
    { description: "Bombay Sapphire", itemsOnHand: "1.7", itemsRequest: "1275 ML" },
    { description: "Gin (BB)", itemsOnHand: "3", itemsRequest: "825 ML" },
    { description: "Stolichnaya", itemsOnHand: "3 + 3", itemsRequest: "3600 ML" },
    { description: "Greygoose", itemsOnHand: "1.9", itemsRequest: "2475 ML" },
    { description: "Bacardi White", itemsOnHand: "2.8", itemsRequest: "2100 ML" },
    { description: "Captain Morgan", itemsOnHand: "2", itemsRequest: "1500 ML" },
    { description: "Takamaka", itemsOnHand: "1.8", itemsRequest: "1350 ML" },
    { description: "Cachaca", itemsOnHand: "1.7", itemsRequest: "1275 ML" },
    { description: "Vermout Rosso", itemsOnHand: "0.9", itemsRequest: "940 ML" },
    { description: "Vermout Dry", itemsOnHand: "0.7", itemsRequest: "1000 ML" },
    { description: "Campari", itemsOnHand: "0.5 + 1", itemsRequest: "1300 ML" },
    { description: "Aperol", itemsOnHand: "1", itemsRequest: "700 ML" },
    { description: "Sambuca", itemsOnHand: "1", itemsRequest: "700 ML" },
    { description: "El Jimador", itemsOnHand: "0.9", itemsRequest: "675 ML" },
    { description: "Tequila (BB)", itemsOnHand: "1.15", itemsRequest: "1150 ML" },
    { description: "Jose Cuervo", itemsOnHand: "1.7", itemsRequest: "1370 ML" },
    { description: "Absolute Vodka", itemsOnHand: "1.9", itemsRequest: "1440 ML" },
    { description: "Tanqueray LND", itemsOnHand: "1", itemsRequest: "700 ML" },
    { description: "Hendricks", itemsOnHand: "1", itemsRequest: "700 ML" },
    { description: "Jagermeister", itemsOnHand: "7.9", itemsRequest: "640 ML" },
    { description: "Cointreau", itemsOnHand: "1", itemsRequest: "700 ML" },
    { description: "Malibu", itemsOnHand: "2", itemsRequest: "1500 ML" },
    { description: "Grape Syrup", itemsOnHand: "2.5", itemsRequest: "1500 ML" },
    { description: "Elderflower", itemsOnHand: "3", itemsRequest: "2100 ML" },
    { description: "Rose", itemsOnHand: "2", itemsRequest: "4900 ML" },
    { description: "Passionfruit", itemsOnHand: "2", itemsRequest: "1570 ML" },
    { description: "Strawberry Syrup", itemsOnHand: "4.7", itemsRequest: "3250 ML" },
    { description: "Mango", itemsOnHand: "1", itemsRequest: "2000 ML" },
    { description: "Blue Lagoon", itemsOnHand: "2 + 3", itemsRequest: "3500 ML" },
    { description: "Lychee", itemsOnHand: "2", itemsRequest: "1750 ML" },
    { description: "Almond Puree", itemsOnHand: "1 + 1", itemsRequest: "1650 ML" },
    { description: "Peach Puree", itemsOnHand: "1.7", itemsRequest: "1500 ML" },
    { description: "Yuzu", itemsOnHand: "1", itemsRequest: "930 ML" },
    { description: "Strawberry Puree", itemsOnHand: "4.7", itemsRequest: "3250 ML" },
    { description: "Watermelon Juice", itemsOnHand: "3", itemsRequest: "2300 ML" },
    { description: "Pineapple Juice", itemsOnHand: "3", itemsRequest: "6500 ML" },
    { description: "Orange Juice", itemsOnHand: "6", itemsRequest: "6800 ML" },
    { description: "Lemon Juice", itemsOnHand: "1.9", itemsRequest: "1200 ML" },
    { description: "Apple Juice", itemsOnHand: "3", itemsRequest: "500 ML" },
    { description: "Cranberry Juice", itemsOnHand: "6", itemsRequest: "6800 ML" },
    { description: "Coke 1 LTR", itemsOnHand: "3", itemsRequest: "3 LITERS" },
    { description: "Coke Light 1 LTR", itemsOnHand: "9", itemsRequest: "9 LITERS" },
    { description: "Coke Can", itemsOnHand: "26", itemsRequest: "26 CANS" },
    { description: "Coke Light Can", itemsOnHand: "24", itemsRequest: "24 CANS" },
    { description: "Ginger Ale", itemsOnHand: "24", itemsRequest: "24 CANS" },
    { description: "Tonic Water", itemsOnHand: "52", itemsRequest: "52 CANS" },
    { description: "Sprite", itemsOnHand: "13", itemsRequest: "13 CANS" },
    { description: "Agave", itemsOnHand: "2", itemsRequest: "1700 ML" },
    { description: "Baileys", itemsOnHand: "1", itemsRequest: "750 ML" },
    { description: "Chivas", itemsOnHand: "1", itemsRequest: "750 ML" },
    { description: "Chivas (BB)", itemsOnHand: "1.8", itemsRequest: "1800 ML" },
    { description: "Hennessy VS", itemsOnHand: "1", itemsRequest: "700 ML" },
    { description: "Triple Sec 0.5", itemsOnHand: "1", itemsRequest: "375 ML" },
    { description: "Triple Sec (BB) 2", itemsOnHand: "1", itemsRequest: "1400 ML" },
    { description: "Vodka (BB) 2", itemsOnHand: "1", itemsRequest: "1500 ML" },
    { description: "Rum (BB) 4", itemsOnHand: "1", itemsRequest: "3000 ML" },
    { description: "Jameson", itemsOnHand: "1", itemsRequest: "750 ML" },
    { description: "Absinthe 0.2", itemsOnHand: "1", itemsRequest: "1600 ML" },
    { description: "Sparkling Wine", itemsOnHand: "1", itemsRequest: "750 ML" },
    { description: "Archer's 0.7", itemsOnHand: "1", itemsRequest: "675 ML" },
    { description: "Jack Daniels", itemsOnHand: "2 BTLS", itemsRequest: null },
    { description: "Alfonso", itemsOnHand: "-1 BTLS", itemsRequest: null },
  ];

  return (
    <div className="text-center">
      <h1 className="text-3xl">Bar Inventory</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Items On Hand
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Items Request
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {inventoryData.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.itemsOnHand}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.itemsRequest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;