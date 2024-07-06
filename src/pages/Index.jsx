import React from 'react';

const Index = () => {
  const inventoryData = [
    { date: 'July 3, 2024', description: 'Alfonso', itemsOnHand: 15, itemsRequest: 21, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'OldMonk - Rum', itemsOnHand: '', itemsRequest: 10, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Ginebra Gin', itemsOnHand: 0, itemsRequest: 6, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Henesy', itemsOnHand: '', itemsRequest: 4, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Midori', itemsOnHand: '', itemsRequest: 4, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Malibu', itemsOnHand: '', itemsRequest: 4, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Kahlua', itemsOnHand: '', itemsRequest: 4, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Grand Mariner', itemsOnHand: 0, itemsRequest: 2, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Velvedere', itemsOnHand: '', itemsRequest: 2, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Gordons', itemsOnHand: '', itemsRequest: 2, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Sambuca', itemsOnHand: '', itemsRequest: 2, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Moskovskaya Vodka', itemsOnHand: '', itemsRequest: 6, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Serlon Vodka', itemsOnHand: '', itemsRequest: 12, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'JD', itemsOnHand: 0, itemsRequest: 6, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Ramazz', itemsOnHand: '', itemsRequest: 2, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Jameson', itemsOnHand: 0, itemsRequest: 2, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Red Label', itemsOnHand: 0, itemsRequest: 2, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Corona', itemsOnHand: 48, itemsRequest: 96, unitPrice: '', totalPrice: '' },
    { date: 'July 3, 2024', description: 'Heineken', itemsOnHand: 48, itemsRequest: 96, unitPrice: '', totalPrice: '' },
  ];

  return (
    <div className="text-center">
      <h1 className="text-3xl">Bar Inventory Sheet</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items On Hand</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items Request</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Price</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Price</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {inventoryData.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.itemsOnHand}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.itemsRequest}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.unitPrice}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;